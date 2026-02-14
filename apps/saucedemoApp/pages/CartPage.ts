import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CartItemComponent } from "../components/CartItemComponent";

export class CartPage extends BasePage {
  readonly cartItemLocator: Locator;
  readonly checkoutButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.cartItemLocator = this.page.locator(".cart_item");
    this.checkoutButtonLocator = this.page.getByRole("button", {
      name: "Checkout",
    });
  }

  async getCartItemName() {
    const cartItem = this.cartItemLocator.first();
    const cartItemComponent = new CartItemComponent(cartItem);
    return await cartItemComponent.getItemName();
  }

  async proceedToCheckout() {
    await this.checkoutButtonLocator.click();
  }
}
