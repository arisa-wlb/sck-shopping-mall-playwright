import { test, expect } from '@playwright/test';

test('Login สำเร็จด้วย username เท่ากับ user_70 password เท่ากับ P@ssw0rd', async ({ page }) => {
  //เปิดหน้า Website
  await test.step("เปิด Browser แล้วไปยังหน้าที่จะทดสอบ", async() => {
    await page.goto("http://139.59.225.96/auth/login");
    });
    //กรอก User Name
  await test.step("กรอก User Name", async() => {
    await page.locator("#login-username-input").fill("user_70");
  });
  //กรอก Password
    await test.step("กรอก Password", async() => {
    await page.locator("#login-password-input").fill("P@ssw0rd");
  });
  //กดปุ่ม Login
  await test.step("กดปุ่ม Login", async () => {
    await page.locator("#login-btn").click();
  });
  //ตรวจสอบว่า Login สำเร็จและไปหน้าถัดไป
  await test.step("ตรวจสอบว่า Login สำเร็จ", async () => {
    await expect(
      page.getByText(/All Product/i)
    ).toBeVisible();
  });
});
