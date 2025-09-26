import {test, expect} from '@playwright/test'

let page;

test.beforeAll(async({browser})=>{
    page = await browser.newPage();
     await page.goto('https://www.demoblaze.com/')
    await page.click('#login2');

    await page.fill('#loginusername', 'arprakash');
    await page.fill('#loginpassword', 'prakash');
    await page.click("//button[normalize-space()='Log in']");
})

test.afterAll(async()=>{
    await page.locator('#logout2');
})

test('Home Page test', async() =>{
   

    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)

   

})

test('Add Product to CartTest', async() =>{
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[@onClick='addToCart(1)']").click();

    page.on('dialog', async dailog =>{
        // expect(dailog.type()).toContain('alert')
        expect(dailog.message()).toContain('Product added.')
        await dailog.accept();
    })

   

})