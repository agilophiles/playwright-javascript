import {test,expect} from '@playwright/test'

test('Double click ', async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/');



   const dragpoint = await page.locator('#draggable')
   const droppoint = await page.locator('#droppable')

   // First approach
//    await dragpoint.hover();
//    await page.mouse.down();

//    await droppoint.hover();
//    await page.mouse.up();

   // Second approach

   await dragpoint.dragTo(droppoint)

   await page.waitForTimeout(5000)
})