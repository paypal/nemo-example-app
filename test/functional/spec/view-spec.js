/*global nemo:true, describe:true, it:true */
var plugins = require("../config/nemo-plugins"),
	nemoFactory = require("nemo-mocha-factory"),
	homePage = require("../page/homePage"),
	nemo = {},
	setup = {
		"view": ["selectBox", "textBox"]
	};
describe('@nemoSuite@viewSuite@', function() {
	nemoFactory({"plugins": plugins, "setup": setup, "context": nemo});
    beforeEach(function(done) {
        nemo.driver.get(nemo.props.targetBaseUrl).then(function() {
			done()
		}, function(err) {
			done(err);
		});
    });
	it('should @useNemoView@', function(done) {
		homePage(nemo).doStuff().then(function(ok) {
			if (ok) {
				done()
			} else {
				done(new Error("Didn't get an OK"))
			}
		}, function(err) {
			done(err)
		});
	});
});
