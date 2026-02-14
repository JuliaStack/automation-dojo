import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
  readonly firstNameInputLocator: Locator;
  readonly lastNameInputLocator: Locator;
  readonly postalCodeInputLocator: Locator;
  readonly continueButtonLocator: Locator;
  readonly finishButtonLocator: Locator;
  readonly confirmationMessageLocator: Locator;
  readonly cartItemLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInputLocator = this.page.getByPlaceholder("First Name");
    this.lastNameInputLocator = this.page.getByPlaceholder("Last Name");
    this.postalCodeInputLocator = this.page.getByPlaceholder("Zip/Postal Code");
    this.continueButtonLocator = this.page.getByRole("button", {
      name: "Continue",
    });
    this.finishButtonLocator = this.page.getByRole("button", {
      name: "Finish",
    });
    this.confirmationMessageLocator = this.page.locator(".complete-header");
    this.cartItemLocator = this.page.locator(".cart_item");
  }

  async fillCheckoutForm(
    firstName: string,
    lastName: string,
    postalCode: string,
  ) {
    await this.firstNameInputLocator.fill(firstName);
    await this.lastNameInputLocator.fill(lastName);
    await this.postalCodeInputLocator.fill(postalCode);
    await this.continueButtonLocator.click();
  }

  async finishPurchase() {
    await this.finishButtonLocator.click();
  }

  async getInventoryItemName() {
    return await this.cartItemLocator
      .first()
      .locator(".inventory_item_name")
      .textContent();
  }

  async getConfirmationMessage() {
    return await this.confirmationMessageLocator.textContent();
  }
}
