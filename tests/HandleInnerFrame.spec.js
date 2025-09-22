import {test, expect} from '@playwright/test'

test('Frames', async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

   const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

    // await frame3.locator("//input[@name='mytext3']").fill('Hello');

    // Nested frame

    const childFrame = await frame3.childFrames();
    await childFrame[0].locator("//*[@id='i6']/div[3]/div").check();

    await page.waitForTimeout(5000);
})