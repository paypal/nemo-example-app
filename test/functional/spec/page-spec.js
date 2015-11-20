/*global nemo:true, describe:true, it:true */
var Nemo = require('nemo');
var nemo = {};
var util = require('../util');

describe('@page@', function () {
  before(function (done) {
    nemo = Nemo(done);
  });
  after(function (done) {
    nemo.driver.quit().then(done);
  });
  it('should execute high level functionality using generic methods', function (done) {

    //login
    nemo.driver.get(nemo.data.baseUrl);
    util.waitForJSReady(nemo);
    nemo.page.home.login.email.waitForDisplayed();
    nemo.page.home.login.setValue({
      email: 'me@mine.com',
      password: '11111111'
    });
    nemo.page.home.login.button.click();

    //add card success
    nemo.page.home.card.number.waitForDisplayed();
    nemo.page.home.card.setValue({
      number: '123456789012',
      type: 'Misa'
    });
    nemo.driver.sleep(5000);
    nemo.page.home.card.button.click();
    nemo.page.home.card.success.waitForPresent();

    //add card fail
    nemo.page.home.card.number.waitForDisplayed();
    nemo.page.home.card.setValue({
      number: '1001001',
      type: 'Misa'
    });
    nemo.page.home.card.button.click();
    nemo.page.home.card.failure.waitForPresent();

    //add bank success
    nemo.page.home.nav.bankLink.click();
    nemo.page.home.bank.number.waitForDisplayed()
    nemo.page.home.bank.setValue({
      number: '0123545332',
      routing: '343434'
    });
    nemo.page.home.bank.button.click();
    nemo.page.home.bank.success.waitForPresent();

    //add bank fail
    // TODO Added for the similarity to view-spec, but this is not correct...
    nemo.page.home.nav.bankLink.click();
    nemo.page.home.bank.number.waitForDisplayed()
    nemo.page.home.bank.setValue({
      number: '1001001',
      routing: '92929'
    });
    nemo.page.home.bank.button.click();
    nemo.page.home.bank.failure.waitForPresent();

    //logout
    nemo.page.home.nav.logoutLink.click();
    nemo.page.home.login.email.waitForDisplayed().then(function () {
      done();
    }, function (err) {
      done(err);
    })

  });
});