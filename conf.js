exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Test Framework Syntax
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: [
        'dist/testsuites/login/login-suite.spec.js',
        'dist/testsuites/dataplan/data-plan-suite.spec.js'
    ],

    SELENIUM_PROMISE_MANAGER: false, //Disable Selenium promise manager so we can use async/await

    // Jasmine Options
    jasmineNodeOpts: {
        defaultTimeoutInterval:40000
    },

    /*capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },*/

    //To support headless, use args: [ "--headless", "--disable-gpu", "--window-size=800,600" ] with chrome
/*    multiCapabilities: [{
        'browserName': 'firefox',
        'moz:firefoxOptions': {
            'args': ['--safe-mode'] //"--headless" to use headless caps with FF
        }

    }, {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    }],*/

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    suites: {
        loginsuite: 'dist/testsuites/login/**/*.spec.js'

    },

    showColors: true // Use colors in the command line report.

};