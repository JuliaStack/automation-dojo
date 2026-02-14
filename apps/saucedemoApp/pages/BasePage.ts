import { Page, expect } from "@playwright/test";

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(path: string = "") {
    await this.page.goto(`https://www.saucedemo.com/${path}`);
  }

  async waitForUrlToContain(urlPart: string) {
    await expect(this.page).toHaveURL(new RegExp(urlPart));
  }
}
