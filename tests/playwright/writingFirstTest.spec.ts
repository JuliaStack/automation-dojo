import { test, expect } from '@playwright/test';

test('writingFirstTest', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Writing tests');
  await page.getByRole('link', { name: 'How to write the first test' }).click();
  await expect(page.locator('#first-test')).toContainText('First test');
});
