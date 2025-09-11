import {test, expect} from '@playwright/test'

test('Handle Radio Button', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("//input[@value='female']").check();
    // await page.check("//input[@value='female']");

    await expect (await page.locator("//input[@value='female']")).toBeChecked();
    await expect (await page.locator("//input[@value='female']").isChecked()).toBeTruthy();

    await expect (await page.locator("//input[@value='male']").isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);
})