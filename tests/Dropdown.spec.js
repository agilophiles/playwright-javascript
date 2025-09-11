import {test,expect} from '@playwright/test'

test('Dropdown',async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("#country").selectOption({label:'India'});
    await page.locator("#country").selectOption('India');
    await page.locator("#country").selectOption({value:'uk'});
    await page.locator("#country").selectOption({index:1 });
    await page.selectOption("#country", 'India')

    // Assertions
    // 1. Check number of options in the dropdown

    const options = await page.locator('#country option');

    await expect(options).toHaveCount(10);

    // 2. Check number of options in the dropdown
    const options1 = await page.$$('#country option');
    // console.log("Number of options", options1.length)

    await expect(options1.length).toBe(10);

    // 3. Check the presence of value in the dropdown -- Approach 1

    const content = await page.locator("#country").textContent();
    await expect(content.includes('India')).toBeTruthy();

    // 4. Check the presence of value in the dropdown -- Approach 2 using looping

    const options2 = await page.$$('#country option');

    let status = false;
    for(const option of options2){

        let value =await option.textContent()
        if(value.includes('France')){
            status= true;
            break;
        }
        // console.log(await option.textContent())
    }
    expect(status).toBeTruthy();

    // 5. Select option from the dropdown using loop

    const options3 = await page.$$('#country option');
    for(const option of options3){
        let value = await option.textContent();
        if(value.includes('France')){
            await page.selectOption("#country", value);
            break;
        }
    }

    await page.waitForTimeout(5000);
})