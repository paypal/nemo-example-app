/*global nemo:true, describe:true, it:true */
var plugins = require("../config/nemo-plugins"),
	nemoFactory = require("nemo-mocha-factory"),
	dd = require('data-driven'),
	assert = require('assert'),
	users = {
		"us": {
			"country": "US"
		},
		"fr": {
			"country": "FR"
		},
		"ca": {
			"country": "CA"
		}
	},
	setup = {
		"view": ["login"],
		"user": users
	},
	ddArray = [];

Object.keys(users).forEach(function(key) {
	console.log("country",key);
	ddArray.push({"country": key});
});
describe('a @loginSuite@', function () {
	beforeEach(function(done) {
		nemo.driver.get("https://www." + nemo.props.stage + ".qa.paypal.com/webapps/mpp/home").then(function() {
			done();
		})
	});
	afterEach(function(done) {
		//logout
		nemo.view.login.logout().click();
		nemo.driver.sleep(1000).then(function() {
			done();
		})
	});
	nemoFactory({"plugins": plugins, "setup": setup});
	dd(ddArray, function () {
		it('should @login@ with {country} user', function (ctx, done) {
			assert.equal(ctx.country, nemo.user.users[ctx.country].country.toLowerCase());
			nemo.screenshot.snap("login");
			nemo.view.login.email().clear();
			nemo.view.login.email().sendKeys(nemo.user.users[ctx.country].emailAddress);
			nemo.view.login.password().sendKeys(nemo.user.users[ctx.country].password);
			nemo.view.login.button().click();
			nemo.view.login.logoutWait(10000).then(function () {
				done()
			}, function (err) {
				done(err);
			});
		});
	});
});