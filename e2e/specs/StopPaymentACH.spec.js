var {defineSupportCode} = require('cucumber');


defineSupportCode(function({Given, When, Then}) {
				Given('User enters the landing page by clicking the Stop Payment ACH Link for customer {cif} account {account}', function (cif, account, callback) {

					browser.driver.wait(ExpectedConditions.presenceOf(element(by.id('app'))), 20 * 1000, 'Time Out');
					
					browser.executeScript("document.getElementById('accountVO').value='" + browser.params.account + "'");
					browser.executeScript("document.getElementById('ldapGroupId').value='" + browser.params.ldapGroup + "'");
					browser.executeScript("document.getElementById('configuredSchemes').value='" + browser.params.configuredSchemes + "'");
					browser.executeScript("document.getElementById('todayDate').value='" + browser.params.todayDate + "'");
					browser.executeScript("document.getElementById('cbbflag').value='" + browser.params.cbbflag + "'");
					browser.executeScript("document.getElementById('brokerflag').value='" + browser.params.brokerflag + "'");
					
					browser.wait(ExpectedConditions.visibilityOf(element(by.partialLinkText('Stop ACH Payment'))), 20 * 1000, 'Time Out');

					browser.executeScript("document.getElementById('custInfoReqDetails').value='" + browser.params.agentdetails + "'");
					browser.executeScript("document.getElementById('customerVO').value='" + browser.params.customer + "'");
					browser.executeScript("document.getElementById('holidayVO').value='" + browser.params.holidayVO + "'");
					browser.executeScript("document.getElementById('holidaysVO').value='" + browser.params.holidaysVO + "'");
										
					browser.findElement(by.partialLinkText('Stop ACH Payment')).click();
			});

				


	 When('the {PaymentMethod} radio button is selected', function (PaymentMethod,callback) {
			 if(PaymentMethod == 'Debit') {
				 element.all(by.xpath('//input[@name="requestDebitCreditRadio"]')).then(function(items) {
						
					  items[0].click().then(function() {
						  callback();
					  });
					});
				 
			 } else {
				 element.all(by.xpath('//input[@name="requestDebitCreditRadio"]')).then(function(items) {
						
					  items[1].click().then(function() {
						  callback();
					  });
					});
			 }
			 
 		});
	
		
		 
       
	When('User enters {originator} as Name Of Originator', function(originator, callback) {
			browser.findElement(by.name('nameOfOriginator')).sendKeys(originator);
				callback();
	});
	
	When('User enters {OriginationID} as Origination ID', function(OriginationID, callback) {
			browser.findElement(by.name('OriginationID')).sendKeys(OriginationID);
				callback();
		});

	
	
	
	When('User enters {amount1} to {amount2} as Amount Range', function (amount1, amount2, callback) {
        	
		browser.findElement(by.name('amount1')).sendKeys(amount1);
		browser.findElement(by.name('amount2')).sendKeys(amount2);
		callback();
      });
	
	
	
	
	 
		
	Then('{OriginationID} is displayed as Origination ID', function(OriginationID, callback) {
		browser.findElement(by.name('OriginationIDRO')).isDisplayed().then(function (isVisible) {
		
				if (isVisible) {
					callback();
				} else {
					callback(new Error("OriginatorID is not displayed"));
				}
			});

		});


	

	Then('{originator} is displayed as Name Of Originator', function(originator, callback) {
		
			element(by.name('nameOfOriginatorRO')).isDisplayed().then(function (isVisible) { 	
				if (isVisible) {
					callback();
				} else {
					callback(new Error("Originator is not displayed"));
				}
			});

		});


	
	Then('{amount1} and {amount2} are displayed as Amount Range', function(amount1,amount2, callback) {
		
			element(by.id('Amount1')).isDisplayed().then(function (isVisible) { 	
				if (isVisible) {
					callback();
				} else {
					callback(new Error("Modal is not displayed"));
				}
			});

			browser.findElement(by.id("Amount2")).click();  
														
			browser.wait(function() {
				// Wait for spinner to be gone.
				return element(by.css('.loader')).isPresent().then(function (isVisible) { 			
					return !isVisible;
				});

			}, 120 * 1000);
			element(by.id('Amount2')).isDisplayed().then(function (isVisible) { 	
						if (isVisible) {
					callback();
				} else {
					callback(new Error("amount1 and amount2 are not displayed"));
				}
			});
	});


	Then('{reason} or {reasontext} is displayed as Reason', function(reason, callback) {
		
			element(by.id('reason-dropdown')).isDisplayed().then(function (isVisible) { 	
																				
				if (isVisible) {
					callback();
				} else {
					callback(new Error("reason-dropdown is not displayed"));
				}
			});
		
	});
	
	Then('{PaymentMethod} is displayed as Debit or Credit', function(callback) {
		element(by.id("reviewDebitLine")).isSelected().then(function (isSelected) {
			if (isSelected) {
				callback();
			} else {
				callback(new Error("Error: Debit is not selected!!"));
			}
		});
	});

	Then('$15.00 is displayed as Fee', function(callback) {
		element(by.id("request15fee")).isSelected().then(function (isSelected) {
			if (isSelected) {
				callback();
			} else {
				callback(new Error("Error: Debit is not selected!!"));
			}
		});
	});
	
	
	
	When('And User selects waive fee check box',function(callback)
			{
		browser.findElement(by.xpath('//*[@id="requestWaiveFullFeeCheckbox"]')).click();
				
		callback();
			});
	
	When('User clicks on Submit button', function(callback) {
		browser.findElement(by.id("primaryBtn")).click();
		browser.wait(function() {
			// Wait for spinner to be gone.
			return browser.isElementPresent(by.id("address_accordion"));
		}, 20 * 1000);
		callback();
	  });
	
	
	
	
	
	 When('User enters  in Other Reason field if required', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });
	
	Then('ACH Authorization Revoked or  is displayed as Reason', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
      });
	
	
	
	 
	
	
	Then('ACH One Time Stop or  is displayed as Reason', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
      });
	
	Given('User selects waive fee check box', function (callback) {
        element(by.id('requestWaiveFullFeeCheckbox')).click();
	    callback();
      });
	
	
	 Then('stop ACH request is submitted successfully', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });
	 
	 
	
	
	})