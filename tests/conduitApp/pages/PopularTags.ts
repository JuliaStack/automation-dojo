import { Locator, Page } from "@playwright/test";

export class PopularTags {
  page: Page;
  popularTagLocator: Locator;
  feedLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.popularTagLocator = page.locator('a[href="/tag/dojo"]');
    this.feedLocator = page.locator('a[href="/tag/dojo"].active');
  }
}
