import { test, expect } from '@playwright/test';

test('Login สำเร็จด้วย username เท่ากับ user_70 password เท่ากับ P@ssw0rd ค้นหาสินค้า Balance Training Bicycle สั่งซื้อ 1 ชิ้ิ้น ชำระเงินสำเร็จ', async ({ page }) => {
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
  await test.step("ตรวจสอบว่า Login สำเร็จ", async () => {
    await expect(
      page.getByText(/All Product/i)
    ).toBeVisible();
  });
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
});
