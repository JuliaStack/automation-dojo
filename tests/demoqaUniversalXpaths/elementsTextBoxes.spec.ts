import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com');
});

test('AQA-9 Fill text boxes via universal XPaths', async ({ page }) => {
  await page.locator('//h5[text()="Elements"]').click();
  await page.locator('//li[".btn"]//*[text()="Text Box"]').click();

  // Fill Full Name
  const fullNameXPath = '//input[@id="userName"]/parent::div//*[contains(@class,"form-control")]';
  await page.locator(fullNameXPath).fill('John Doe');

  // Fill Email
  const emailXPath = '//input[@id="userEmail"]/parent::div//*[contains(@class,"form-control")]';
  await page.locator(emailXPath).fill('john.doe@example.com');

  // Fill Current Address
  const currentAddressXPath = '//textarea[@id="currentAddress"]/parent::div//*[contains(@class,"form-control")]';
  await page.locator(currentAddressXPath).fill('123 Main St, Springfield');

  // Fill Permanent Address
  const permanentAddressXPath = '//textarea[@id="permanentAddress"]/parent::div//*[contains(@class,"form-control")]';
  await page.locator(permanentAddressXPath).fill('456 Oak Ave, Shelbyville');
    // Submit the form
    await page.locator('#submit').click();
    // Verify the submitted data
    await expect(page.locator('#output')).toContainText('Name:John DoeEmail:john.doe@example.comCurrent Address :123 Main St, Springfield Permananet Address :456 Oak Ave, Shelbyville');
})
