import { test, expect, Page } from "@playwright/test";
import { generateRandomUser } from "../utils/testData";
import { generateRandomArticle } from "../utils/testData";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/");
});

const user = generateRandomUser();
const article = generateRandomArticle();

async function signUp(
  page: Page,
  user: { username: string; email: string },
  password: string,
) {
  await page.getByRole("link", { name: "Sign up" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill(user.username);
  await page.getByRole("textbox", { name: "Email" }).fill(user.email);
  await page.getByRole("textbox", { name: "Password" }).fill(password);
  await page.getByRole("button", { name: "Sign up" }).click();
}

async function createArticle(
  page: Page,
  article: { title: string; description: string; text: string },
) {
  await page.getByRole("link", { name: "New Article" }).click();
  await page
    .getByRole("textbox", { name: "Article Title" })
    .fill(article.title);
  await page
    .getByRole("textbox", { name: "What's this article about?" })
    .fill(article.description);
  await page
    .getByRole("textbox", { name: "Write your article (in markdown)" })
    .fill(article.text);
  await page
    .getByRole("textbox", { name: "Enter tags" })
    .fill("Playwright, Automation, Testing");
  await page.getByRole("button", { name: "Publish Article" }).click();
}

test("AQA-17 sign up to conduit", async ({ page }) => {
  await signUp(page, user, "qwerty123");
  await expect(page.getByRole("link", { name: user.username })).toBeVisible();
});

test("AQA-18 article creation", { tag: "@e2e" }, async ({ page }) => {
  await signUp(page, user, "qwerty123");
  await expect(page.getByRole("link", { name: user.username })).toBeVisible();

  // Create 3 unique articles with titles stored in an array
  const titles: string[] = [];

  for (let i = 1; i <= 3; i++) {
    const uniqueTitle = `${article.title} ${i}`;
    titles.push(uniqueTitle);

    await createArticle(page, {
      ...article,
      title: uniqueTitle,
    });

    await expect(page.locator("h1")).toContainText(uniqueTitle);
  }

  // Verify that 3 unique articles are created
  await page.getByRole("link", { name: "Home" }).click();
  await page.getByRole("link", { name: "Global Feed" }).click();

  for (const title of titles) {
    await expect(
      page.locator(".article-preview").filter({ hasText: title }),
    ).toHaveCount(1);
  }

  // Second option: Create 3 unique articles
  /*for (let i = 1; i <= 3; i++) {
    await createArticle(page, {
      ...article,
      title: `${article.title} ${i}`,
    });
    await expect(page.locator("h1")).toContainText(`${article.title} ${i}`);
  }

  // Verify title of 3 articles but this way is not reliable because title doesn't include iterator
  await page.getByRole("link", { name: "Home" }).click();
  await page.getByRole("link", { name: "Global Feed" }).click();

  await expect(
    page.locator(".article-preview").filter({ hasText: article.title }),
  ).toHaveCount(3);*/
});
