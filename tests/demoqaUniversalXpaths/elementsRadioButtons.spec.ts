import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://demoqa.com');
});

test('AQA-11 Tick radio buttons via universal XPaths', async ({page}) => {
  await page.locator('//h5[text()="Elements"]').click();
  await page.locator('//li[".btn"]//*[text()="Radio Button"]').click();
    // Select Yes radio button
    const yesRadioButtonXPath = '///input[@id="yesRadio"]';
    await page.locator(yesRadioButtonXPath).click();
    await expect(page.locator('//span[@class="text-success"]')).toHaveText('Yes');
    // Select Impressive radio button
    const impressiveRadioButtonXPath = '///input[@id="impressiveRadio"]';
    await page.locator(impressiveRadioButtonXPath).click();
    await expect(page.locator('//span[@class="text-success"]')).toHaveText('Impressive');
    // Select No radio button
    const noRadioButtonXPath = '///input[@id="noRadio"]';
    await page.locator(noRadioButtonXPath).isDisabled();
    await expect(page.locator('//span[@class="text-success"]')).toHaveText('No');
})
