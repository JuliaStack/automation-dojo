import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { HeaderComponent } from "../components/HeaderComponent";

export class InventoryPage extends BasePage {
  readonly header: HeaderComponent;
  readonly inventoryItemLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderComponent(page);
    this.inventoryItemLocator = this.page.locator(".inventory_item");
  }

  async addFirstItemToCart() {
    const firstItem = this.inventoryItemLocator.first();
    const addBtn = firstItem.getByRole("button", { name: "Add to cart" });

    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();

    return await firstItem.locator(".inventory_item_name").textContent();
  }
}
