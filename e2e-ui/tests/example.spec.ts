import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  test.step("Login to Website", async () => {
    await page.goto('https://playwright.dev/');
  });
});
