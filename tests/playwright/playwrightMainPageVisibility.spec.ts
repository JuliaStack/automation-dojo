import { test, expect } from '@playwright/test';

test('playwrightMainPageVisibility', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('banner')).toBeVisible();
  await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
  await expect(page.getByLabel('Main', { exact: true })).toContainText('Playwright');
});
