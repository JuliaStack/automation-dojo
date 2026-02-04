//tapping on one of popular tags should filter articles by that tag
import { test, expect } from "@playwright/test";
import { SignUpPage, user } from "../conduitApp/pages/signUpPage";
import { PopularTags } from "../conduitApp/pages/PopularTags";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/");
});

test("AQA-20 choosing one of popular tags should filter articles by that tag", async ({
  page,
}) => {
  const signUpPage = new SignUpPage(page);
  await signUpPage.signUpLinkLocator.click();
  await signUpPage.usernameInputLocator.fill(user.username);
  await signUpPage.emailInputLocator.fill(user.email);
  await signUpPage.passwordInputLocator.fill(user.password);
  await signUpPage.signUpButtonLocator.click();
  await expect(page.getByRole("link", { name: user.username })).toBeVisible();

  const popularTags = new PopularTags(page);
  await popularTags.popularTagLocator.click();
  await expect(popularTags.feedLocator).toBeVisible();
});
