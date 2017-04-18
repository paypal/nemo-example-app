/*global nemo:true, describe:true, it:true */
var util = require('../util');
var wdb;
var asserters = require('wd').asserters;
describe('@wdb-spec@', function () {

    it('should execute mobile functionality using wd driver', function () {
        var nemo = this.nemo;
        wdb = nemo.wdb;
        return wdb.get(nemo.data.baseUrl)
        //login
            .waitForElementByCss(nemo.view.login.emailBy().value).type('foo@bar.com')
            .elementByCss(nemo.view.login.passwordBy().value).type('11111111')
            .elementByCss(nemo.view.login.buttonBy().value).click()
            .waitForElementByCss(nemo.view.nav.cardLinkBy().value, asserters.isDisplayed, 8000).click()
            //add card success
            .waitForElementByCss(nemo.view.card.numberBy().value, asserters.isDisplayed, 8000).type('1234543234565432')
            .elementByCss(nemo.view.card.typeBy().value).click()
            .elementByCss(nemo.view.card.buttonBy().value).click()
            .waitForElementByCssSelector(nemo.view.card.successBy().value, asserters.isDisplayed, 8000)
            //add card failure
            .elementByCss(nemo.view.card.numberBy().value).clear().type('1001001')
            .elementByCss(nemo.view.card.buttonBy().value).click()
            .waitForElementByCssSelector(nemo.view.card.failureBy().value, asserters.isDisplayed, 8000)
            .elementByCss(nemo.view.nav.bankLinkBy().value, asserters.isDisplayed, 8000).click()
            //add bank success
            .waitForElementByCss(nemo.view.bank.numberBy().value, asserters.isDisplayed, 8000).type('095342323')
            .elementByCss(nemo.view.bank.routingBy().value, asserters.isDisplayed, 8000).type('343434')
            .elementByCss(nemo.view.bank.buttonBy().value).click()
            .waitForElementByCssSelector(nemo.view.bank.successBy().value, asserters.isDisplayed, 8000)
            //add bank failure
            .elementByCss(nemo.view.bank.numberBy().value, asserters.isDisplayed, 8000).clear().type('1001001')
            .elementByCss(nemo.view.bank.routingBy().value, asserters.isDisplayed, 8000).type('343434')
            .elementByCss(nemo.view.bank.buttonBy().value).click()
            .waitForElementByCssSelector(nemo.view.bank.failureBy().value, asserters.isDisplayed, 8000)
            .elementByCss(nemo.view.nav.logoutLinkBy().value).click()
            .waitForElementByCss(nemo.view.login.emailBy().value);



    });

});