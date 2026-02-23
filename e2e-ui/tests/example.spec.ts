import { test, expect } from '@playwright/test';

test('Login สำเร็จด้วย username เท่ากับ user_70 password เท่ากับ P@ssw0rd ค้นหาสินค้า Balance Training Bicycle สั่งซื้อ 3 ชิ้ิ้น ชำระเงินสำเร็จ', async ({ page }) => {
  //เปิดหน้า Website
  await test.step("เปิด Browser แล้วไปยังหน้าที่จะทดสอบ", async() => {
    await page.goto("http://139.59.225.96/auth/login");
    });
    //กรอก User Name
  await test.step("กรอก User Name", async() => {
    await page.locator("#login-username-input").fill("user_70")
  });
  //กรอก Password
    await test.step("กรอก Password", async() => {
    await page.locator("#login-password-input").fill("P@ssw0rd")
  });
  //กดปุ่ม Login
  await test.step("กดปุ่ม Login", async () => {
    await page.locator("#login-btn").click();
  });
  //ตรวจสอบว่า Login สำเร็จ
  // await test.step("ตรวจสอบว่า Login สำเร็จ", async () => {
  //   await expect(
  //     page.getByText(/All Product/i)
  //   ).toBeVisible();
  // });
  //ค้นหาสินค้า Balance Training Bicycle ในช่องค้นหา
  await test.step("ค้นหาสินค้า Balance Training Bicycle ในช่องค้นหา" , async () => {
    await page.locator("#search-product-input").fill("Balance Training Bicycle")
  });
  //กดปุ่ม Search
  await test.step("กดปุ่ม Search", async () => {
    await page.locator("#search-product-btn").click();
  });
  //ตรวจสอบว่าพบสินค้า Balance Training Bicycle
  await test.step("ตรวจว่าพบสินค้า Balance Training Bicycle", async () => {
    await expect(page.locator("#product-card-name-1")).toContainText("Balance Training Bicycle");
  });
  //ตรวจสอบราคาสินค้า Balance Training Bicycle เท่ากันกับ ฿4,314.60
  await test.step("ตรวจสอบราคาสินค้า Balance Training Bicycle เท่ากันกับ ฿4,314.60", async () => {
    await expect(page.locator("#product-card-price-1")).toContainText("฿4,314.60");
  });
  //กดที่สินค้า Balance Training Bicycle
  await test.step("กดที่สินค้า Balance Training Bicycle", async () => {
    await page.locator("#product-card-1").click();
  });
  //ตรวจสอบรายละเอียดสินค้า
  await test.step("ตรวจสอบรายละเอียดสินค้า", async () => {
    //ชื่อสินค้า เท่ากันกับ Balance Training Bicycle
    await expect(page.locator("#product-detail-product-name"))
      .toContainText("Balance Training Bicycle");
    //ยี่ห้อ เท่ากันกับ SportsFun
    await expect(page.locator("#product-detail-brand"))
      .toContainText("SportsFun");
    //ราคา เท่ากันกับ ฿4,314.60
    await expect(page.locator("#product-detail-price-thb"))
      .toContainText("฿4,314.60");
    //แต้มที่จะได้รับ เท่ากันกับ 43 Points
    await expect(page.locator("#product-detail-point"))
      .toContainText("43 Points");
  });
  //เพิ่มสินค้าเข้าตะกร้า จำนวน 3 ชิ้น
  await test.step("เพิ่มสินค้าเข้าตะกร้า จำนวน 3 ชิ้น", async () => {
    // กดปุ่ม + 
    await page.locator("#product-detail-quantity-increment-btn").click();
    await page.locator("#product-detail-quantity-increment-btn").click();
  });
  //กดปุ่ม Add to cart
  await test.step("กดปุ่ม Add to cart", async () => {
    await page.locator("#product-detail-add-to-cart-btn").click();
  });
  //ตรวจสอบจำนวนบนไอคอนตะกร้า เท่ากันกับ 1
  await test.step("ตรวจสอบจำนวนบนไอคอนตะกร้า เท่ากันกับ 1", async () => {
    await expect(page.locator("#header-menu-cart-badge")).toContainText("1");
  });
  //กดที่ไอคอนตะกร้า
  await test.step("กดไอคอนตะกร้า", async () => {
    await page.locator("#header-menu-cart-btn").click();
  });
    //ตรวจสอบรายละเอียดสินค้าในตะกร้า
    await test.step("ตรวจสอบรายละเอียดสินค้าในตะกร้า", async () => {
      //ชื่อสินค้า เท่ากันกับ Balance Training Bicycle
        await expect(page.locator('a[href="/product/1"]'))
    .toContainText("Balance Training Bicycle");
      //ราคา เท่ากันกับ ฿12,943.80
      await expect(page.locator("#product-1-price"))
        .toContainText("฿12,943.80");
      //แต้มที่จะได้รับ เท่ากันกับ 129 Points
      await expect(page.locator("#product-1-point"))
        .toContainText("129 Points");
      //ตรวจสอบจำนวนที่เพิ่มเข้าตะกร้า เท่ากันกับ 3
      await expect(page.locator("#product-1-quantity-input"))
      .toHaveValue("3");
      //ตรวจสอบ Subtotal เท่ากันกับ ฿12,943.80
      // await expect(page.locator("#shopping-cart-subtotal-price"))
      //   .toContainText("฿12,943.80");
    });
  //กดปุ่ม Check out
  await test.step("กดปุ่ม Check out", async () => {
    await page.locator("#shopping-cart-checkout-btn").click();
  });
  //ตรวจสอบรายละเอียด Order
  await test.step("ตรวจสอบรายละเอียด Order", async () => {
    //ชื่อสินค้า เท่ากันกับ Balance Training Bicycle
      await expect(page.locator('a[href="/product/1"]'))
  .toContainText("Balance Training Bicycle");
    //ราคา เท่ากันกับ ฿12,943.80
    await expect(page.locator("#product-1-price"))
      .toContainText("฿12,943.80");
    //แต้มที่จะได้รับ เท่ากันกับ 129 Points
    await expect(page.locator("#product-1-point"))
      .toContainText("129 Points");
    //ตรวจสอบจำนวนที่เพิ่มเข้าตะกร้า เท่ากันกับ 3
    await expect(page.locator("#product-1-quantity-input"))
    .toHaveValue("3");
  });
});
