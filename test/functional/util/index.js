'use strict';
var methods = {
    waitForJSReady: function waitForJSReady(nemo) {
        return nemo.driver.wait(function () {
                return nemo.driver.executeScript(function () {
                    return (document.getElementsByTagName('body')[0].getAttribute('data-loaded') === 'true');
                });
            }
            , 10000, 'JavaScript didn\'t load');
    },
    login: function login(nemo) {
        nemo.driver.get(nemo.data.baseUrl);
        methods.waitForJSReady(nemo);
        nemo.view.login.emailWaitVisible().sendKeys('me@mine.com');
        nemo.view.login.password().sendKeys('11111111');
        nemo.view.login.button().click();
        return nemo.view.nav.bankLinkWaitVisible();
    },
    logout: function login(nemo) {
        nemo.view.nav.logoutLink().click();
        return nemo.view.login.passwordWaitVisible();
    }
};

module.exports = methods;