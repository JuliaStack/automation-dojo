import { test, expect } from '@playwright/test';
import { generateRandomUser, generateRandomArticle } from '../utils/testData';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com');
});

test('AQA-4 create a new article', async ({ page}) => {
  const user = generateRandomUser();
  const article = generateRandomArticle();
  const signupUrl = page.locator('a[href="/register"]');
  const usernameInput = page.locator('[placeholder="Username"]');
  const emailInput = page.locator('[placeholder="Email"]');
  const passwordInput = page.locator('[placeholder="Password"]');
  const signupButton = page.locator('button[class*="btn-primary"]');
  const registeredUser = page.locator('a[href="/@' + user.username + '/"]');
  const newArticleLink = page.getByRole('link', { name: 'New Article' });
  const articleTitleInput = page.getByRole('textbox', { name: 'Article Title' });
  const articleDescriptionInput = page.getByRole('textbox', { name: 'What\'s this article about?' });
  const articleTextInput = page.getByRole('textbox', { name: 'Write your article (in markdown)' });
  const articleTagsInput = page.getByRole('textbox', { name: 'Enter tags' });
  const publishArticleButton = page.getByRole('button', { name: 'Publish Article' });
  const publishedArticle = page.locator('h1').filter({ hasText: article.title });
  const homePage = page.getByRole('link', { name: 'Home' });
  const globalFeedLink = page.getByRole('link', { name: 'Global Feed' });
  const articlePreview = page.locator('.article-preview').filter({ hasText: article.title }).first();

  // Sign up
  await signupUrl.click();
  await usernameInput.fill(user.username);
  await emailInput.fill(user.email);
  await passwordInput.fill('qwerty123');
  await signupButton.click();
  await expect(registeredUser).toBeVisible();

  // Create article
  await newArticleLink.click();
  await articleTitleInput.fill(article.title);
  await articleDescriptionInput.fill(article.description);
  await articleTextInput.fill(article.text);
  await articleTagsInput.fill('Playwright, Automation, Testing');
  await publishArticleButton.click();
  await expect(publishedArticle).toHaveText(article.title);
  await homePage.click();
  await globalFeedLink.click();
  await expect(articlePreview).toBeVisible();
});

test('AQA-5 delete an article', async ({ page}) => {
  const user = generateRandomUser();
  const article = generateRandomArticle();
  const signupUrl = page.locator('a[href="/register"]');
  const usernameInput = page.locator('[placeholder="Username"]');
  const emailInput = page.locator('[placeholder="Email"]');
  const passwordInput = page.locator('[placeholder="Password"]');
  const signupButton = page.locator('button[class*="btn-primary"]');
  const registeredUser = page.locator('a[href="/@' + user.username + '/"]');
  const newArticleLink = page.getByRole('link', { name: 'New Article' });
  const articleTitleInput = page.getByRole('textbox', { name: 'Article Title' });
  const articleDescriptionInput = page.getByRole('textbox', { name: 'What\'s this article about?' });
  const articleTextInput = page.getByRole('textbox', { name: 'Write your article (in markdown)' });
  const articleTagsInput = page.getByRole('textbox', { name: 'Enter tags' });
  const publishArticleButton = page.getByRole('button', { name: 'Publish Article' });
  const publishedArticle = page.locator('h1').filter({ hasText: article.title });
  const userProfileLink = page.getByRole('navigation').getByRole('link', { name: user.username});
  const articleDetails = page.locator('.article-preview').filter({ hasText: article.title });
  const deleteArticleButton = page.getByRole('button', { name: 'Delete Article' });
  const deletedArticle = page.locator('.article-preview').filter({ hasText: article.title });

  // Sign up
  await signupUrl.click();
  await usernameInput.fill(user.username);
  await emailInput.fill(user.email);
  await passwordInput.fill('qwerty123');
  await signupButton.click();
  await expect(registeredUser).toBeVisible();

  // Create article
  await newArticleLink.click();
  await articleTitleInput.fill(article.title);
  await articleDescriptionInput.fill(article.description);
  await articleTextInput.fill(article.text);
  await articleTagsInput.fill('Playwright, Automation, Testing');
  await publishArticleButton.click();
  await expect(publishedArticle).toHaveText(article.title);
  
  // Delete article
  await userProfileLink.click();
  await articleDetails.first().click();
  await deleteArticleButton.first().click();
  await expect(deletedArticle).not.toBeVisible();
});


test('AQA-8 edit an article', async ({ page}) => {
  const user = generateRandomUser();
  const article = generateRandomArticle();
  // const updatedArticle = generateRandomArticle();
  const signupUrl = page.locator('a[href="/register"]');
  const usernameInput = page.locator('[placeholder="Username"]');
  const emailInput = page.locator('[placeholder="Email"]');
  const passwordInput = page.locator('[placeholder="Password"]');
  const signupButton = page.locator('button[class*="btn-primary"]');
  const registeredUser = page.locator('a[href="/@' + user.username + '/"]');
  const newArticleLink = page.getByRole('link', { name: 'New Article' });
  const articleTitleInput = page.getByRole('textbox', { name: 'Article Title' });
  const articleDescriptionInput = page.getByRole('textbox', { name: 'What\'s this article about?' });
  const articleTextInput = page.getByRole('textbox', { name: 'Write your article (in markdown)' });
  const articleTagsInput = page.getByRole('textbox', { name: 'Enter tags' });
  const publishArticleButton = page.getByRole('button', { name: 'Publish Article' });
  const publishedArticle = page.locator('h1').filter({ hasText: article.title });
  const editArticleLink = page.getByRole('link', { name: 'Edit Article' });

  // Sign up
  await signupUrl.click();
  await usernameInput.fill(user.username);
  await emailInput.fill(user.email);
  await passwordInput.fill('qwerty123');
  await signupButton.click();
  await expect(registeredUser).toBeVisible();

  // Create article
  await newArticleLink.click();
  await articleTitleInput.fill(article.title);
  await articleDescriptionInput.fill(article.description);
  await articleTextInput.fill(article.text);
  await articleTagsInput.fill('Playwright, Automation, Testing');
  await publishArticleButton.click();
  await expect(publishedArticle).toHaveText(article.title);
  
  // Edit article
  await editArticleLink.first().click();
  await articleTitleInput.fill('UPD '+ article.title);
  await articleDescriptionInput.fill('UPD '+ article.description);
  await articleTextInput.fill('UPD '+ article.text);
  await publishArticleButton.click();
  await expect(publishedArticle).toHaveText('UPD '+ article.title);
});
