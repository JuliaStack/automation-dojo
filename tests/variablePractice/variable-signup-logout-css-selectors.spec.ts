import { test, expect } from '@playwright/test';
import { generateRandomUser } from '../utils/testData';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com');
});

test('AQA-9 sign up to conduit using css selectors', async ({ page }) => {
  const user = generateRandomUser();
  const signupUrl = page.locator('a[href="/register"]');
  const usernameInput = page.locator('[placeholder="Username"]');
  const emailInput = page.locator('[placeholder="Email"]');
  const passwordInput = page.locator('[placeholder="Password"]');
  const signupButton = page.locator('button[class*="btn-primary"]');
  const registeredUser = page.locator('a[href="/@' + user.username + '/"]');

  // Sign up
  await signupUrl.click();
  await usernameInput.fill(user.username);
  await emailInput.fill(user.email);
  await passwordInput.fill('qwerty123');
  await signupButton.click();
  await expect(registeredUser).toBeVisible();
});


test('AQA-10 logout from conduit using css selectors', async ({ page }) => {
  const user = generateRandomUser();
  const signupUrl = page.locator('a[href="/register"]');
  const usernameInput = page.locator('[placeholder="Username"]');
  const emailInput = page.locator('[placeholder="Email"]');
  const passwordInput = page.locator('[placeholder="Password"]');
  const signupButton = page.locator('button[class*="btn-primary"]');
  const registeredUser = page.locator('a[href="/@' + user.username + '/"]');
  const settingsUrl = page.locator('a[href="/settings"]');
  const logoutButton = page.locator('button.btn-outline-danger');
  const guestHomepage = page.locator('[data-qa-id="site-nav"]');

  // Sign up
  await signupUrl.click();
  await usernameInput.fill(user.username);
  await emailInput.fill(user.email);
  await passwordInput.fill('qwerty123');
  await signupButton.click();
  await expect(registeredUser).toBeVisible();
  // Logout
  await settingsUrl.click();
  await logoutButton.click();
  await expect(guestHomepage).toBeVisible();
});
