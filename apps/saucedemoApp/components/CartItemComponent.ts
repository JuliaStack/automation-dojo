import { Locator } from "@playwright/test";

export class CartItemComponent {
  private readonly itemLocator: Locator;

  constructor(itemLocator: Locator) {
    this.itemLocator = itemLocator;
  }

  async getItemName() {
    return await this.itemLocator.locator(".inventory_item_name").textContent();
  }
}
