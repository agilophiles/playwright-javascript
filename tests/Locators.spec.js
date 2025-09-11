// const {test,expect} = require('@playwright/test')

import {test,expect} from '@playwright/test';

test('Locators', async({page})=>{
await page.goto('https://www.demoblaze.com/');

//  await page.locator('id=login2').click;
 await page.click('id=login2')
//  await page.locator('#loginusername').fill("Prakash")
await page.fill('#loginusername','arprakash');

 await page.fill("input[id='loginpassword']",'prakash')

 await page.click("//button[normalize-space()='Log in']")

 const logoutlink = await page.locator("//a[normalize-space()='Log out']");

 await expect(logoutlink).toBeVisible();

 await page.close();

})
test('Locators1', async({page})=>{
await page.goto('https://www.demoblaze.com/');

//  await page.locator('id=login2').click;
 await page.click('id=login2')
//  await page.locator('#loginusername').fill("Prakash")
await page.fill('#loginusername','arprakash');

 await page.fill("input[id='loginpassword']",'prakash')

 await page.click("//button[normalize-space()='Log in']")

 const logoutlink = await page.locator("//a[normalize-space()='Log out']");

 await expect(logoutlink).toBeVisible();

 await page.close();

})

test('FailLogin', async({page})=>{
await page.goto('https://www.demoblaze.com/');

//  await page.locator('id=login2').click;
 await page.click('id=login2')
//  await page.locator('#loginusername').fill("Prakash")
await page.fill('#loginusername','arprakash1');

 await page.fill("input[id='loginpassword']",'prakash')

 await page.click("//button[normalize-space()='Log in']")

 const logoutlink = await page.locator("//a[normalize-space()='Log out']");

 await expect(logoutlink).toBeVisible();

 await page.close();

}
)
