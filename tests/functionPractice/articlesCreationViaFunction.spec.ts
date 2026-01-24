import {test, expect, Page} from "@playwright/test";
import {generateRandomUser} from "../utils/testData";
import {generateRandomArticle} from "../utils/testData";

test.beforeEach(async ({page}) => {
  await page.goto('https://demo.learnwebdriverio.com/');
});

async function signUp(page: Page, user: {username: string, email: string}) {
  await page.getByRole('link', {name: 'Sign up'}).click();
  await page.getByRole('textbox', {name: 'Username'}).fill(user.username);
  await page.getByRole('textbox', {name: 'Email'}).fill(user.email);
  await page.getByRole('textbox', {name: 'Password'}).fill('qwerty123');
  await page.getByRole('button', {name: 'Sign up'}).click();
}

async function createArticle(page: Page, article: {title: string, description: string, text: string}) {
  await page.getByRole('link', {name: 'New Article'}).click();
  await page.getByRole('textbox', {name: 'Article Title'}).fill(article.title);
  await page.getByRole('textbox', {name: "What's this article about?"}).fill(article.description);
  await page.getByRole('textbox', {name: 'Write your article (in markdown)'}).fill(article.text);
  await page.getByRole('textbox', {name: 'Enter tags'}).fill('Playwright, Automation, Testing');
  await page.getByRole('button', {name: 'Publish Article'}).click();
}

test('AQA-17 sign up to conduit', async ({page}) => {
  const user = generateRandomUser();
  await signUp(page, user);
  await expect(page.getByRole('link', {name: user.username})).toBeVisible();
});

test('AQA-18 article creation', async ({page}) => {
  const user = generateRandomUser();
  const article = generateRandomArticle();

  await signUp(page, user);
  await expect(page.getByRole('link', {name: user.username})).toBeVisible();

  for (let art = 0; art < 3; art++) {
    await createArticle(page, article);
    await expect(page.locator('h1')).toContainText(article.title);
  }

  await page.getByRole('link', {name: 'Home'}).click();
  await page.getByRole('link', {name: 'Global Feed'}).click();
  const articles = page.locator('.article-preview').filter({hasText: article.title});
  await expect(articles).toHaveCount(3);
});