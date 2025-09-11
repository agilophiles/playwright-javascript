import {test, expect} from '@playwright/test'

test('Check Boxes', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("//input[@id='monday' and @type = 'checkbox']").check();

    await expect(await page.locator("//input[@id='monday' and @type = 'checkbox']")).toBeChecked();
    await expect(await page.locator("//input[@id='monday' and @type = 'checkbox']").isChecked()).toBeTruthy();
    await expect(await page.locator("//input[@id='sunday' and @type = 'checkbox']").isChecked()).toBeFalsy();

    const checkboxLocators= [
        "//input[@id='monday' and @type = 'checkbox']",
        "//input[@id='sunday' and @type = 'checkbox']",
        "//input[@id='saturday' and @type = 'checkbox']"
    ];
await page.waitForTimeout(5000)
    for (const locator of checkboxLocators){  // Select multiple checkboxe
       await page.locator(locator).check();
    }

      for (const locator of checkboxLocators){  // unSelect multiple checkboxe

        if(await page.locator(locator).isChecked()){
             await page.locator(locator).uncheck();
        }
       
    }

    await page.waitForTimeout(5000)
;})