/*global nemo:true, describe:true, it:true */
var plugins = require("../config/nemo-plugins"),
	nemoFactory = require("nemo-mocha-factory"),
	setup = {};
describe('@nemoSuite@cookieSuite@', function () {
	nemoFactory({"plugins": plugins, "setup": setup});
	it('should @setACookie@', function (done) {
		nemo.driver.get(nemo.props.targetBaseUrl).then(function () {
			var opts = new nemo.wd.WebDriver.Options(nemo.driver);
			opts.addCookie("foo", "bar");
			return opts.getCookies().then(function (cooks) {
				console.log("cooks", cooks);
			});
		}).then(function () {
			done();
		});
	});
});