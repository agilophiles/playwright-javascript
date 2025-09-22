import {test, expect} from '@playwright/test'

test('Frames', async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    // Total frames

    const allframes = await page.frames()

    console.log("Number of frames :-" , allframes.length);

    // First approach : using name or URL

    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    // await frame1.fill("[name='mytext1']", 'Hello');


    // Second approach : using Locator

    const inputbox = await page.frameLocator("//frame[@src='frame_1.html']").locator("[name='mytext1']");
    inputbox.fill('Hello')

    await page.waitForTimeout(5000);
})