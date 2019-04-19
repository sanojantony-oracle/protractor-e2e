exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Test Framework Syntax
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['dist/testsuites/login/login-suite.spec.js'],

    SELENIUM_PROMISE_MANAGER: false,

    // Jasmine Options
    jasmineNodeOpts: {
        defaultTimeoutInterval:1440000
    },

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    suites: {
        loginsuite: 'dist/testsuites/login/**/*.spec.js'

    },

    showColors: true // Use colors in the command line report.

};