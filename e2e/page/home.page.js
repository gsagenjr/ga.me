var ProtractorUtils = require('../utils/protractor.utils.js');
var HelperUtils = require('../utils/helper.utils.js');

var HomePage = (function () {
    function HomePage() {
        this.initElements();
        this.initIsDisplayed();
        this.initGetText();
    }
    
    // Note: Only takes you to the 'real' homepage when you are logged in.
    HomePage.prototype.get = function () {
        return browser.get('/');
    };
    
    HomePage.prototype.initElements = function () {
        this.elements = {
            completeAccount: $$('.toast-text-container'),
            games: $$('[ng-click="toggleDrawer(\'games\')"]'),
            friends: $$('[ng-click="toggleDrawer(\'friends\')"]')
        };
    };
    
    HomePage.prototype.initIsDisplayed = function () {
        this.isDisplayed = {};
        HelperUtils.applyFunctionToElements(this.isDisplayed, this.elements, ProtractorUtils.isElementDisplayed);
    };
    
    HomePage.prototype.initGetText = function () {
        this.getText = {};
        HelperUtils.applyFunctionToElements(this.getText, this.elements, ProtractorUtils.getElementText);
    };
    
    return HomePage;
})();

module.exports = new HomePage;