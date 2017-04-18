# nemo-example-app

Example usage of Nemo automation for a node.js web application (using kraken-js)

## Pre-requisite

It is recommended that you are running `node@v4` or above. If you are using `v0.12` for some reason, note that newer versions of selenium-webdriver 
use ES6 features. You will need to make sure your node process is started with the `harmony` flag. In general, it's best to use `node@v4` or newer.

**If you plan to run the `wdb-spec.js` test** (it doesn't run by default), you will need to have an appropriate version of the selenium-standalone jar file on your system. Please [see below](#progression-of-automation-tests) for more information.
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
$ npm run nemo
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
* `wdb-spec.js` uses the [nemo-wd-bridge](https://github.com/paypal/nemo-wd-bridge) plugin to provide the [wd](https://github.com/admc/wd) interface, for those who want to use appium.
  * You need an appium server running locally as well as an iOS simulator
  * Run the appium/wdb spec via `npm run nemo:mobile`
  
* `flow-spec.js`
  * uses `flow/*.js` modules to illustrate how to abstract functionality into shareable modules
  * uses `util/index.js` module to abstract error handling and callback management

## Getting feedback from your tests

The core nemo modules use the [debug](https://www.npmjs.com/package/debug) module for logging. It is fairly easy to get (or hide) the useful logging output.

If you want to see a good amount of logging information, set `DEBUG=nemo*,selenium-drivex*`.

Additionally, the `nemo-logger` module is installed to switch on the [selenium-webdriver logging](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/logging.html). The output can be quite verbose, 
but if you need it, change the value of the plugin argument in the `test/functional/config/config.json` file from `WARNING` to `ALL`.

## Using nemo-runner

You will note the various `nemo` scripts in package.json:

```js
"scripts": {
    "start": "node index.js",
    "nemo": "nemo-runner -B test/functional",
    "nemo:generic": "nemo-runner -B test/functional -G @generic",
    "nemo:flow": "nemo-runner -B test/functional -G @flow",
    "nemo:view": "nemo-runner -B test/functional -G @view",
    "nemo:page": "nemo-runner -B test/functional -G @page",
    "nemo:mobile": "nemo-runner -B test/functional -P ios",
    "nemo:parallel": "nemo-runner -B test/functional -G @page,@flow,@view,@generic",
    "nemo:debug": "nemo-runner --debug-brk -B test/functional -P chrome -G @view"
  },
```

These provide shortcuts for you to call nemo-runner with preset arguments. Note that `nemo:parallel` will launch four parallel browser instances.
Parallelism is also driven by the number of profiles `-P` specified. So, the # of parallel processes would be equal to `-P` x `-G`. This allows the user
a lot of options in how they define parallelism in their test suites.

## Debugging

The `nemo:debug` npm script is included as an example of how to launch the nemo suite in a debugger. Call `npm run nemo:debug`,
then start a remote debugger (using WebStorm or `node-inspector`). You can then set and hit breakpoints as your suite runs.

Note: this pattern will change if you are using node@7 and above, as there is a built in inspector.