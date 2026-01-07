import { test, expect } from '@playwright/test';

test('TC-7 Place order without promotion', {tag: "@regression"}, async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByRole('link', { name: 'Menu page' }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
  await expect(page.locator('#app')).toContainText('Flat White $18.00');
  await page.locator('[data-test="Flat_White"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $18.00');
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.locator('#app')).toContainText('Flat White$18.00 x 1+-$18.00x');
  await page.locator('[data-test="checkout"]').click();
  await expect(page.getByText('Payment details')).toBeVisible();
  await page.getByRole('textbox', { name: 'Name' }).fill('order without promo');
  await page.getByRole('textbox', { name: 'Email' }).fill('test01@yopmail.com');
  await expect(page.getByRole('checkbox', { name: 'Promotion checkbox' })).not.toBeChecked();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#app')).toContainText('Thanks for your purchase. Please check your email for payment.');
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
});


test('TC-8 Place order with promotion', {tag: "@regression"}, async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await expect(page.locator('#app')).toContainText('It\'s your lucky day! Get an extra cup of Mocha for $4.');
  await page.getByRole('button', { name: 'Yes, of course!' }).click();
  await page.getByText('cart (4)').click();
  await expect(page.getByRole('link', { name: 'Cart page' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^\(Discounted\) Mocha$/ })).toBeVisible();
  await page.locator('[data-test="checkout"]').click();
  await expect(page.getByRole('heading', { name: 'Payment details' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Name' }).fill('order with promo');
  await page.getByRole('textbox', { name: 'Email' }).fill('test01@yopmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#app')).toContainText('Thanks for your purchase. Please check your email for payment.');
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
});
