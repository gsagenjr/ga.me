var ProtractorUtils = require('../utils/protractor.utils.js');
var HelperUtils = require('../utils/helper.utils.js');

var SignInPage = (function () {
    function SignInPage() {
        this.initElements();
        this.initIsDisplayed();
        this.initSendKeys();
        this.initGetText();
        this.initClick();
        this.initHasClass();
    }
    
    SignInPage.prototype.get = function () {
        browser.get('/');
        return this.click.signInButton();
    };
    
    SignInPage.prototype.initElements = function () {
        this.elements = {
            signInButton : $$('.nav-bar .nav-signin'),
            
            modal: $$('.login-modal .modal'),
            signInTab: $$('.login-modal [ng-click="setTab($event, \'signIn\')"]'),
            newUserTab: $$('.login-modal [ng-click="setTab($event, \'signUp\')"]'),
            forgotTab: $$('.login-modal [ng-click="setTab($event, \'forgot\')"]'),
            
            closeIcon: $$('.modal-header-icon'),
            logo: $$('.login-logo'),
            
            signIn: {
                facebookSignIn: $$('[ng-click="signInFb(); $event.stopPropagation()"]'),
                twitterSignIn: $$('[ng-click="signInTw(); $event.stopPropagation()"]'),
                googleSignIn: $$('[ng-click="signInGg(); $event.stopPropagation()"]'),
                
                usernameField: $$('.login-modal [ng-model="username"]'),
                passwordField: $$('[type="password"]'),
                
                keepMeSignedInCheckbox: $$('.modal .checkbox'),
                
                labels: $$('.modal label'),
                
                signInButton: $$('[ng-click="signIn(); $event.stopPropagation()"]'),
            },
            
            newUser: {
                usernameField: $$('.username-input input')
                
            },
            
            forgot: {
                
            }
        };
    };
    
    SignInPage.prototype.initIsDisplayed = function () {
        this.isDisplayed = {};
        HelperUtils.applyFunctionToElements(this.isDisplayed, this.elements, ProtractorUtils.isElementDisplayed);
    };
    
    SignInPage.prototype.initSendKeys = function () {
        this.sendKeys = {};
        HelperUtils.applyFunctionToElements(this.sendKeys, this.elements, ProtractorUtils.sendKeysToElement);
    };
    
    SignInPage.prototype.initGetText = function () {
        this.getText = {};
        HelperUtils.applyFunctionToElements(this.getText, this.elements, ProtractorUtils.getElementText);
    };
    
    SignInPage.prototype.initClick = function () {
        this.click = {};
        HelperUtils.applyFunctionToElements(this.click, this.elements, ProtractorUtils.clickElement);
    };
    
    SignInPage.prototype.initHasClass = function () {
        this.hasClass = {};
        HelperUtils.applyFunctionToElements(this.hasClass, this.elements, ProtractorUtils.elementHasClass);
    };
    
    return SignInPage;
})();

module.exports = new SignInPage;