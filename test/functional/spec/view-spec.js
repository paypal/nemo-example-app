/*global describe:true, it:true */
var util = require('../util');

describe('@view-spec@', function () {
    before(function () {
        return util.login(this.nemo);
    });
    after(function () {
        return util.logout(this.nemo);
    });

    it('should @success@fully add card', function () {
        var nemo = this.nemo;
        //add card success
        return nemo.view.nav.cardLink().click().then(function () {
            nemo.view.card.numberWaitVisible().sendKeys('123456789012');
            nemo.view.card.typeOptionText('Misa');
            nemo.view.card.button().click();
            nemo.view.card.successWait();
        });
    });
    it('should @fail@ to add card', function () {
        var nemo = this.nemo;
        //add card fail
        return nemo.view.nav.cardLink().click().then(function () {
            nemo.view.card.numberWaitVisible().clear();
            nemo.view.card.number().sendKeys('1001001');
            nemo.view.card.typeOptionText('Misa');
            nemo.view.card.button().click();
            nemo.view.card.failureWait();
        });
    });
    it('should @success@fully add bank', function () {
        var nemo = this.nemo;
        //add bank success
        return nemo.view.nav.bankLinkWaitVisible().click().then(function () {
            nemo.view.bank.numberWaitVisible();
            nemo.view.bank.number().clear();
            nemo.view.bank.routing().clear();
            nemo.view.bank.number().sendKeys('0123545332');
            nemo.view.bank.routing().sendKeys('343434');
            nemo.view.bank.button().click();
            nemo.view.bank.successWait();
        });

    });
    it('should @fail@ to add bank', function () {
        var nemo = this.nemo;
        //add bank fail
        return nemo.view.nav.bankLink().click().then(function() {
            nemo.view.bank.numberWaitVisible();
            nemo.view.bank.number().clear();
            nemo.view.bank.routing().clear();
            nemo.view.bank.number().sendKeys('1001001');
            nemo.view.bank.routing().sendKeys('343434');
            nemo.view.bank.button().click();
            nemo.view.bank.failureWait();
        });
    });
});