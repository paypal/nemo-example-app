/*global nemo:true, describe:true, it:true */
var Nemo = require('nemo');
var nemo = {};
var util = require('../util');

describe('@view@', function () {
  before(function (done) {
    nemo = Nemo(function (err) {
      if (err) {
        return done(err);
      }
      done();
    });
  });
  after(function (done) {
    nemo.driver.quit().then(done);
  });
  it('should execute high level functionality using generic methods', function (done) {

    //login
    nemo.driver.get(nemo.data.baseUrl);
    util.waitForJSReady(nemo);
    nemo.view.login.emailWaitVisible().sendKeys('me@mine.com');
    nemo.view.login.password().sendKeys('11111111');
    nemo.view.login.button().click();

    //add card success
    nemo.view.card.numberWaitVisible().sendKeys('123456789012');
    nemo.view.card.typeOptionText('Misa');
    nemo.view.card.button().click();
    nemo.view.card.successWait();

    //add card fail
    nemo.view.card.number().clear();
    nemo.view.card.number().sendKeys('1001001');
    nemo.view.card.typeOptionText('Misa');
    nemo.view.card.button().click();
    nemo.view.card.failureWait();

    //add bank success
    nemo.view.nav.bankLink().click();
    nemo.view.bank.numberWaitVisible().sendKeys('0123545332');
    nemo.view.bank.routing().sendKeys('343434');
    nemo.view.bank.button().click();
    nemo.view.bank.successWait();

    //add bank fail
    nemo.view.nav.bankLink().click();
    nemo.view.bank.numberWaitVisible().sendKeys('0123545332');
    nemo.view.bank.routing().sendKeys('343434');
    nemo.view.bank.button().click();
    nemo.view.bank.successWait();

    //logout
    nemo.view.nav.logoutLink().click();
    nemo.view.login.emailWaitVisible().then(function () {
      done();
    }, function (err) {
      done(err);
    })

  });
});