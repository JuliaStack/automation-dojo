import { test, expect } from '@playwright/test';
import { generateRandomUser } from '../utils/testData';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com');
});

test('AQA-6 sign up to conduit using css selectors', async ({ page }) => {
  const user = generateRandomUser();
  await page.locator('a[href="/register"]').click();
  await page.locator('[placeholder="Username"]').fill(user.username);
  await page.locator('[placeholder="Email"]').fill(user.email);
  await page.locator('[placeholder="Password"]').fill('qwerty123');
  await page.locator('button[class*="btn-primary"]').click();
  await expect(page.locator('a[href="/@' + user.username + '/"]')).toBeVisible();
});


test('AQA-7 logout from conduit using css selectors', async ({ page }) => {
  const user = generateRandomUser();
  await page.locator('a[href="/register"]').click();
  await page.locator('[placeholder="Username"]').fill(user.username);
  await page.locator('[placeholder="Email"]').fill(user.email);
  await page.locator('[placeholder="Password"]').fill('qwerty123');
  await page.locator('button[class*="btn-primary"]').click();
  await expect(page.locator('a[href="/@' + user.username + '/"]')).toBeVisible();
  await page.locator('a[href="/settings"]').click();
  await page.locator('button.btn-outline-danger').click();
  await expect(page.locator('[data-qa-id="site-nav"]')).toBeVisible();
});
