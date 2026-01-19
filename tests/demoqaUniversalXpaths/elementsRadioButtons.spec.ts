import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://demoqa.com');
});

test('AQA-11 Tick radio buttons via universal XPaths', async ({page}) => {
  await page.locator('//h5[text()="Elements"]').click();
  await page.locator('//li[".btn"]//*[text()="Radio Button"]').click();
    // Select Yes radio button
    const yesRadioButtonXPath = '//label[@for="yesRadio"]';
    await page.locator(yesRadioButtonXPath).click();
    await expect(page.locator('//*[@class="text-success"]')).toHaveText('Yes');
    // Select Impressive radio button
    const impressiveRadioButtonXPath = '//label[@for="impressiveRadio"]';
    await page.locator(impressiveRadioButtonXPath).click();
    await expect(page.locator('//*[@class="text-success"]')).toHaveText('Impressive');
    // Select No radio button
    const noRadioButtonXPath = '//label[@for="noRadio"]';
    await page.locator(noRadioButtonXPath).isDisabled();
})
