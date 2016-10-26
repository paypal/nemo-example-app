/*global nemo:true, describe:true, it:true */
var Nemo = require('nemo');
var nemo = {};
var util = require('../util');

describe('@fixo@', function () {
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

        nemo.view._waitVisible('#email').then(function () {
            done();
        }, function (err) {
            done(err);
        })
    });
});