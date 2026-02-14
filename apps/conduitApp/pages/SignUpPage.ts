import { Locator, Page } from "@playwright/test";
import { generateRandomUser } from "../../../tests/utils/testData";

export class SignUpPage {
  page: Page;
  signUpLinkLocator: Locator;
  emailInputLocator: Locator;
  usernameInputLocator: Locator;
  passwordInputLocator: Locator;
  signUpButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signUpLinkLocator = page.getByRole("link", { name: "Sign up" });
    this.emailInputLocator = page.getByRole("textbox", { name: "Email" });
    this.usernameInputLocator = page.getByRole("textbox", { name: "Username" });
    this.passwordInputLocator = page.getByRole("textbox", { name: "Password" });
    this.signUpButtonLocator = page.getByRole("button", { name: "Sign up" });
  }
}
export const user = generateRandomUser();
