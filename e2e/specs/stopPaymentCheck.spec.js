var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
	Given ('User enters the landing page by clicking the Stop Check Payment Link for customer {cif} account {account}',function (cif, account, callback){

		browser.driver.wait(ExpectedConditions.presenceOf(element(by.id('app'))), 20 * 1000, 'Time Out');
		
		browser.executeScript("document.getElementById('accountVO').value='" + browser.params.account + "'");
		browser.executeScript("document.getElementById('ldapGroupId').value='" + browser.params.ldapGroup + "'");
		browser.executeScript("document.getElementById('configuredSchemes').value='" + browser.params.configuredSchemes + "'");
		browser.executeScript("document.getElementById('todayDate').value='" + browser.params.todayDate + "'");
		browser.executeScript("document.getElementById('cbbflag').value='" + browser.params.cbbflag + "'");
		browser.executeScript("document.getElementById('brokerflag').value='" + browser.params.brokerflag + "'");
		
		browser.wait(ExpectedConditions.visibilityOf(element(by.partialLinkText('Stop Check Payment'))), 20 * 1000, 'Time Out');

		browser.executeScript("document.getElementById('custInfoReqDetails').value='" + browser.params.agentdetails + "'");
		browser.executeScript("document.getElementById('customerVO').value='" + browser.params.customer + "'");
		browser.executeScript("document.getElementById('holidayVO').value='" + browser.params.holidayVO + "'");
		browser.executeScript("document.getElementById('holidaysVO').value='" + browser.params.holidaysVO + "'");
									
		browser.findElement(by.partialLinkText('Stop Check Payment')).click();
	});
	
	When('the Request tab is displayed', function (callback) {
    	element(by.xpath('//a[@href="#request"]')).isPresent().then(function(isVisible){
    		if(isVisible){
    			callback();
			}
    		else{
    			callback(new Error("Error: Request Tab is not displayed"));
			}
		});
	});
	
	Then('the Review tab is disabled', function (callback) {
		  // Write code here that turns the phrase above into concrete actions
		element(by.xpath('//a[@href="#review"]/parent::li[contains(@class,"active")]')).isPresent().then(function(isVisible){
			if(!isVisible){
				callback();
			}
			else{
				callback(new Error("Error: Review Tab is active"));
			}
		});
	});
	
	Then('the Check Number radio button has been selected', function (callback) {
		 element.all(by.xpath('//input[@name="requestNumberRangeRadio"]')).then(function(items) {
			items[0].isSelected().then(function (isSelected) {
				if (isSelected) {
					callback();
				} else {
					callback(new Error("Error: Check Number is not selected"));
				}
			});
		 });
	 });
	 
	 Then('the Check Range Text boxes are disabled', function (callback) {
		  // Write code here that turns the phrase above into concrete actions
			element.all(by.xpath('//input[contains(@class,"checkRangeInput")]')).each(function(element,index){
				element.isEnabled().then(function(isEnabled){
					if (!isEnabled)
						callback();
					else
						callback(new Error("Error: Text Box is not Disabled"));
				});
			});
	 });
	 
	 Then('the waive fee check box is unselected', function (callback) {
		  // Write code here that turns the phrase above into concrete actions
			element(by.id('requestWaiveFullFeeCheckbox')).isSelected().then(function(isSelected){
				if(!isSelected){
					callback();
				}
				else{
					callback(new Error("Error: Waive Full Fee is selected"));
				}
			});
	 });
	 
	 Then('the Reason Drop Down Box says Select', function (callback) {
		 browser.sleep(1000);
		  element(by.id('requestReasonSelect')).getAttribute("value").then(function(text){
			  if (text==""){
				  callback();
			  }
			  else{
				  callback(new Error("Error: Select is not Default Selected"));
			  }
		  })
	 });
	 
	 Then('the Continue button is disabled', function (callback) {
		  // Write code here that turns the phrase above into concrete actions
			element(by.id('requestContinueButton')).isEnabled().then(function(isEnabled){
				if(!isEnabled){
					callback();
				}
				else{
					callback(new Error("Error: Continue Button is not disabled"));
				}
			});
		});
	 
	
	When ('The Check Number radio button is selected',function (callback){
		// browser.findElement(by.xpath('//input[@value="range"]')).click();
			element.all(by.xpath('//input[@name="requestNumberRangeRadio"]')).then(function(items) {
			  items[1].click().then(function() {
				  items[0].click().then(function() {
					  callback();
				  });
			  });
			});
	});
	
	When ('User enters {CheckNumber} as Check Number',function (CheckNumber, callback){
		// browser.findElement(by.xpath('//input[@id="checkNumberInput"]')).sendKeys(CheckNumber);
		browser.findElement(by.id('checkNumberInput')).sendKeys(CheckNumber);
		// browser.driver.sleep(5000);
		callback();
	});
	
	When('User enters {Payee} as Payee', function (Payee,callback) {
	   // browser.findElement(by.xpath('//input[contains(class,"aplhanumericInput")]')).sendKeys(Payee);
		browser.findElement(by.css('input.form-control.aplhanumericInput')).sendKeys(Payee);
	    callback();
	});
	
	When('User enters {amount} as Amount', function (amount, callback) {
		// browser.findElement(by.css('input.form-control.width150px.numbersOnlyInput')).click();
		browser.findElement(by.xpath('//input[@class="form-control width150px numbersOnlyInput currencyFormat"]')).sendKeys(amount);
		   callback();
	});
	
	When('User selects {reason} from Reason drop down', function (reason,callback) {
		  element(by.xpath('//input[@id="requestReasonSelect"]/ancestor::div[@class="Select-control"]')).click().then(function(){
			  element.all(by.xpath('//div[@class="Select-menu-outer"]/div[@class="Select-menu"]/div')).each(function(element,index){
				  element.getText().then(function(text){
					  if(text.toUpperCase()==reason.toUpperCase()) {
						  element.click();
						  browser.sleep(1000);
						  
						  callback();
					  }
				  });
			  })
		  });
	});
	
	When('User enters {reasontext} in Other Reason field if required for {reason}', function (reasontext,reason,callback) {
			if(reason.toUpperCase()=="OTHER"){
				// browser.findElement(by.xpath('//textarea[@class="form-control
				// widthFull notesInput"]')).click;
				browser.findElement(by.xpath('//textarea[@id="otherReason"]')).sendKeys(reasontext);
				callback();
			} else {
				  callback();
			}
	});
	
	When('the Continue button is enabled', function (callback) {
		  // Write code here that turns the phrase above into concrete actions
		element(by.id('requestContinueButton')).isEnabled().then(function(isEnabled){
			if(isEnabled){
				callback();
			}
			else{
				callback(new Error("Error: Continue Button is not Enabled"));
			}
		});
	});
	
	When('Review tab is displayed', function(callback) {
		  // Write code here that turns the phrase above into concrete actions
		element(by.xpath('//a[@href="#review"]/parent::li[contains(@class,"active")]')).isPresent().then(function(isVisible){
			if(isVisible){
				callback();
			}
			else{
				callback(new Error("Error: Review Tab is not displayed"));
			}
		});
	});
	
	When('User clicks on Continue button', function (callback) {
		browser.driver.wait(element(by.css('button.btn.primaryBtn')).isEnabled(), 20 * 1000, 'Time Out');
		//console.log (ExpectedConditions.stalenessOf(element(by.css('button.btn.primaryBtn'))));
		browser.findElement(by.css('button.btn.primaryBtn')).click();
		callback();
//		element(by.css('button.btn.primaryBtn')).isEnabled().then(function(isEnabled){
//			  console.log(isEnabled);  
//		  });
	});
	 
	Then('{Payee} is Displayed as Payee', function (Payee,callback) {
		  // Write code here that turns the phrase above into concrete actions
		browser.findElement(by.xpath('//div[contains(text(),"Payee")]/parent::following-sibling::div/div[1]')).getText().then(function(text){
			if (text==Payee){
				callback();
			}
			else {
				callback(new Error("Error: Payee Name is " + text ));
			}
		});
			
		
	});
	
	When('the Check Range radio button has been selected', function (callback) {
        // Write code here that turns the phrase above into concrete actions
		element.all(by.xpath('//input[@name="requestNumberRangeRadio"]')).then(function(items) {
		
			  items[0].click().then(function() {
				  items[1].click().then(function() {
					  callback();
				  });
			  });
			});
        callback();
      });
	
	When('User enters {CheckNumberFrom} as Check Number From and {CheckNumberTo} as Check Number To', function (CheckNumberFrom, CheckNumberTo, callback) {
        // Write code here that turns the phrase above into concrete actions
		browser.findElement(by.name('CheckFrom')).sendKeys(CheckNumberFrom);
		browser.findElement(by.name('CheckTo')).sendKeys(CheckNumberTo);
        callback();
      });
	
	
	 When('User checks the Waive Full Fee Check Box', function (callback) {
         // Write code here that turns the phrase above into concrete actions
		 browser.findElement(by.xpath('//*[@id="requestWaiveFullFeeCheckbox"]')).click();
			         callback();
       });
	 
	 Then('stop Check request is submitted successfully', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
	 });
})