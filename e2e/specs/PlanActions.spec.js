var {defineSupportCode} = require('cucumber');


defineSupportCode(function({Given, When, Then}) {
	Given('User opens plan actions page for customer {cif} plan {plan}', function (cif, plan, callback) {

		browser.wait(function() {
			return browser.isElementPresent(by.xpath('//div[@id="app"]'));
		}, 20 * 1000);

		browser.executeScript("document.getElementById('customerVO').value='" + browser.params.customer + "'");
	});

	When('LDAP group is {groupId}', function (groupId, callback) {
		browser.executeScript("document.getElementById('ldapGroupId').value= '" + groupId + "'");
		browser.sleep(5000);
		callback();
	});

})
