# nemo-example-app

Example usage of Nemo automation for a node.js web application (using kraken-js)

## Pre-requisite

It is recommended that you are running `node@v4` or above. If you are using `v0.12` for some reason, note that newer versions of selenium-webdriver 
use ES6 features. You will need to make sure your node process is started with the `harmony` flag. In general, it's best to use `node@v4` or newer.

## Get started

Install and start the application.

```bash
$ git clone https://github.com/paypal/nemo-example-app.git
$ cd nemo-example-app
$ npm install
$ grunt build
$ npm start
```

Run Nemo

```bash
$ grunt automation
```

If you didn't get a successful test run, where you saw a browser open on your desktop,
then please [refer to this document](https://github.com/paypal/nemo-docs/blob/master/driver-setup.md) for
instructions on setting up a webdriver.

## About the application

This application has one route: http://localhost:8000

It simulates a one-page app, with latency between navigations and simulated "add" operations, and success/failure messages
printed to screen.

* successful login: provide any email address except "fail@fail.com"
* failed login: use "fail@fail.com"
* successful add card: provide any card number except 1001001
* failed add card: use 1001001
* successful add bank: provide any account number except 1001001
* failed add bank: use 1001001

As mentioned above, an identical application is hosted here: https://fast-castle-8102.herokuapp.com

## Progression of automation tests

There are several suite files, each illustrating different things:

* `generic-spec.js` uses inline locator strings and generic `nemo-view` methods
([see here](https://github.com/paypal/nemo-view/blob/master/README.md#genericunderbar-methods)). Illustrates a first pass
of automation.
* `view-spec.js` uses JSON locator files which `nemo-view` turns into convenience methods
([see here](https://github.com/paypal/nemo-view/blob/master/README.md#locator-methods)). Illustrates a second pass
of automation where inline locator strings are separated into JSON locator files.
* `page-spec.js` uses JSON locator files which [nemo-page](https://github.com/OuranosSkia/nemo-page)(like `nemo-view`) uses to build a model to allow you to do element-level methods in a simple, concise, and precise way.
* `wdb-spec.js` uses the [nemo-wd-bridge](https://github.com/paypal/nemo-wd-bridge) plugin to provide the [wd](https://github.com/admc/wd) interface, for those who prefer it.
* `flow-spec.js`
  * uses `flow/*.js` modules to illustrate how to abstract functionality into shareable modules
  * uses `util/index.js` module to abstract error handling and callback management

## Getting feedback from your tests

The core nemo modules use the [debug](https://www.npmjs.com/package/debug) module for logging. It is fairly easy to get (or hide) the useful logging output.

If you want to see a good amount of logging information, set `DEBUG=nemo*,selenium-drivex*`.

Additionally, the `nemo-logger` module is installed to switch on the [selenium-webdriver logging](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/logging.html). The output can be quite verbose, 
but if you need it, change the value of the plugin argument in the `test/functional/config/config.json` file from `WARNING` to `ALL`.

## Using mocha directly

Using `grunt auto` runs mocha via the intermediate [grunt-loop-mocha](https://github.com/grawk/grunt-loop-mocha) task.
Sometimes, for debugging purposes, it is nice to strip that layer away and run the tests via mocha directly. To do that
in this repo, do the following:

```bash
$ export nemoBaseDir=/path/to/this/repo/nemo-example-app/test/functional
$ DEBUG=nemo*,selenium-drivex*
$ node_modules/.bin/mocha test/functional/spec/*.js --timeout 30000 --grep @flow --harmony
```

Note: the `DEBUG` variable is optional, if you want to see a lot of logging during your tests
Note: the `harmony` flag is only necessary if you are using node < v4
