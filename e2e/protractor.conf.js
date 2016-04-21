var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
    // Set timeouts for scripts and page load
    allScriptsTimeout: 35000,
    getPageTimeout: 20000,

    specs: [
        '**/*.e2e.js'
    ],

    capabilities: {
        'browserName': 'chrome',
        // Allow multiple browsers to run at once to increase speed
        // Also forces tests to be written such that they don't interfere with each other!
        shardTestFiles: true,
        maxInstances: 3,
        loggingPrefs: {
            'driver': 'INFO',
            'browser': 'INFO'
        }
    },

    baseUrl: 'https://ga.me',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 75000 // Total amount of time a single test can run for
    },

    onPrepare: function () {
        // Allow changing viewport, rather than browser size. Many sites use size breakpoints, so this ensures every test runs vs a standardized breakpoint on any computer
        protractor.setViewportSize = function(width, height){
            const JS_GET_PADDING = "return {"
                + "w: window.outerWidth - window.innerWidth,"
                + "h: window.outerHeight - window.innerHeight };";

            browser.executeScript(JS_GET_PADDING).then(function(pad){
                browser.manage().window().setSize(width + pad.w, height + pad.h);
            });
        };

        protractor.setViewportSize(1024, 768);
        browser.manage().timeouts().pageLoadTimeout(60000);
        browser.manage().timeouts().implicitlyWait(30000); // Amount of time protractor searches for an element
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
    }
};