import {test, expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import {HomePage} from '../Pages/HomePage'
import { CartPage } from '../Pages/Cartpage';


test('Login',async({page})=>{

    const loginPage = new LoginPage(page);
    const homePage= new HomePage(page);
    const cartPage = new CartPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('arprakash','prakash')

    await homePage.addProductToCart("Nexus 6")
    await page.waitForTimeout(3000)
    await homePage.gotoCart();

   const status = await cartPage.checkProductInCart("Nexus 6")
await page.waitForTimeout(3000)
   expect(await status).toBe(true);

})