'use strict';
let methods = {
    waitForJSReady: function waitForJSReady(nemo) {
        return nemo.driver.wait(function () {
                return nemo.driver.executeScript(function () {
                    return (document.getElementsByTagName('body')[0].getAttribute('data-loaded') === 'true');
                });
            }
            , 10000, 'JavaScript didn\'t load');
    },
    login: async function login(nemo) {
        await nemo.driver.get(nemo.data.baseUrl);
        await methods.waitForJSReady(nemo);
        await nemo.view.login.emailWaitVisible().sendKeys('me@mine.com');
        await nemo.view.login.password().sendKeys('11111111');
        await nemo.view.login.button().click();
        await nemo.view.nav.bankLinkWaitVisible();
    },
    logout: async function login(nemo) {
        await nemo.view.nav.logoutLink().click();
        await nemo.view.login.passwordWaitVisible();
    }
};

module.exports = methods;