var {defineSupportCode} = require('cucumber');


defineSupportCode(function({Given, When, Then}) {
	Given('User opens loan actions page for loan {loan}', function (loan, callback) {

		browser.driver.wait(ExpectedConditions.presenceOf(element(by.id('app'))), 20 * 1000, 'Time Out');

		browser.executeScript("document.getElementById('accountVO').value='" + browser.params.loan + "'");
		browser.executeScript("document.getElementById('custInfoReqDetails').value='" + browser.params.agentdetails + "'");

		//browser.executeScript("document.getElementById('customerVO').value='" + browser.params.customer + "'");
	});

	Then('the Feedback and Complaints link is displayed', function(callback) {
		element(by.linkText("Feedback and Complaints")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Feedback and Complaints link is not displayed!!"));
			}
		});
	});
	Then('the Adjust Interest link is displayed', function(callback){
		element(by.linkText("Adjust Interest")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Adjust Interest link is not displayed!!"));
			}
		});
	});
	Then('the Payment Estimator link is displayed', function(callback){
		element(by.linkText("Payment Estimator")).isPresent().then(function(isVisible) {			
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Payment Estimator link is not displayed!!"));
			}
		});
	});
	Then('the Credit Bureau Actions link is displayed', function(callback){
		element(by.linkText("Credit Bureau Actions")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Credit Bureau Actions link is not displayed!!"));
			}
		});
	});
	Then('the Disbursements link is displayed', function(callback){
		element(by.linkText("Disbursements")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Disbursements link is not displayed!!"));
			}
		});
	});
	Then('the Payoff Quote link is displayed', function(callback){
		element(by.linkText("Payoff Quote")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Payoff Quote link is not displayed!!"));
			}
		});
	});
	Then('the Refer To Security link is displayed', function(callback){
		element(by.linkText("Refer To Security")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Refer To Security link is not displayed!!"));
			}
		});
	});
	Then('the Generate Document link is displayed', function(callback){
		element(by.linkText("Generate Document")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Generate Document link is not displayed!!"));
			}
		});
	});
	Then('the Manage Documents link is displayed', function(callback){
		element(by.linkText("Manage Documents")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Manage Documents link is not displayed!!"));
			}
		});
	});
	Then('the Pmt Sent To Incorrect Addr link is displayed', function(callback){
		element(by.linkText("Pmt Sent To Incorrect Addr")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Pmt Sent To Incorrect Addr link is not displayed!!"));
			}
		});
	});
	Then('the Change Interest Rate link is displayed', function(callback){
		element(by.linkText("Change Interest Rate")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Change Interest Rate link is not displayed!!"));
			}
		});
	});
	Then('the Adjust Fee link is displayed', function(callback){
		element(by.linkText("Adjust Fee")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Adjust Fee link is not displayed!!"));
			}
		});
	});
	Then('the Dispute Payment link is displayed', function(callback){
		element(by.linkText("Dispute Payment")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Dispute Payment link is not displayed!!"));
			}
		});
	});
	Then('the Issue Credit link is displayed', function(callback){
		element(by.linkText("Issue Credit")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Issue Credit link is not displayed!!"));
			}
		});
	});
	Then('the Payments link is displayed', function(callback){
		element(by.linkText("Payments")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Payments link is not displayed!!"));
			}
		});
	});
	Then('the Refund Payments link is displayed', function(callback){
		element(by.linkText("Refund Payments")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Refund Payments link is not displayed!!"));
			}
		});
	});
	Then('the Reallocate Payments link is displayed', function(callback){
		element(by.linkText("Reallocate Payments")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Reallocate Payments link is not displayed!!"));
			}
		});
	});
	Then('the Correct Payment link is displayed', function(callback){
		element(by.linkText("Correct Payment")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Correct Payment link is not displayed!!"));
			}
		});
	});
	Then('the Adjust Principal link is displayed', function(callback){
		element(by.linkText("Adjust Principal")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Adjust Principal link is not displayed!!"));
			}
		});
	});
	Then('the SCRA Calculator link is displayed', function(callback){
		element(by.linkText("SCRA Calculator")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: SCRA Calculator link is not displayed!!"));
			}
		});
	});
	Then('the Resolve Credit Bureau Dispute link is displayed', function(callback){
		element(by.linkText("Resolve Credit Bureau Dispute")).isPresent().then(function(isVisible) {
			if(isVisible) {
				callback();
			} else {
				callback(new Error("Error: Resolve Credit Bureau Dispute link is not displayed!!"));
			}
		});
	});
})