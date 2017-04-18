/*global nemo:true, describe:true, it:true */
var util = require('../util');
var assert = require('assert');
var ccgood = '1433232243442322';
var ccbad = '1001001';
var cctype = 'Vaster Card';
var bagood = '0522343992';
var babad = '1001001';
var barouting = '343434';

describe('@page-spec@', function () {
    before(function () {
        return util.login(this.nemo);
    });
    after(function () {
        return util.logout(this.nemo);
    });
    it('should @success@fully add card', function () {
        var nemo = this.nemo;
        var account = nemo.page.account;
        return account.nav.cardLink.click().then(function () {
            account.card.number.waitForDisplayed();
            account.card.setValue({
                number: ccgood,
                type: cctype
            });
            return account.card.collect();

        })
            .then(function (data) {
                assert.equal(data.number, ccgood);
                assert.equal(data.type, cctype);
                account.card.button.click();
                account.card.success.waitForPresent();
            });
    });
    it('should @fail@ to add card', function () {
        var nemo = this.nemo;
        var account = nemo.page.account;
        return account.nav.cardLink.click().then(function () {
            account.card.number.waitForDisplayed();
            account.card.setValue({
                number: ccbad,
                type: cctype
            });
            return account.card.collect();
        })
            .then(function (data) {
                assert.equal(data.number, ccbad);
                assert.equal(data.type, cctype);
                account.card.button.click();
                account.card.failure.waitForDisplayed();
            });


    });
    it('should @success@fully add bank', function () {
        var nemo = this.nemo;
        var account = nemo.page.account;

        return account.nav.bankLink.click().then(function () {
            account.bank.number.waitForDisplayed();
            account.bank.setValue({
                number: bagood,
                routing: barouting
            });
            return account.bank.collect();
        })
            .then(function (data) {
                assert.equal(data.number, bagood);
                assert.equal(data.routing, barouting);
                account.bank.button.click();
                account.bank.success.waitForPresent();
            });

    });
    it('should @fail@ to add bank', function () {
        var nemo = this.nemo;
        var account = nemo.page.account;

        return account.nav.bankLink.click().then(function () {
            account.bank.number.waitForDisplayed();
            account.bank.setValue({
                number: babad,
                routing: barouting
            });
            return account.bank.collect();
        })
            .then(function (data) {
                assert.equal(data.number, babad);
                assert.equal(data.routing, barouting);
                account.bank.button.click();
                account.bank.failure.waitForPresent();
            });
    });

});