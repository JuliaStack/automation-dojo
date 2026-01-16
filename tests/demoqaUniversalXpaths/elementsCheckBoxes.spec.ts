import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://demoqa.com');
});

test('AQA-10 Tick check boxes via universal XPaths', async ({page}) => {
  await page.locator('//h5[text()="Elements"]').click();
  await page.locator('//li[".btn"]//*[text()="Check Box"]').click();
    // Expand all
    await page.locator('//button[@title="Expand all"]').click();

    //Select Notes checkbox
    const notesCheckboxXPath = '//span[text()="Notes"]/preceding-sibling::span[@class="rct-checkbox"]';
    await page.locator(notesCheckboxXPath).click();
    await expect(page.locator('//div[@id="result"]//span[text()="notes"]')).toBeVisible();

    //Select React checkbox
    const reactCheckboxXPath = '//span[text()="React"]/preceding-sibling::span[@class="rct-checkbox"]';
    await page.locator(reactCheckboxXPath).click();
    await expect(page.locator('//div[@id="result"]//span[text()="react"]')).toBeVisible();

    //Select Private checkbox
    const privateCheckboxXPath = '//span[text()="Private"]/preceding-sibling::span[@class="rct-checkbox"]';
    await page.locator(privateCheckboxXPath).click();
    await expect(page.locator('//div[@id="result"]//span[text()="private"]')).toBeVisible();
    
    //Select Word File.doc checkbox
    const wordFileCheckboxXPath = '//span[text()="Word File.doc"]/preceding-sibling::span[@class="rct-checkbox"]';
    await page.locator(wordFileCheckboxXPath).click();
    await expect(page.locator('//div[@id="result"]//span[text()="wordFile"]')).toBeVisible();
})
