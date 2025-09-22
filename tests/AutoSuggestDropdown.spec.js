import {test, expect} from '@playwright/test'

test('Auto Suggest From',async ({page})=>{

    await page.goto('https://www.redbus.in/')

    await page.locator("(//div[@class='label___57eda7 '])[1]").click();
    await page.locator("#srcDest").fill("Delhi");

    await page.waitForSelector("//div[@role='heading' and contains(@aria-label,'Delhi')]");

    const fromCityOptions = await page.$$("//div[@role='heading' and contains(@aria-label,'Delhi')]");

    for(let option of fromCityOptions){
        const values = await option.textContent();
        // console.log(values?.trim());

        if(values.includes('Badarpur, Delhi')){
            await option.click();
        }
    }
await page.waitForTimeout(3000);

//   await page.goto('https://www.redbus.in/')

    await page.locator("(//div[@class='label___57eda7 focused___a36e0e'])[2]").click();
    await page.locator("(//div[@class = 'srcDest___aa6db3'])[2]").fill("Lucknow");

    await page.waitForSelector("//div[@role='heading' and contains (@aria-label, 'Kaisarbagh, Lucknow')");

    const toCityOptions = await page.$$("//div[@role='heading' and contains (@aria-label, 'Kaisarbagh, Lucknow')");

    for(let tooption of toCityOptions){
        const values = await tooption.textContent();
        // console.log(values?.trim());

        if(values.includes('Badarpur, Delhi')){
            await tooption.click();
        }
    }
})
/*
test('Auto Suggest To',async ({page})=>{

    await page.goto('https://www.redbus.in/')

    await page.locator("(//div[@class='label___57eda7 '])[2]").click();
    await page.locator("#srcDest").fill("Bangalore");

    await page.waitForSelector("//div[@role='heading' and contains (@aria-label, 'Madiwala, Bangalore')]");

    const toCityOptions = await page.$$("//div[@role='heading' and contains (@aria-label, 'Madiwala, Bangalore')]");

    for(let tooption of toCityOptions){
        const values = await tooption.textContent();
        // console.log(values?.trim());

        if(values.includes('Badarpur, Delhi')){
            await tooption.click();
        }
    }
await page.waitForTimeout(3000);
})
*/