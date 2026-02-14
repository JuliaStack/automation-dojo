import { Page, Locator } from "@playwright/test";

export class HeaderComponent {
  private readonly page: Page;
  readonly cartIconLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIconLocator = this.page.locator(".shopping_cart_link");
  }

  async openCart() {
    await this.cartIconLocator.click();
  }
}
