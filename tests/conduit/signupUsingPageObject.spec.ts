import { test, expect } from "@playwright/test";
import { SignUpPage, user } from "../../apps/conduitApp/pages/signUpPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/");
});

test("AQA-19 sign up to conduit using Page Object", async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  await signUpPage.signUpLinkLocator.click();
  await signUpPage.usernameInputLocator.fill(user.username);
  await signUpPage.emailInputLocator.fill(user.email);
  await signUpPage.passwordInputLocator.fill(user.password);
  await signUpPage.signUpButtonLocator.click();
  await expect(page.getByRole("link", { name: user.username })).toBeVisible();
});
