import { test, expect } from '@playwright/test';

test('TC-1 Available Tabs', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await expect(page.getByText('menucart (0)github')).toBeVisible();
});


test('TC-2 Initially Cart Is Empty', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.getByRole('paragraph')).toContainText('No coffee, go add some.');
});


test('TC-3 Add Item To Cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByRole('link', { name: 'Menu page' }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
  await expect(page.locator('#app')).toContainText('Flat White $18.00');
  await page.locator('[data-test="Flat_White"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $18.00');
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.locator('#app')).toContainText('Flat White$18.00 x 1+-$18.00x');
});


test('TC-4 Increase/Decrease Qty Of Item', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByRole('link', { name: 'Menu page' }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
  await expect(page.locator('#app')).toContainText('Flat White $18.00');
  await page.locator('[data-test="Flat_White"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $18.00');
  await page.locator('[data-test="Flat_White"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $36.00');
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.locator('#app')).toContainText('Flat White$18.00 x 2+-$36.00x');
  await page.getByRole('button', { name: 'Remove one Flat White' }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $18.00');
  await expect(page.locator('#app')).toContainText('Flat White$18.00 x 1+-$18.00x');
});


test('TC-5 Delete Items From Cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByRole('link', { name: 'Menu page' }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
  await expect(page.locator('#app')).toContainText('Flat White $18.00');
  await page.locator('[data-test="Flat_White"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $18.00');
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.locator('#app')).toContainText('Flat White$18.00 x 1+-$18.00x');
  await page.getByRole('button', { name: 'Remove all Flat White' }).click();
  await expect(page.getByRole('paragraph')).toContainText('No coffee, go add some.');
});
