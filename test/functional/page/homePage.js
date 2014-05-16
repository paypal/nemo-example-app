module.exports = function (nemo) {
	return {
		"doStuff": function () {
			nemo.driver.get(nemo.props.targetBaseUrl);
			nemo.view.textBox.fooText().sendKeys("foo");
			nemo.view.textBox.fooButton().click();
			nemo.view.textBox.barText().sendKeys("bar");
			nemo.view.textBox.barButton().click();
			nemo.view.textBox.bingText().sendKeys("bing");
			nemo.view.textBox.bingButton().click();
			nemo.view.textBox.bangText().sendKeys("bang");
			nemo.view.textBox.bangButton().click();
			nemo.view.selectBox.abcOption().click();
			return nemo.view.textBox.outBox().getText().then(function (outText) {
				//console.log("outText", outText);
				return (outText === "foobarbingbangabc");
			});
		}
	};
};