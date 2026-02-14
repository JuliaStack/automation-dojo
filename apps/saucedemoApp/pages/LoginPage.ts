import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly usernameInputLocator: Locator;
  readonly passwordInputLocator: Locator;
  readonly loginButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInputLocator = this.page.getByPlaceholder("Username");
    this.passwordInputLocator = this.page.getByPlaceholder("Password");
    this.loginButtonLocator = this.page.getByRole("button", { name: "Login" });
  }

  async login(username: string, password: string) {
    await this.usernameInputLocator.fill(username);
    await this.passwordInputLocator.fill(password);
    await this.loginButtonLocator.click();
  }
}
