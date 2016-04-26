/*global nemo:true, describe:true, it:true */
var Nemo = require('nemo');
var nemo = {};

describe('@wdb@', function () {
  before(function (done) {
    nemo = Nemo(function (err) {
      if (err) {
        console.error(err);
        return done(err);
      }

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