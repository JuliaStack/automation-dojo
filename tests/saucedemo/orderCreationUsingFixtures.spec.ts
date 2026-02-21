//Successfully creating an order using fixtures and test steps, and verifying on each page that the correct product is added
import { test, expect } from "../fixtures/baseFixture";

test.describe("AQA-22 Saucedemo order creation using fixtures", () => {
  test(
    "Should create an order successfully",
    { tag: ["@e2e", "@fixtures"] },
    async ({ inventoryPage, cartPage, checkoutPage, loggedInPage }) => {
      // Add first product to cart
      let firstProductName: string | null = null;

      await test.step("Add first product to cart", async () => {
        firstProductName = await inventoryPage.getFirstItemName();
        await inventoryPage.addFirstItemToCart();
      });
      // console.log("First product name:", firstProductName); // Debug log

      // Go to cart and verify the correct product is added
      await test.step("Go to cart and verify the correct product is added", async () => {
        await inventoryPage.header.openCart();
        const cartItemName = await cartPage.getCartItemName();
        expect(cartItemName).toBe(firstProductName);
      });

      // Proceed to checkout
      await test.step("Proceed to checkout", async () => {
        await cartPage.proceedToCheckout();
        await checkoutPage.fillCheckoutForm("John", "Doe", "12345");
      });

      //Verify that the same product is in the checkout overview
      await test.step("Verify that the same product is in the checkout overview", async () => {
        const checkoutItemName = await checkoutPage.getInventoryItemName();
        expect(checkoutItemName).toBe(firstProductName);
      });

      // Finish purchase
      await test.step("Finish purchase", async () => {
        await checkoutPage.finishCheckout();
      });

      // Verify purchase completion
      await test.step("Verify purchase completion", async () => {
        await expect(checkoutPage.confirmationMessageLocator).toHaveText(
          "Thank you for your order!",
        );
      });
    },
  );
});
