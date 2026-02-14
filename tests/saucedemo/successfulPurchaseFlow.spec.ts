//succssful purchase flow
import { test, expect } from "@playwright/test";
import { LoginPage } from "../../apps/saucedemoApp/pages/LoginPage";
import { CartPage } from "../../apps/saucedemoApp/pages/CartPage";
import { CheckoutPage } from "../../apps/saucedemoApp/pages/CheckoutPage";
import { InventoryPage } from "../../apps/saucedemoApp/pages/InventoryPage";

test(
  "AQA-21 Saucedemo successful purchase flow",
  { tag: "@e2e" },
  async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigateTo();
    await loginPage.login("standard_user", "secret_sauce");

    // Add first product to cart
    const firstProductName = await inventoryPage.addFirstItemToCart();

    // Go to cart and verify the correct product is added
    await inventoryPage.header.openCart();
    const cartItemName = await cartPage.getCartItemName();
    expect(cartItemName).toBe(firstProductName);

    // Proceed to checkout
    await cartPage.proceedToCheckout();
    await checkoutPage.fillCheckoutForm("John", "Doe", "12345");

    //Verify that the same product is in the checkout overview
    const checkoutItemName = await checkoutPage.getInventoryItemName();
    expect(checkoutItemName).toBe(firstProductName);

    // Finish purchase
    await checkoutPage.finishPurchase();

    // Verify purchase completion
    await expect(checkoutPage.confirmationMessageLocator).toBeVisible();
    await expect(checkoutPage.confirmationMessageLocator).toHaveText(
      "Thank you for your order!",
    );
  },
);
