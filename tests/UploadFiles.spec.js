import {test, expect} from '@playwright/test'

test('Upload Single File', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#singleFileInput').click();
    await page.locator('#singleFileInput').setInputFiles('C:\\Users\\User\\Videos\\Captures\\vivo 1804 2025-02-04 11-12-05.mp4')
    await page.locator("//button[normalize-space()='Upload Single File']").click();

    await page.waitForTimeout(5000)
})



test.only('Upload Multiple File', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#multipleFilesInput').click();
    await page.locator('#multipleFilesInput').setInputFiles(['C:\\Users\\User\\Videos\\Captures\\vivo 1804 2025-02-04 11-12-05.mp4','C:\\Users\\User\\Videos\\Captures\\Screenshot 27-04-2025 20_18_09.png'])
    await page.locator("//button[normalize-space()='Upload Multiple Files']").click();

    

    expect (await page.locator('(//p[@id="multipleFilesStatus"]/text())[2]')).toHaveText('vivo 1804 2024-12-31 17-44-26.mp4, Size: 4041515 bytes, Type: video/mp4 ')
    expect (await page.locator('(//p[@id="multipleFilesStatus"]/text())[3]')).toHaveText('vivo 1804 2025-03-10 13-05-21.mp4, Size: 32301636 bytes, Type: video/mp4  ')
    await page.waitForTimeout(5000)

    // Removing files
    await page.locator('#multipleFilesInput').setInputFiles([])
 expect (await page.locator(''))

})