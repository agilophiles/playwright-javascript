import {test, expect} from '@playwright/test'

test('Assertions Test', async ({page})=>{
    
      await page.goto('https://demo.nopcommerce.com/register');

      await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

      await expect(page).toHaveTitle('nopCommerce demo store. Register');

      const logoElement = await page.locator('.header-logo');
      await expect(logoElement).toBeVisible();

      const searchStoreBox = await page.locator('#small-searchterms');
      await expect(searchStoreBox).toBeEnabled();

     const maleRadioButton =  await page.locator('#gender-male');
     await maleRadioButton.click();
     await expect(maleRadioButton).toBeChecked();

     const newsLetterCheckbox = await page.locator('#Newsletter');
     await expect(newsLetterCheckbox).toBeChecked();
     
     const registerButton = await page.locator('#register-button');
     await expect(registerButton).toHaveAttribute('type', 'submit');

     await expect(page.locator('.page-title h1')).toHaveText('Register');

     await expect(page.locator('.page-title h1')).toContainText('Regi');

     const emailInput = await page.locator('#Email');
     await emailInput.fill('akash@demo.com')

     await expect(emailInput).toHaveValue('akash@demo.com')

    //  const options = await page.locator('select[name="DateOfBirthMonth"] option')
    //  await expect(options).toHaveCount(13);

})