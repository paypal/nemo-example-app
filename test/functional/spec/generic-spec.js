/*global nemo:true, describe:true, it:true */

describe('@generic@', function () {
    //this suite is an anti-pattern.
    // - several use cases in a single test is bad.
    // - common functionality (checking for JS loaded, logging in) within a test case
    // - locators hardcoded into test
    // But this is how automation on an app begins as the app changes quickly in early development
    it('should execute high level functionality using generic methods', function () {
        var nemo = this.nemo;

        return nemo.driver.get(nemo.data.baseUrl).
        then(function () {
            nemo.driver.wait(function () {
                    return nemo.driver.executeScript(function () {
                        return (document.getElementsByTagName('body')[0].getAttribute('data-loaded') === 'true');
                    });
                }
                , 10000, 'JavaScript didn\'t load');
            nemo.view._waitVisible('id:email').sendKeys('me@mine.com');
            nemo.view._find('#password').sendKeys('11111111');
            nemo.view._find('#loginbutton').click();
            //add card
            nemo.view._waitVisible('#cc').sendKeys('123456789012');
            nemo.view._finds('#type option').then(function (opts) {
                return opts[1].click();
            });
            nemo.view._find('#ccbutton').click();
            nemo.view._waitVisible('p.result.good');
            //add bank
            nemo.view._find('#addbalink').click();
            nemo.view._waitVisible('#ban').sendKeys('0123545332');
            nemo.view._find('#brn').sendKeys('343434');
            nemo.view._find('#babutton').click();
            nemo.view._waitVisible('p.result.good');
            //logout
            nemo.view._find('#logoutlink').click();
            nemo.driver.wait(function () {
                    return nemo.driver.executeScript(function () {
                        return (document.getElementsByTagName('body')[0].getAttribute('data-loaded') === 'true');
                    });
                }
                , 10000, 'JavaScript didn\'t load');
            nemo.view._waitVisible('id:email').sendKeys('me@mine.com');
            nemo.view._find('#password').sendKeys('11111111');
            nemo.view._find('#loginbutton').click();
            //add card
            nemo.view._waitVisible('#cc').sendKeys('123456789012');
            nemo.view._finds('#type option').then(function (opts) {
                return opts[1].click();
            });
            nemo.view._find('#ccbutton').click();
            nemo.view._waitVisible('p.result.good');
            //add bank
            nemo.view._find('#addbalink').click();
            nemo.view._waitVisible('#ban').sendKeys('0123545332');
            nemo.view._find('#brn').sendKeys('343434');
            nemo.view._find('#babutton').click();
            nemo.view._waitVisible('p.result.good');
            //logout
            nemo.view._find('#logoutlink').click();
            nemo.driver.wait(function () {
                    return nemo.driver.executeScript(function () {
                        return (document.getElementsByTagName('body')[0].getAttribute('data-loaded') === 'true');
                    });
                }
                , 10000, 'JavaScript didn\'t load');
            nemo.view._waitVisible('id:email').sendKeys('me@mine.com');
            nemo.view._find('#password').sendKeys('11111111');
            nemo.view._find('#loginbutton').click();
            //add card
            nemo.view._waitVisible('#cc').sendKeys('123456789012');
            nemo.view._finds('#type option').then(function (opts) {
                return opts[1].click();
            });
            nemo.view._find('#ccbutton').click();
            nemo.view._waitVisible('p.result.good');
            //add bank
            nemo.view._find('#addbalink').click();
            nemo.view._waitVisible('#ban').sendKeys('0123545332');
            nemo.view._find('#brn').sendKeys('343434');
            nemo.view._find('#babutton').click();
            nemo.view._waitVisible('p.result.good');
            //logout
            nemo.view._find('#logoutlink').click();
            nemo.view._waitVisible('#email');
        });

    });
});