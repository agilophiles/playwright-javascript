import {test,expect} from '@playwright/test'

test.skip('Alert With  OK', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Dialog window handler

    page.on('dialog', async dailog =>{
        expect(dailog.type()).toContain('alert')
        expect(dailog.message()).toContain('I am an alert box!')
        await dailog.accept();
    })

    await page.click("//button[normalize-space()='Simple Alert']");
    await page.waitForTimeout(5000);

})

test.skip('Confirmation Dialog-Alert  With  OK and Cancel button' , async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Dialog window handler

    page.on('dialog', async dailog =>{
        expect(dailog.type()).toContain('confirm')
        expect(dailog.message()).toContain('Press a button!')
        await dailog.accept(); // close by using Ok button
        // await dailog.dismiss();// close by using cancel button
    })

    await page.click("//button[normalize-space()='Confirmation Alert']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);

})

test('Prompt Dialog' , async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Dialog window handler

    page.on('dialog', async dailog =>{
        expect(dailog.type()).toContain('prompt')
        expect(dailog.message()).toContain('Please enter your name:')
        expect(dailog.defaultValue()).toContain('Harry Potter')
        await dailog.accept('Akash'); // close by using Ok button
        // await dailog.dismiss();// close by using cancel button
    })

    await page.click("//button[normalize-space()='Prompt Alert']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Akash! How are you today?');
    await page.waitForTimeout(5000);

})