exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  capabilities: {
    'browserName': 'chrome',
	'chromeOptions': {
	    //'args': ["--headless", "--disable-gpu", '--disable-extensions', '--disable-infobars', '--start-maximized'],
		'args': ['--disable-extensions', '--disable-infobars', '--start-maximized'],
	    'forceDevToolsScreenshot': true
	 },
	 'addExperimentalOption': ['useAutomationExtension', 'false'],
	 'addAdditionalCapability': ['useAutomationExtension', 'false']
  },

  baseUrl: "http://localhost:8888",
  
  ignoreUncaughtExceptions: true,

  onPrepare: function() {
      browser.ignoreSynchronization = true;
  },
  
  // framework details
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Spec patterns are relative to this directory.
  specs: [
    './e2e/features/**/*.feature'
  ],

  params: {
	  agentdetails: "",
	  configuredSchemes: JSON.stringify({ER_LINK_FLAG:["true"],DEBITCARD_SCHEME:["SBGMM","CAGEN","CAPER","CASNW","CASNR"]}),
	  customer: "",
	  plan: "",
	  account: "",
	  loan: "",
	  holidayVO: "01/01/2019",
	  holidaysVO: "2019-00-01",
	  todayDate: "Wed Jun 27 16:26:13 CDT 2018",
	  cbbflag: true,
	  brokerflag: "N",
	  ldapGroup: "35"
  },
  
  cucumberOpts: {
	format: 'pretty',
    require: ['./e2e/support/*.js', './e2e/specs/**/*.spec.js']
  }
};