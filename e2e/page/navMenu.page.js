var ProtractorUtils = require('../utils/protractor.utils.js');
var HelperUtils = require('../utils/helper.utils.js');

var NavMenuPage = (function () {
    function NavMenuPage() {
        this.initElements();
        this.initIsDisplayed();
        this.initGetText();
        this.initClick();
    }
    
    NavMenuPage.prototype.get = function () {
        return browser.get('/');
    };
    
    NavMenuPage.prototype.initElements = function () {
        this.elements = {
            topNav: {
                homeIcon: $$('.nav-bar .nav-home-icon'),
                drawerIcon: $$('.nav-bar .nav-menu-icon'),
                    
                signInButton : $$('.nav-bar .nav-signin'),
                
                facebookIcon : $$('.nav-bar .icon-tz-button-facebook'),
                googlePlusIcon : $$('.nav-bar .icon-tz-button-google'),
                twitterIcon : $$('.nav-bar .icon-tz-button-twitter'),
                
                signUpButton : $$('.nav-bar .nav-signup'),
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
                signInWithTwitter : $$('[ng-click="loginTwitter(); $event.stopPropagation()"]'),
                
                userIcon : $$('.icon-tz-glyph-signin'),
                signInWithUsername : $$('[ng-click="login(); $event.stopPropagation()"]'),
                createNewAccountIcon: $$('.icon-tz-glyph-createaccount'),
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
    
    NavMenuPage.prototype.initGetText = function () {
        this.getText = {};
        HelperUtils.applyFunctionToElements(this.getText, this.elements, ProtractorUtils.getElementText);
    };
    
    NavMenuPage.prototype.initClick = function () {
        this.click = {};
        HelperUtils.applyFunctionToElements(this.click, this.elements, ProtractorUtils.clickElement);
    };
    
    return NavMenuPage;
})();

module.exports = new NavMenuPage;