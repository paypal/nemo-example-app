/*global nemo:true, describe:true, it:true */
let Nemo = require('nemo');
let nemo = {};
const util = require('../util');

describe('@async@ uses ES6 async/await', function () {
    before(async function () {
        nemo = await Nemo();
    });
    after(function () {
        return nemo.driver.quit();
    });
    it('should reject a promise', async function () {
        //login
        await nemo.driver.get('http://www.google.com');
        await nemo.view._waitVisible('[name=q]');
        await nemo.view._find('[name=q]').sendKeys('webdriver');
        await nemo.view._find('[name=btnG]').click();
        return nemo.driver.wait(nemo.wd.until.titleIs('webdriver - Google Search'), 1000);
    });
});