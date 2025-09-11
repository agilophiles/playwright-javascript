import {test,expect} from '@playwright/test'

test('Handle dropdowns', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.selectOption('#colors', ['Blue', 'Green', 'Yellow'])

    // Assertions

    // 1. Check no of options in dropdown
    // const options =  page.locator('#colors option');
    //  expect(options).toHaveCount(5);

    // 2. Check no of options in dropdown using JS array
    // const options1 =  page.$$('#colors option')

    //  expect(await options1.length).toBe(5);

     // 3. Check presence of the valus in the dropdown
     
     const content = await page.locator('#colors').textContent();
     await expect(content.includes('Blues')).toBeTruthy();



    await page.waitForTimeout(5000);
})