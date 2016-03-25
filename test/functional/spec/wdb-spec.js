/*global nemo:true, describe:true, it:true */
var Nemo = require('nemo');
var nemo = {};
<<<<<<< c209efe7d01d3ebd51b35c1eb10b7fb66db1eee3
=======
var util = require('../util');
>>>>>>> wdb stuff

describe('@wdb@', function () {
  before(function (done) {
    nemo = Nemo(function (err) {
<<<<<<< c209efe7d01d3ebd51b35c1eb10b7fb66db1eee3
      if (err) {
        console.error(err);
        return done(err);
      }
=======
      //nemo.wd.logging.installConsoleHandler();
      //nemo.wd.logging.getLogger().setLevel(nemo.wd.logging.Level.ERROR);
      nemo.driver.controlFlow().on('uncaughtException', function (err) {
        console.error('err', err);
        throw err;
      });
>>>>>>> wdb stuff
      done();
    });
  });
  after(function (done) {
    nemo.driver.quit().then(done);
  });
  it('should execute high level functionality using generic methods', function (done) {
<<<<<<< c209efe7d01d3ebd51b35c1eb10b7fb66db1eee3
    nemo.wdb.get(nemo.data.baseUrl, function (err) {
=======
    nemo.wdb.get('http://www.google.com', function (err) {
>>>>>>> wdb stuff
      if (err) {
        return done(err);
      }
      setTimeout(function () {
        done();
      }, 3000)

    })
  });
});