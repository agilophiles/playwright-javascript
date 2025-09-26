import {test, expect} from '@playwright/test'


test('page screenshot', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.screenshot({path:Date.now + 'Homepage.png'})
})

    test('Full page screenshot', async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/');
    await page.screenshot({path:Date.now + 'Fullpage.png',fullPage:true})
})


    test.only('Element screenshot', async({page})=>{
        await page.goto('https://www.demoblaze.com/index.html')
   await page.locator('//*[@id="tbodyid"]/div[4]').screenshot({path:'tests/Screenshots/'+Date.now() + 'Macbook.png'})
})

