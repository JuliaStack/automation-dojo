import { test, expect } from '@playwright/test';

test('TC-7 Place order without promotion', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByRole('link', { name: 'Menu page' }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
  await expect(page.locator('#app')).toContainText('Flat White $18.00');
  await page.locator('[data-test="Flat_White"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $18.00');
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.locator('#app')).toContainText('Flat White$18.00 x 1+-$18.00x');
  await page.locator('[data-test="checkout"]').click();
  await expect(page.getByText('Payment details×We will send')).toBeVisible();
  await page.getByRole('textbox', { name: 'Name' }).fill('test01');
  await page.getByRole('textbox', { name: 'Email' }).fill('testing@tst.com');
  await expect(page.getByRole('checkbox', { name: 'Promotion checkbox' })).not.toBeChecked();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#app')).toContainText('Thanks for your purchase. Please check your email for payment.');
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
});
