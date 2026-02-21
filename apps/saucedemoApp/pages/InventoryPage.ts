import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { HeaderComponent } from "../components/HeaderComponent";

export class InventoryPage extends BasePage {
  readonly header: HeaderComponent;

  private readonly inventoryItems: Locator;
  private readonly firstItem: Locator;
  private readonly firstItemName: Locator;
  private readonly firstItemAddButton: Locator;

  constructor(page: Page) {
    super(page);

    this.header = new HeaderComponent(page);

    this.inventoryItems = this.page.locator(".inventory_item");
    this.firstItem = this.inventoryItems.first();
    this.firstItemName = this.firstItem.locator(".inventory_item_name");
    this.firstItemAddButton = this.firstItem.getByRole("button", {
      name: "Add to cart",
    });
  }

  async getFirstItemName(): Promise<string> {
    await expect(this.firstItemName).toBeVisible();
    return (await this.firstItemName.innerText()).trim();
  }

  async addFirstItemToCart(): Promise<string> {
    await expect(this.firstItemAddButton).toBeVisible();
    await this.firstItemAddButton.click();
    return await this.getFirstItemName();
  }
}
