'use strict';
module.exports.waitForJSReady = function waitForJSReady(nemo) {
  return nemo.driver.wait(function() {
      return nemo.driver.executeScript(function() {
          return document.getElementsByTagName('body')[0].getAttribute('data-loaded');
      });
    }
    , 5000, 'JavaScript didn\'t load').then(function() {
      return null;
    });
};

module.exports.doneSuccess = function (done) {
  return function () {
    done();
  };
};

module.exports.doneError = function (done) {
  return function (err) {
    done(err);
  };
};