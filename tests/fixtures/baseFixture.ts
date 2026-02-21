//creating custom fixtures for pages
import { test as base, Page } from "@playwright/test";
import { LoginPage } from "../../apps/saucedemoApp/pages/LoginPage";
import { CartPage } from "../../apps/saucedemoApp/pages/CartPage";
import { CheckoutPage } from "../../apps/saucedemoApp/pages/CheckoutPage";
import { InventoryPage } from "../../apps/saucedemoApp/pages/InventoryPage";

type pageManage = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
};

type AuthFixture = {
  loggedInPage: Page;
};

export const test = base.extend<AuthFixture & pageManage>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo();
    await loginPage.login("standard_user", "secret_sauce");
    await use(page);
  },
});
export { expect } from "@playwright/test";
