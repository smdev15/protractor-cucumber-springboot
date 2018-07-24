"use strict";

const gulp = require("gulp");
const del = require("del");
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;
const path = require('path');

// fetch command line arguments
const arg = (argList => {
	let arg = {}, a, opt, thisOpt, curOpt;
	for (a = 0; a < argList.length; a++) {
		thisOpt = argList[a].trim();
		opt = thisOpt.replace(/^\-+/, '');

		if (opt === thisOpt) {
			// argument value
			if (curOpt) arg[curOpt] = opt;
				curOpt = null;
		} else {
			// argument name
			curOpt = opt;
			arg[curOpt] = true;
		}
	}
  return arg;
})(process.argv);

const staticDir = 'src/main/resources/static/';
const aotDir = 'aot/src/main/resources/static/';
const webAppDir = 'src/main/resources/static/app/';


// helper function for running ngc and tree shaking tasks
const run_proc = (cmd, callBack, options) => {
    let proc = exec(cmd, (err, stdout, stderr) => {
        if (options === undefined) options = {};
        if (options.outFilter !== undefined) stdout = options.outFilter(stdout);
        if (options.errFilter !== undefined) stderr = options.errFilter(stderr);
        process.stdout.write(stdout);
       // process.stdout.write(stderr);
        callBack(err);
        
    });
};

const isWin = /^win/.test(process.platform);


/**
 * Run Tests
 */
gulp.task('webdriver-manager-update', cb => {
    let cmd  = 'node_modules/.bin/webdriver-manager update --ignore_ssl --proxy "http://proxy.discoverfinancial.com:8080"';
    if (isWin) {
    	cmd  = '"node_modules/.bin/webdriver-manager" update --ignore_ssl --proxy "http://proxy.discoverfinancial.com:8080"';
    }
    return run_proc(cmd, cb);
});

gulp.task('protractor-run', ['webdriver-manager-update'], function(cb) {
    let startWebDriver  = 'node_modules/.bin/webdriver-manager';
    if (isWin) {
    	startWebDriver  = '"node_modules/.bin/webdriver-manager"';
    }

    let cmd  = 'node_modules/.bin/protractor protractor.conf.js';
    if (isWin) {
    	cmd  = '"node_modules/.bin/protractor" protractor.conf.js';
    }
    
    let paEnv = arg.env;
    let opts = "";
    
    if(arg.spec) {
    	console.log(arg.spec);
    	let featureFile = 'e2e/features/' + paEnv + '/' + (arg.spec === true ? '' : arg.spec + '.feature');
    	//cmd = cmd + ' --specs=' + featureFile;
    	opts = ' --specs=' + featureFile;
    } else {
    	//cmd = cmd + ' --specs=' + 'e2e/features/' + paEnv + '/*';
    	opts = ' --specs=' + 'e2e/features/' + paEnv + '/*';
    }
    
    var wbdrv = spawn(startWebDriver, ['start'], {
					        stdio: 'inherit',
					        shell: true
					    });
    setTimeout(() => {
    	var prtr = spawn(cmd, [opts], {
	        stdio: 'inherit',
	        shell: true
	    });  
    	
    	prtr.on('close', (code) => {
    		console.log(`E2E Test exited with code ${code}`);
    		
    	    let shutdown  = spawn(startWebDriver, ['shutdown'], {
				    	        stdio: 'inherit',
				    	        shell: true
				    	    });  

    	    shutdown.on('close', (code) => {
        		console.log(`Webdriver Shutdown exited with code ${code}`);
        		wbdrv.kill('SIGKILL');
        		shutdown.kill();
        	});

    	});
    	//return run_proc(cmd, cb);
    }, 20000);
});

gulp.task('e2e-tests', ['protractor-run'], () => {
    console.log("Running tests ...");
});
