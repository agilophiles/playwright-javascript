import {test, expect} from '@playwright/test'

test('Home Page test', async({page}) =>{
    await page.goto('https://www.demoblaze.com/')
    await page.click('#login2');

    await page.fill('#loginusername', 'arprakash');
    await page.fill('#loginpassword', 'prakash');
    await page.click("//button[normalize-space()='Log in']");

    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)

    await page.locator('#logout2');

})

test('Add Product to CartTest', async({page}) =>{
    await page.goto('https://www.demoblaze.com/')
    await page.click('#login2');

    await page.fill('#loginusername', 'arprakash');
    await page.fill('#loginpassword', 'prakash');
    await page.click("//button[normalize-space()='Log in']");

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[@onClick='addToCart(1)']").click();

    page.on('dialog', async dailog =>{
        // expect(dailog.type()).toContain('alert')
        expect(dailog.message()).toContain('Product added.')
        await dailog.accept();
    })

    await page.locator('#logout2');

})