/*global nemo:true, describe:true, it:true */
const util = require('../util');
const assert = require('assert');
const {email, password} = {email: 'me@mine.com', password: '11111111'};
const {ccgood, ccbad, cctype} = {ccgood: '1433232243442322', ccbad: '1001001', cctype: 'Vaster Card'};
const {bagood, babad, barouting} = {bagood: '0522343992', babad: '1001001', barouting: '343434'};

describe('@page-spec@', function () {
    before(async function () {
        await util.login(this.nemo);
    });
    after(async function () {
        await util.logout(this.nemo);
    });
    it('should @success@fully add card', async function () {
        let nemo = this.nemo;
        let account = nemo.page.account;
        await account.nav.cardLink.click();
        await account.card.number.waitForDisplayed();
        await account.card.setValue({
            number: ccgood,
            type: cctype
        });
        data = await account.card.collect();
        assert.equal(data.number, ccgood);
        assert.equal(data.type, cctype);
        await account.card.button.click();
        await account.card.success.waitForPresent();
    });
    it('should @fail@ to add card', async function () {
        let nemo = this.nemo;
        let account = nemo.page.account;
        await account.nav.cardLink.click();
        await account.card.number.waitForDisplayed();
        await account.card.setValue({
            number: ccbad,
            type: cctype
        });
        data = await account.card.collect();
        assert.equal(data.number, ccbad);
        assert.equal(data.type, cctype);
        await account.card.button.click();
        await account.card.failure.waitForDisplayed();

    });
    it('should @success@fully add bank', async function () {
        let nemo = this.nemo;
        let account = nemo.page.account;

        await account.nav.bankLink.click();
        await account.bank.number.waitForDisplayed();
        await account.bank.setValue({
            number: bagood,
            routing: barouting
        });
        data = await account.bank.collect();
        assert.equal(data.number, bagood);
        assert.equal(data.routing, barouting);

        await account.bank.button.click();
        await account.bank.success.waitForPresent();

    });
    it('should @fail@ to add bank', async function () {
        let nemo = this.nemo;
        let account = nemo.page.account;

        await account.nav.bankLink.click();
        await account.bank.number.waitForDisplayed();
        await account.bank.setValue({
            number: babad,
            routing: barouting
        });
        data = await account.bank.collect();
        assert.equal(data.number, babad);
        assert.equal(data.routing, barouting);

        await account.bank.button.click();
        await account.bank.failure.waitForPresent();
    });

});