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
<<<<<<< 7923858c78023c3d3a16bec27e5ecee87e97c24e
<<<<<<< c209efe7d01d3ebd51b35c1eb10b7fb66db1eee3
      if (err) {
        console.error(err);
        return done(err);
      }
=======
      //nemo.wd.logging.installConsoleHandler();
      //nemo.wd.logging.getLogger().setLevel(nemo.wd.logging.Level.ERROR);
=======
      if (err) {
        console.error(err);
        done(err);
      }
      nemo.wd.logging.installConsoleHandler();
      nemo.wd.logging.getLogger().setLevel(nemo.wd.logging.Level.ALL);
>>>>>>> further wd stuff
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
<<<<<<< 7923858c78023c3d3a16bec27e5ecee87e97c24e
<<<<<<< c209efe7d01d3ebd51b35c1eb10b7fb66db1eee3
    nemo.wdb.get(nemo.data.baseUrl, function (err) {
=======
    nemo.wdb.get('http://www.google.com', function (err) {
>>>>>>> wdb stuff
=======
    nemo.wdb.get(nemo.data.baseUrl, function (err) {
>>>>>>> further wd stuff
      if (err) {
        return done(err);
      }
      setTimeout(function () {
        done();
      }, 3000)

    })
  });
});