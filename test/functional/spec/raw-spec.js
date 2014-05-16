/*global nemo:true, describe:true, it:true */
var plugins = require("../config/nemo-plugins"),
	nemoFactory = require("nemo-mocha-factory"),
	logs,
	setup = {};
describe('this is a @liveLoginSuite@', function () {
	nemoFactory({"plugins": plugins, "setup": setup});
	before(function (done) {
		logs = new nemo.wd.WebDriver.Logs(nemo.driver);
		done();
	});
	it('should @login@', function (done) {
		nemo.driver.get("https://www.stage2p2272.qa.paypal.com/webapps/mpp/home");
		nemo.driver.findElement(nemo.wd.By.id("login_email")).clear();
		nemo.driver.findElement(nemo.wd.By.id("login_email")).sendKeys("medelman-buyer@paypal.com");
		nemo.driver.findElement(nemo.wd.By.id("login_password")).sendKeys("11111111");
		nemo.driver.findElement(nemo.wd.By.css("input[type='submit'][name='submit.x']")).click();
		nemo.drivex.waitForElement({"locator": "li.logout", "type": "css"}, 10000, "couldn't find logout list").then(function () {
			console.log("found logout list");
			done();
		}, function (err) {
			done(err);
		});
	});
});