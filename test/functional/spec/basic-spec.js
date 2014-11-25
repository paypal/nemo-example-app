/*global nemo:true, describe:true, it:true */
var plugins = require("../config/nemo-plugins"),
	nemoFactory = require("nemo-mocha-factory"),
	homePage = require("../page/homePage"),
	setup = {};
describe('basic @nemoSuite@featureGroup1@', function() {
	nemoFactory({"plugins": plugins, "setup": setup});
	it('should @openAnUrl@', function(done) {
		nemo.driver.get(nemo.props.targetBaseUrl).then(function() {
			done()
		}, function(err) {
			done(err);
		});
	});
});