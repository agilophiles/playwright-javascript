import {test,expect} from '@playwright/test'

test('Keyboard ACtions', async({page}) =>{
    await page.goto('https://gotranscript.com/text-compare')

    await page.locator('[name="text1"]').fill("Wel come TO Automate")

    // await page.type('[name="text1"]', "Wel come TO Automate");

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

     await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000)

})