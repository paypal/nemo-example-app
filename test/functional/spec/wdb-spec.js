/*global nemo:true, describe:true, it:true */
var Nemo = require('nemo');
var nemo = {};
var util = require('../util');

describe('@wdb@', function () {
  before(function (done) {
    nemo = Nemo(function (err) {
      if (err) {
        console.error(err);
        done(err);
      }
      nemo.wd.logging.installConsoleHandler();
      nemo.wd.logging.getLogger().setLevel(nemo.wd.logging.Level.ALL);
      nemo.driver.controlFlow().on('uncaughtException', function (err) {
        console.error('err', err);
        throw err;
      });
      done();
    });
  });
  after(function (done) {
    nemo.driver.quit().then(done);
  });
  it('should execute high level functionality using generic methods', function (done) {
    nemo.wdb.get(nemo.data.baseUrl, function (err) {
      if (err) {
        return done(err);
      }
      setTimeout(function () {
        done();
      }, 3000)

    })
  });
});