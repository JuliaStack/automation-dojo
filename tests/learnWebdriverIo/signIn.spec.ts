import { test, expect } from '@playwright/test';

test('TC-2 User Log in', async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/');
    await page.getByRole('link', { name: ' Sign in' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('test5@spec.ts');
    await page.getByRole('textbox', { name: 'Password' }).fill('password5');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.locator('#app')).toContainText('test5');
});