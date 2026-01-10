import { test, expect } from '@playwright/test';
import { generateRandomUser, generateRandomArticle } from '../utils/testData';

test('AQA-4 create a new article', async ({ page}) => {
  const article = generateRandomArticle();

  // Sign in
  await page.goto('https://demo.learnwebdriverio.com/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('testuser02@example.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@1234');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('listitem').filter({ hasText: 'testuser02' }).getByRole('link')).toBeVisible();
  
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
  await expect(page.locator('.article-preview').first()).toContainText(article.title);
}); 


test('AQA-5 delete an article', async ({ page}) => {
  const user = generateRandomUser();
  const article = generateRandomArticle();
  
  // Sign in
  await page.goto('https://demo.learnwebdriverio.com/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('testuser02@example.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@1234');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('listitem').filter({ hasText: 'testuser02' }).getByRole('link')).toBeVisible();
  
  // Create article
  await page.getByRole('link', { name: 'New Article' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).fill(article.title);
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill(article.description);
  await page.getByRole('textbox', { name: 'Write your article (in markdown)' }).fill(article.text);
  await page.getByRole('textbox', { name: 'Enter tags' }).fill('Playwright, Automation, Testing');
  await page.getByRole('button', { name: 'Publish Article' }).click();
  await expect(page.locator('h1')).toHaveText(article.title);
  
  // Delete article
  await page.getByRole('button', { name: 'Delete Article' }).first().click();
  await page.goto('https://demo.learnwebdriverio.com');
  await expect(page.locator('.article-preview')).not.toContainText(article.title);
});