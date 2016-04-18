var ProtractorUtils = require('../utils/protractor.utils.js');
var HelperUtils = require('../utils/helper.utils.js');

var NavMenuPage = (function () {
    function NavMenuPage() {
        this.initElements();
        this.initIsDisplayed();
        this.initSendKeys();
        this.initGetText();
        this.initClick();
        this.initGetAttribute();
    }
    
    NavMenuPage.prototype.get = function () {
        return browser.get('/');
    };
    
    NavMenuPage.prototype.initElements = function () {
        this.elements = {
            topNav: {
                homeIcon: $$('[ng-click="state.fn.goToIndex(); $event.stopPropagation()"]'),
                drawerIcon: $$('[ng-click="toggleDrawer(\'\')"]'),
                    
                signInButton : $$('[ng-click="login(); $event.stopPropagation()"]'),
                
                facebookIcon : $$('[ng-click="loginFB();"]'),
                googlePlusIcon : $$('[ng-click="loginGoogle();"]'),
                twitterIcon : $$('[ng-click="loginTwitter();"]'),
                
                signUpButton : $$('[ng-click="signup(); $event.stopPropagation()"]'),
            },
            
            drawer: {
                closeIcon : $$('[ng-click="state.fn.closeDrawer(); $event.stopPropagation()"]'),
                title : $$('.drawer-title'),
                            
                dashboardIcon : $$('.icon-tz-glyph-dashboard'),
                dashboard : $$('[ng-click="state.fn.goToIndex(); $event.stopPropagation()"]'),
                gameIcon : $$('.icon-tz-glyph-game'),
                game : $$('[ng-click="state.drawer.mode = \'games\'; $event.stopPropagation()"]'),
                
                facebookIcon : $$('.icon-tz-button-facebook'),
                signInWithFacebook : $$('[ng-click="loginFB(); $event.stopPropagation()"'),
                googlePlusIcon : $$('.icon-tz-button-google'),
                signInWithGooglePlus : $$('[ng-click="loginGoogle(); $event.stopPropagation()"]'),
                twitterIcon : $$('.icon-tz-button-twitter'),
                signInWithTwitter : $$('ng-click="loginTwitter(); $event.stopPropagation()"'),
                
                userIcon : $$('.icon-tz-glyph-signin'),
                signInWithUsername : $$('[ng-click="login(); $event.stopPropagation()"]'),
                createIcon: $$('.icon-tz-glyph-createaccount'),
                createNewAccount: $$('[ng-click="signUp(); $event.stopPropagation()"]')
            },
            
            bottomNav: {
                developers : $$('[href="http://biz.turbulenz.com/developers"]'),
                news : $$('[href="http://news.turbulenz.com/"]'),
                careers : $$('[href="http://biz.turbulenz.com/careers"]'),
                about : $$('[href="http://biz.turbulenz.com"]'),
                contact : $$('[href="http://biz.turbulenz.com/contact"]'),
                termsAndPrivacy : $$('[ng-click="showTerms();"]'),
                copyright : $$('[ng-class="\'game-grid-footer-\' + (gameSlugs | filter:gamesFilter).length"] span'),
                twitter : $$('[href="http://twitter.com/turbulenz"]'),
                facebook : $$('[href="http://facebook.com/turbulenz"]')
            }              
        };
    };
    
    NavMenuPage.prototype.initIsDisplayed = function () {
        this.isDisplayed = {};
        HelperUtils.applyFunctionToElements(this.isDisplayed, this.elements, ProtractorUtils.isElementDisplayed);
    };
    
    NavMenuPage.prototype.initSendKeys = function () {
        this.sendKeys = {};
        HelperUtils.applyFunctionToElements(this.sendKeys, this.elements, ProtractorUtils.sendKeysToElement);
    };
    
    NavMenuPage.prototype.initGetText = function () {
        this.getText = {};
        HelperUtils.applyFunctionToElements(this.getText, this.elements, ProtractorUtils.getElementText);
    };
    
    NavMenuPage.prototype.initClick = function () {
        this.click = {};
        HelperUtils.applyFunctionToElements(this.click, this.elements, ProtractorUtils.clickElement);
    };
    
    NavMenuPage.prototype.initGetAttribute = function () {
        this.getAttribute = {};
        HelperUtils.applyFunctionToElements(this.getAttribute, this.elements, ProtractorUtils.getElementAttribute);
    };
    
    return NavMenuPage;
})();

module.exports = new NavMenuPage;