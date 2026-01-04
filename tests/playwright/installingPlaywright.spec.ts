import { test, expect } from '@playwright/test';

test('installingPlaywright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('link', { name: 'Installation' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Installation');
  await expect(page.locator('#installing-playwright')).toContainText('Installing Playwright');
  await expect(page.getByRole('article')).toContainText('npm init playwright@latest');
});
