/*global nemo:true, describe:true, it:true */
var Navigate = require('../flow/navigate');
var Bank = require('../flow/bank');
var Card = require('../flow/card');

//instance variables
var navigate, bank, card;

describe('@flow@', function () {
  before(function (done) {
      var nemo = this.nemo;
      navigate = new Navigate(nemo);
      bank = new Bank(nemo);
      card = new Card(nemo);
      done();
    //
    //   nemo.wd.logging.installConsoleHandler();
    //   nemo.wd.logging.getLogger().setLevel(nemo.wd.logging.Level.ALL);
    //   nemo.driver.controlFlow().on('uncaughtException', function (err) {
    //     console.error('err', err);
    //     throw err;
    //   });
    //   done();
    // });
  });
  it('should execute high level functionality using flow modules', function () {
    return navigate.loginFailure('fail@fail.com', '11111111').then(function () {
        navigate.loginSuccess('me@mine.com', '11111111');
        card.addSuccess('0123456789012345', 'Misa');
        card.addFailure('1001001', 'Misa');
        bank.addSuccess('0432787332', '92929');
        bank.addFailure('1001001', '92929');
        navigate.logout()  ;
    });
  });
});