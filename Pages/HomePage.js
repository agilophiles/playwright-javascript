exports.HomePage = class HomePage{

    constructor(page){
        this.page=page;
        this.productList = '//*[@id="tbodyid"]//h4/a';
        this.addToCartButton = '//a[normalize-space()="Add to cart"]';
        this.cart = '#cartur'
    }

    async addProductToCart(productName) {
        const products = this.page.locator(this.productList);
        const count = await products.count();

        for (let i = 0; i < count; i++) {
            const name = await products.nth(i).textContent();
            if (name.trim() === productName) {
                await products.nth(i).click();   // ✅ safe with Locator
                break;
            }
        }
        await this.page.on('dialog', async dialog=>{
            if(dialog.message().includes('added')){
                await dialog.accept();
            }
        })
        await this.page.locator(this.addToCartButton).click();
    }

    async gotoCart(){
        await this.page.locator(this.cart).click();
    }
}