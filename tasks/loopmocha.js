'use strict';

var nconf = require('nconf');

module.exports = function loopmocha(grunt) {
	nconf.env()
		.argv();
	// Load task
	grunt.loadNpmTasks('grunt-loop-mocha');
	// Options
	return {
	"src": ["<%=loopmocha.basedir%>/spec/*.js"],
	"basedir": process.cwd() + "/" + "test/functional",
	"options": {
		"mocha": {
			"reportLocation": grunt.option("reportLocation") || "<%=loopmocha.basedir%>/report",
			"timeout": grunt.option("timeout") || 600000,
			"grep": grunt.option("grep") || 0,
			"debug": grunt.option("debug") || 0,
			"reporter": grunt.option("reporter") || "spec"
		},
		"nemoData": {
			"autoBaseDir": "<%=loopmocha.basedir%>",
			"targetBrowser": nconf.get("TARGET_BROWSER") || "firefox",
			"targetServer": nconf.get("TARGET_SERVER") || "localhost",
			"targetBaseUrl": "http://localhost:8000",
			"seleniumJar": nconf.get("SELENIUM_JAR") || "/usr/bin/selenium-server-standalone.jar",
			"serverProps": {"port": 4444},
		},
		"iterations": [
			{
				"description": "default"
			}
		]
	},
	"local": {
		"src": "<%=loopmocha.src%>"
	},
		"ci": {
			"src": "<%=loopmocha.src%>",
			"options": {
				"iterations": [
					{
						"description": "ci-featuregroup-1",
						"mocha": {
							"grep": "@featureGroup1@"
						}
					} ,
					{
						"description": "ci-featuregroup-2",
						"mocha": {
							"grep": "@featureGroup2@"
						}
					},
					{
						"description": "ci-featuregroup-3",
						"mocha": {
							"grep": "@featureGroup3@"
						}
					}
				]
			}
		}
	};
};
