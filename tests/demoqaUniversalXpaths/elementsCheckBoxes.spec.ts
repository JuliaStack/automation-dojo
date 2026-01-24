import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://demoqa.com');
});

test('AQA-14 Tick check boxes via universal XPaths', async ({page}) => {
  await page.locator('//h5[text()="Elements"]').click();
  await page.locator('//li[".btn"]//*[text()="Check Box"]').click();
    // Expand all
    await page.locator('//button[@title="Expand all"]').click();

    //Select Notes checkbox
    const notesCheckboxXPath = '//*[text()="Notes"]/preceding-sibling::*[@class="rct-checkbox"]';
    await page.locator(notesCheckboxXPath).click();
    await expect(page.locator('//*[@id="result"]//*[text()="notes"]')).toBeVisible();

    //Select React checkbox
    const reactCheckboxXPath = '//*[text()="React"]/preceding-sibling::*[@class="rct-checkbox"]';
    await page.locator(reactCheckboxXPath).click();
    await expect(page.locator('//*[@id="result"]//*[text()="react"]')).toBeVisible();

    //Select Private checkbox
    const privateCheckboxXPath = '//*[text()="Private"]/preceding-sibling::*[@class="rct-checkbox"]';
    await page.locator(privateCheckboxXPath).click();
    await expect(page.locator('//*[@id="result"]//*[text()="private"]')).toBeVisible();
    
    //Select Word File.doc checkbox
    const wordFileCheckboxXPath = '//*[text()="Word File.doc"]/preceding-sibling::*[@class="rct-checkbox"]';
    await page.locator(wordFileCheckboxXPath).click();
    await expect(page.locator('//*[@id="result"]//*[text()="wordFile"]')).toBeVisible();
})
