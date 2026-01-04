import { test, expect } from '@playwright/test';

test('TC-3 Empty feed', async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/');
    await page.getByRole('link', { name: ' Sign in' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('test5@spec.ts');
    await page.getByRole('textbox', { name: 'Password' }).fill('password5');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.locator('#app')).toContainText('test5');
    await page.getByRole('link', { name: 'Your Feed' }).click();
    await expect(page.locator('#app')).toContainText('No articles are here... yet.');
    await page.getByRole('link', { name: '  Settings' }).click();
    await expect(page.locator('#app')).toContainText('Your Settings');
    await page.getByRole('button', { name: 'Or click here to logout.' }).click();
    await expect(page.locator('#app')).toContainText('Home Sign in Sign up');
});