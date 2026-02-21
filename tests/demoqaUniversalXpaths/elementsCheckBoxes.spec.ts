import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com");
  await page.route("**/*googlesyndication.com/**", (route) => route.abort());
  await page.route("**/*doubleclick.net/**", (route) => route.abort());
});

test("AQA-14 Tick check boxes via universal XPaths", async ({ page }) => {
  await page.locator('//h5[text()="Elements"]').click();
  await page.locator('//li[".btn"]//*[text()="Check Box"]').click();
  // Expand all
  // await page.locator('//button[@title="Expand all"]').click();

  // Expand Home tree
  const expandHomeButtonXPath =
    '//*[text()="Home"]/ancestor::*[@role="treeitem"]//*[contains(@class,"rc-tree-switcher")]';
  await page.locator(expandHomeButtonXPath).click();

  // Expand Desktop tree
  const expandDesktopButtonXPath =
    '//*[text()="Desktop"]/ancestor::*[@role="treeitem"]//*[contains(@class,"rc-tree-switcher")]';
  await page.locator(expandDesktopButtonXPath).click();

  //Select Notes checkbox
  const notesCheckboxXPath = '//*[@aria-label="Select Notes"]';
  // '//*[text()="Notes"]/preceding-sibling::*[@class="rct-checkbox"]';
  await page.locator(notesCheckboxXPath).click();
  await expect(
    page.locator('//*[@id="result"]//*[text()="notes"]'),
  ).toBeVisible();

  //Expand Documents tree
  const documentsCheckboxXPath =
    '//*[text()="Documents"]/ancestor::*[@role="treeitem"]//*[contains(@class,"rc-tree-switcher")]';
  await page.locator(documentsCheckboxXPath).click();

  //Expand Workspace tree
  const workspaceCheckboxXPath =
    '//*[text()="WorkSpace"]/ancestor::*[@role="treeitem"]//*[contains(@class,"rc-tree-switcher")]';
  await page.locator(workspaceCheckboxXPath).click();

  //Select React checkbox
  const reactCheckboxXPath = '//*[@aria-label="Select React"]';
  await page.locator(reactCheckboxXPath).click();
  await expect(
    page.locator('//*[@id="result"]//*[text()="react"]'),
  ).toBeVisible();

  // Expand Office tree
  const officeCheckboxXPath =
    '//*[text()="Office"]/ancestor::*[@role="treeitem"]//*[contains(@class,"rc-tree-switcher")]';
  await page.locator(officeCheckboxXPath).click();

  //Select Private checkbox
  const privateCheckboxXPath = '//*[@aria-label="Select Private"]';
  await page.locator(privateCheckboxXPath).click();
  await expect(
    page.locator('//*[@id="result"]//*[text()="private"]'),
  ).toBeVisible();

  // Expand Downloads tree
  const downloadsCheckboxXPath =
    '//*[text()="Downloads"]/ancestor::*[@role="treeitem"]//*[contains(@class,"rc-tree-switcher")]';
  await page.locator(downloadsCheckboxXPath).click();

  //Select Word File.doc checkbox
  const wordFileCheckboxXPath = '//*[@aria-label="Select Word File.doc"]';
  await page.locator(wordFileCheckboxXPath).click();
  await expect(
    page.locator('//*[@id="result"]//*[text()="wordFile"]'),
  ).toBeVisible();
});
