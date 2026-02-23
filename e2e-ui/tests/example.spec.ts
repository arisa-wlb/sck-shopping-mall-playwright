import { test, expect } from '@playwright/test';

test('Login สำเร็จด้วย username เท่ากับ user_70 password เท่ากับ P@ssw0rd ', async ({ page }) => {
  //เปิดหน้า Website
  await test.step("เปิด Browser แล้วไปยังหน้าที่จะทดสอบ", async() => {
    await page.goto("http://139.59.225.96/auth/login");
    });
});
