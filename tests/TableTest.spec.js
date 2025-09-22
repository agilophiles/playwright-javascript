import {test, expect} from '@playwright/test'

test('Table Handling', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('#productTable');

    //!. Total no of rows an columns
    const columns = await table.locator('thead tr th')

    console.log("Numbe rof columns :-" , await columns.count())

    const rows = await table.locator('tbody tr')
    console.log("Numbe rof rows :-" , await rows.count())

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    // 2. Select checkbox for prject 4
/*
    const matchedRow = rows.filter({
        has:page.locator('td'),
        hasText:'Smartwatch'
    })
    matchedRow.locator('input').check();

    await page.waitForTimeout(5000);
*/

 // 3. Select multiple products by reusable function
    // await selectProduct(rows,page,'Smartphone')
    // await selectProduct(rows,page,'Tablet')
    // await selectProduct(rows,page,'Smartphone')

    // 4. Print all the products by looping statements

 /*   for(let i= 0; i < await rows.count(); i++){

        const row = rows.nth(i)
        const tds = row.locator('td')
        for(let j = 0 ; j < await tds.count()-1 ; j++){
            console.log(await tds.nth(j).textContent());
        }
    }
    */

    // 5. Read data from all the pages inthe table

    const pages = await page.locator('.pagination li a')
    console.log('Number of pages in the page :', await pages.count());

    for(let p =0 ; p < await pages.count(); p++){
        if(p>0){
            await pages.nth(p).click();
        }

        for(let i= 0; i < await rows.count(); i++){

        const row = rows.nth(i)
        const tds = row.locator('td')
        for(let j = 0 ; j < await tds.count()-1 ; j++){
            console.log(await tds.nth(j).textContent());
        }
    }
     await page.waitForTimeout(5000);
    }
    await page.waitForTimeout(5000);
})




 async function selectProduct(rows, page, name){
     const matchedRow = rows.filter({
        has:page.locator('td'),
        hasText:name
    })
    await matchedRow.locator('input').check();
 }