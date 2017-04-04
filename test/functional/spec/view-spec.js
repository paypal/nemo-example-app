/*global describe:true, it:true */
let util = require('../util');

describe('@view-spec@', _ => {
    before(async function () {
        await util.login(this.nemo);
    });
    after(async function () {
        await util.logout(this.nemo);
    });

    it('should @success@fully add card', async function () {
        let nemo = this.nemo;
        //add card success
        await nemo.view.nav.cardLink().click();
        await nemo.view.card.numberWaitVisible().sendKeys('123456789012');
        await nemo.view.card.typeOptionText('Misa');
        await nemo.view.card.button().click();
        await nemo.view.card.successWait();
    });
    it('should @fail@ to add card', async function () {
        let nemo = this.nemo;
        //add card fail
        await nemo.view.nav.cardLink().click();
        await nemo.view.card.numberWaitVisible().clear();
        await nemo.view.card.number().sendKeys('1001001');
        await nemo.view.card.typeOptionText('Misa');
        await nemo.view.card.button().click();
        await nemo.view.card.failureWait();
    });
    it('should @success@fully add bank', async function () {
        let nemo = this.nemo;
        //add bank success
        await nemo.view.nav.bankLink().click();
        await nemo.view.bank.numberWaitVisible().clear();
        await nemo.view.bank.routing().clear();
        await nemo.view.bank.number().sendKeys('0123545332');
        await nemo.view.bank.routing().sendKeys('343434');
        await nemo.view.bank.button().click();
        await nemo.view.bank.successWait();
    });
    it('should @fail@ to add bank', async function () {
        let nemo = this.nemo;
        //add bank fail
        await nemo.view.nav.bankLink().click();
        await nemo.view.bank.numberWaitVisible().clear();
        await nemo.view.bank.routing().clear();
        await nemo.view.bank.number().sendKeys('1001001');
        await nemo.view.bank.routing().sendKeys('343434');
        await nemo.view.bank.button().click();
        await nemo.view.bank.failureWait();
    });
});