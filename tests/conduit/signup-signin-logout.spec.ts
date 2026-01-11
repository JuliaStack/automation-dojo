import { test, expect } from '@playwright/test';
import { generateRandomUser } from '../utils/testData';

test('AQA-1 sign up to conduit', async ({ page }) => {
  const user = generateRandomUser();
  await page.goto('https://demo.learnwebdriverio.com/register');
  await page.getByRole('textbox', { name: 'Username' }).fill(user.username);
  await page.getByRole('textbox', { name: 'Email' }).fill(user.email);
  await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole('link', { name: user.username })).toBeVisible();
});


test('AQA-2 login to conduit with invalid credentials', async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('testuser02@example.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@1234');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByText('email or password is invalid')).toBeVisible();
});


test('AQA-3 logout from conduit', async ({ page }) => {
  const user = generateRandomUser();
  await page.goto('https://demo.learnwebdriverio.com/register');
  await page.getByRole('textbox', { name: 'Username' }).fill(user.username);
  await page.getByRole('textbox', { name: 'Email' }).fill(user.email);
  await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole('link', { name: user.username })).toBeVisible();
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'Or click here to logout.' }).click();
  await expect(page.getByText('Home Sign in Sign up')).toBeVisible();
});
