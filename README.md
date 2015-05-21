# nemo-example-app

Example usage of Nemo automation for a node.js web application (using kraken-js)

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
then please [refer to this document](https://github.com/paypal/nemo-docs/blob/1.0-develop/driver-setup.md) for
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

There are three suite files:

* `generic-spec.js` uses inline locator strings and generic `nemo-view` methods
([see here](https://github.com/paypal/nemo-view/blob/master/README.md#genericunderbar-methods)). Illustrates a first pass
of automation.
* `view-spec.js` uses JSON locator files which `nemo-view` turns into convenience methods
([see here](https://github.com/paypal/nemo-view/blob/master/README.md#locator-methods)). Illustrates a second pass
of automation where inline locator strings are separated into JSON locator files.
* `flow-spec.js`
  * uses `flow/*.js` modules to illustrate how to abstract functionality into shareable modules
  * uses `util/index.js` module to abstract error handling and callback management


## Using mocha directly

Using `grunt auto` runs mocha via the intermediate [grunt-loop-mocha](https://github.com/grawk/grunt-loop-mocha) task.
Sometimes, for debugging purposes, it is nice to strip that layer away and run the tests via mocha directly. To do that
in this repo, do the following:

```bash
$ export nemoBaseDir=/path/to/this/repo/nemo-example-app/test/functional
$ node_modules/.bin/mocha test/functional/spec/*.js --timeout 30000 --grep @flow
```