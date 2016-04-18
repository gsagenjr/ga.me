var ProtractorUtils = (function () {
    function ProtractorUtils() {
    }
    ProtractorUtils.prototype.getVisibleProtractorElements = function (selector) {
        var allElementsOfSelector = element.all(by.css(selector.locator().value));
        return allElementsOfSelector.filter(function (elem) {
            return elem.isDisplayed().then(function (displayedElement) {
                return displayedElement;
            });
        });
    };
    ProtractorUtils.prototype.isElementDisplayed = function (element) {
        return function (index) {
            var i = index || 0;
            return element.get(i).isDisplayed().then(function (result) {
                return result;
            });
        };
    };
    ProtractorUtils.prototype.getElementText = function (element) {
        return function (index) {
            var i = index || 0;
            return element.get(i).getText().then(function (result) {
                return result;
            });
        };
    };
    ProtractorUtils.prototype.getInnerHtml = function (element) {
        return function (index) {
            var i = index || 0;
            return element.get(i).getInnerHtml().then(function (result) {
                return result;
            });
        };
    };
    ProtractorUtils.prototype.clickElement = function (element) {
        return function (index) {
            var i = index || 0;
            return browser.wait(protractor.ExpectedConditions.elementToBeClickable(element.get(i)), 5000, "Element not clickable").then(function () {
                // Moves mouse to pixel 5,5 on the element. Prevents some edge cases that cause click issues, har har har
                return browser.actions().mouseMove(element.get(i), { x: 5, y: 5 }).perform().then(function () {
                    return element.get(i).click();
                });
            });
        };
    };
    // Send keys to an element, either to the first with the default message, or to a custom index with a custom message
    // example
    // coolPage.sendKeys.messageInput();
    // ^ First index of the message input now has the text 'Test message'
    // coolPage.sendKeys.messageInput(2, "Cool Message");
    // ^ Third index of the message input now has the text 'Cool Message'
    ProtractorUtils.prototype.sendKeysToElement = function (element) {
        return function (index, message) {
            var i = index || 0;
            var m = message || 'Test message';
            return element.get(i).sendKeys(m).then(function () {
                return browser.sleep(250);
            });
        };
    };
    ProtractorUtils.prototype.isElementPresent = function (element) {
        return function (index) {
            var i = index || 0;
            return element.get(i).isPresent().then(function (result) {
                return result;
            });
        };
    };
    // Pass in an element and an attribute name. Without a name, 'value' will be used by default.
    ProtractorUtils.prototype.getElementAttribute = function (element, attributeName) {
        return function (index) {
            var i = index || 0;
            var attribute = attributeName || 'value';
            return element.get(i).getAttribute(attribute).then(function (result) {
                return result;
            });
        };
    };
    ProtractorUtils.prototype.getCssValue = function (element, cssValue) {
        return function (index) {
            var i = index || 0;
            return element.get(i).getCssValue(cssValue).then(function (result) {
                return result;
            });
        };
    };
    // Element to wait for written as css selector, error message to use, timeout that you would like to wait for element, standard timeout to set the webdriver back to
    // Keep in mind, if either timeouts are longer than JasmineNodeOpts.defaultTimeoutInterval, then the test will hit an ASYNC TIMEOUT FAILURE error
    ProtractorUtils.prototype.waitForElementToBePresent = function (selectorText, errorMessage, temporaryTimeout, standardBrowserTimeout) {
        var tempTimeout = temporaryTimeout || 10000;
        var standardTimeout = standardBrowserTimeout || 30000;
        var error = errorMessage || "Element was not present in time";
        browser.manage().timeouts().implicitlyWait(tempTimeout);
        return browser.wait(function () {
            return element(by.css(selectorText)).isPresent();
        }, 1, error).then(function () {
            browser.manage().timeouts().implicitlyWait(standardTimeout);
            return browser.sleep(150);
        });
    };
    // Please note that logging the errors will also clear the console log out - the logs from before this was run will be logged, but deleted from the browser console
    ProtractorUtils.prototype.logConsoleErrors = function () {
        return browser.manage().logs().get('browser').then(function (browserLog) {
            return console.log('log: ' + JSON.stringify(browserLog, null, 4));
        });
    };
    // Clear the text from an input field
    ProtractorUtils.prototype.clearInput = function (element) {
        return function (index) {
            var i = index || 0;
            return element.get(i).clear().then(function (result) {
                return result;
            });
        };
    };
    return ProtractorUtils;
})();
module.exports = new ProtractorUtils;