var Cucumber = require("cucumber");
var reporter = require("cucumber-html-reporter");
var conf = require("../../protractor.conf").config;
var agentdetails = require("../specs/agentdetails.json");
var fs = require("fs");
var mkdirp = require("mkdirp");
var {defineSupportCode} = require('cucumber');
var rest = require('rest');

defineSupportCode(function({Before, After, registerListener, registerHandler}) {

	var reportsDir = "./e2e/reports";
	var targetJson = reportsDir + "/cucumber_report.json";

	registerHandler('BeforeFeatures', function (features, callback) {
		browser.params.agentdetails = JSON.stringify(agentdetails);
		browser.sleep(5000);
		callback();
	});

	Before(function(scenario, callback) {
		var steps = scenario.scenario.steps;
		for (let s of steps) {
			for (let a of s.arguments) {
				data = a.rowsHash();
				if(data.hasOwnProperty("cif") && data.hasOwnProperty("plan")) {
					let customerPromise = rest('http://localhost:8080/getCustomer/' + data.cif);
					customerPromise.then(
							function(response) {
								let customer = JSON.stringify(response.entity);
								browser.params.customer = customer.substring(1, customer.length-1);
							},
							function(response) {
								console.log('response error: ', response);
								callback(response);
							}
					);
					let planPromise = rest('http://localhost:8080/getPlan/' + data.plan + '/' + data.cif);
					planPromise.then(
							function(res) {
								let plan = JSON.stringify(res.entity);
								browser.params.plan = plan.substring(1, plan.length-1);
							},
							function(res) {
								console.log('response error: ', res);
								callback(res);
							}
					);

					browser.wait(Promise.all([customerPromise,planPromise]), 60*1000, 'TIme Out').then(function(){
						browser.driver.get(conf.baseUrl);
						callback();
					});

				} else if(data.hasOwnProperty("cif") && data.hasOwnProperty("account")) {
					let customerPromise = rest('http://localhost:8080/getCustomer/' + data.cif);
					customerPromise.then(
							function(response) {
								let customer = JSON.stringify(response.entity);
								browser.params.customer = customer.substring(1, customer.length-1);
							},
							function(response) {
								console.log('response error: ', response);
								callback(response);
							}
					);
					let accountPromise = rest('http://localhost:8080/getAcctSummary/' + data.account);
					accountPromise.then(
							function(res) {
								let account = JSON.stringify(res.entity);
								browser.params.account = account.substring(1, account.length-1);
							},
							function(res) {
								console.log('response error: ', res);
								callback(res);
							}
					);

					browser.wait(Promise.all([customerPromise,accountPromise]), 60*1000, 'TIme Out').then(function(){
						browser.driver.get(conf.baseUrl);
						callback();
					});

				} else if(data.hasOwnProperty("cif")) {
					let url = 'http://localhost:8080/getCustomer/' + data.cif;
					rest(url).then(
							function(response) {
								let customer = JSON.stringify(response.entity);
								browser.params.customer = customer.substring(1, customer.length-1);
								browser.get(conf.baseUrl);
								callback();
							},
							function(response) {
								console.log('response error: ', response);
								browser.get(conf.baseUrl);
								callback(response);
							}
					);
				} else if(data.hasOwnProperty("plan")) {
					let url = 'http://localhost:8080/getPlan/' + data.plan;
					rest(url).then(
							function(response) {
								let plan = JSON.stringify(response.entity);
								browser.params.plan = account.substring(1, plan.length-1);
								browser.driver.get(conf.baseUrl);
								callback();
							},
							function(response) {
								console.log('response error: ', response);
								browser.get(conf.baseUrl);
								callback(response);
							}
					);
				} else if(data.hasOwnProperty("account")) {
					let url = 'http://localhost:8080/getAcctSummary/' + data.account;
					rest(url).then(
							function(response) {
								let account = JSON.stringify(response.entity);
								browser.params.account = account.substring(1, account.length-1);
								browser.driver.get(conf.baseUrl);
								callback();
							},
							function(response) {
								console.log('response error: ', response);
								browser.get(conf.baseUrl);
								callback(response);
							}
					);
				} else if(data.hasOwnProperty("loan")) {
					let loanPromise = rest('http://localhost:8080/getLoanSummary/' + data.loan);
					loanPromise.then(
							function(response) {
								let loan = JSON.stringify(response.entity);
								browser.params.loan = loan.substring(1, loan.length-1);
							},
							function(response) {
								console.log('response error: ', response);
								callback(response);
							}
					);

					browser.wait(loanPromise, 60*1000, 'TIme Out').then(function(){
						browser.driver.get(conf.baseUrl);
						callback();
					});
				}
			}
		}
	});

	After(function(scenario) {
		var attach = this.attach; // cucumber's world object has attach function which should be used
		return browser.takeScreenshot().then(function(png) {
			var decodedImage = new Buffer(png, "base64");
			return attach(decodedImage, "image/png");
		});
	});

	registerHandler('AfterFeatures', function (features) {
		browser.driver.quit();
	});

	var cucumberReporteroptions = {
	    theme: "bootstrap",
	    jsonFile: targetJson,
	    output: reportsDir + '/E2E-Test-Report.html',
	    reportSuiteAsScenarios: true,
	    brandTitle: 'End to End Test Report',
	    name: 'E2E'
	};

	var logFn = string => {
	    if (!fs.existsSync(reportsDir)) {
	    	mkdirp.sync(reportsDir);
	    }

	    try {
	    	fs.writeFileSync(targetJson, string);
	    	reporter.generate(cucumberReporteroptions); //invoke cucumber-html-reporter
	    } catch (err) {
	    	if (err) {
	    		console.log("Failed to save cucumber test results to json file.");
	    		console.log(err);
	    	}
	    }
	};

	var jsonformatter = new Cucumber.JsonFormatter({
		log: logFn
	});

	registerListener(jsonformatter);
});
