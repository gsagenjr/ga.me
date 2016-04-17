var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 35000,
    getPageTimeout: 20000,

    specs: [
        '**/*.e2e.js'
    ],

    capabilities: {
        'browserName': 'chrome',
        shardTestFiles: true,
        maxInstances: 5,
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
        // Allow changing viewport, rather than browser size
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