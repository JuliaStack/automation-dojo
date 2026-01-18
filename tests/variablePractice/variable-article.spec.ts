import { test, expect } from '@playwright/test';
import { generateRandomUser, generateRandomArticle } from '../utils/testData';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com');
});

test('AQA-4 create a new article', async ({ page}) => {
  const user = generateRandomUser();
  const article = generateRandomArticle();

  // Sign up
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(user.username);
  await page.getByRole('textbox', { name: 'Email' }).fill(user.email);
  await page.getByRole('textbox', { name: 'Password' }).fill('qwerty123');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole('link', { name: user.username })).toBeVisible();

  // Create article
  await page.getByRole('link', { name: 'New Article' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).fill(article.title);
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill(article.description);
  await page.getByRole('textbox', { name: 'Write your article (in markdown)' }).fill(article.text);
  await page.getByRole('textbox', { name: 'Enter tags' }).fill('Playwright, Automation, Testing');
  await page.getByRole('button', { name: 'Publish Article' }).click();
  await expect(page.locator('h1')).toHaveText(article.title);
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Global Feed' }).click();
  await expect(page.locator('.article-preview').filter({ hasText: article.title }).first()).toBeVisible();
}); 

test('AQA-5 delete an article', async ({ page}) => {
  const user = generateRandomUser();
  const article = generateRandomArticle();

  // Sign up
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(user.username);
  await page.getByRole('textbox', { name: 'Email' }).fill(user.email);
  await page.getByRole('textbox', { name: 'Password' }).fill('qwerty123');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole('link', { name: user.username })).toBeVisible();

  // Create article
  await page.getByRole('link', { name: 'New Article' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).fill(article.title);
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill(article.description);
  await page.getByRole('textbox', { name: 'Write your article (in markdown)' }).fill(article.text);
  await page.getByRole('textbox', { name: 'Enter tags' }).fill('Playwright, Automation, Testing');
  await page.getByRole('button', { name: 'Publish Article' }).click();
  await expect(page.locator('h1')).toHaveText(article.title);
  
  // Delete article
  await page.getByRole('navigation').getByRole('link', { name: user.username}).click();
  await page.locator('.article-preview').filter({ hasText: article.title }).first().click();
  await page.getByRole('button', { name: 'Delete Article' }).first().click();
  await expect(page.locator('.article-preview').filter({ hasText: article.title })).not.toBeVisible();
});


test('AQA-8 edit an article', async ({ page}) => {
  const user = generateRandomUser();
  const article = generateRandomArticle();
  const updatedArticle = generateRandomArticle();

  // Sign up
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(user.username);
  await page.getByRole('textbox', { name: 'Email' }).fill(user.email);
  await page.getByRole('textbox', { name: 'Password' }).fill('qwerty123');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole('link', { name: user.username })).toBeVisible();

  // Create article
  await page.getByRole('link', { name: 'New Article' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).fill(article.title);
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill(article.description);
  await page.getByRole('textbox', { name: 'Write your article (in markdown)' }).fill(article.text);
  await page.getByRole('textbox', { name: 'Enter tags' }).fill('Playwright, Automation, Testing');
  await page.getByRole('button', { name: 'Publish Article' }).click();
  await expect(page.locator('h1')).toHaveText(article.title);
  
  // Edit article
  await page.getByRole('link', { name: 'Edit Article' }).first().click();
  await page.getByRole('textbox', { name: 'Article Title' }).fill(updatedArticle.title);
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill(updatedArticle.description);
  await page.getByRole('textbox', { name: 'Write your article (in markdown)' }).fill(updatedArticle.text);
  await page.getByRole('button', { name: 'Publish Article' }).click();
  await expect(page.locator('h1')).toHaveText(updatedArticle.title);
});
