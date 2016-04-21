var ProtractorUtils = (function () {
    function ProtractorUtils() {
    }

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

    
    // Handle angular sync for non-angular sites, such as facebook
    ProtractorUtils.prototype.ignoreSync = function(){
        var flow = protractor.promise.controlFlow();
        return flow.execute(function () {
            browser.ignoreSynchronization = true;
        });
    };
    ProtractorUtils.prototype.unIgnoreSync = function(){
        var flow = protractor.promise.controlFlow();
        return flow.execute(function () {
            browser.ignoreSynchronization = false;
        });
    };
    
    // Handle switching and closing windows
    ProtractorUtils.prototype.switchToWindow = function(index){
        var i = index || 0;
        return browser.getAllWindowHandles().then(function(handles){
            return browser.switchTo().window(handles[i]);
        });
    };
    ProtractorUtils.prototype.closeWindow = function(windowToClose){
        // Use self to call own function, as 'this'has a different scope further down
        var self = this;
        
        var closing = windowToClose || 1; // Close the second window, usually popup, or whatever handle is passed in
        return this.switchToWindow(closing).then(function(){
            browser.close();
            browser.sleep(3000);
            self.switchToWindow(0);
        });
    }
    
    
    return ProtractorUtils;
})();
module.exports = new ProtractorUtils;