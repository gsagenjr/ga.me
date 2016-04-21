var ProtractorUtils = require('../utils/protractor.utils.js');
var HelperUtils = require('../utils/helper.utils.js');

var SignInPage = (function () {
    function SignInPage() {
        this.initElements();
        this.initIsDisplayed();
        this.initSendKeys();
        this.initGetText();
        this.initClick();
        this.initGetCheckboxStatus();
        this.initGetFakeGuid();
        this.initWaitUntilThinkingIsFinished();
        this.initWaitUntilSignInIsDisplayed();
    };
    
    SignInPage.prototype.get = function () {
        browser.get('/');
        this.click.signInButton();
        return this.waitUntilSignInIsDisplayed();
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
                usernameField: $$('.username-input input'),
                letsPlayButton: $$('.modal [ng-click="signUp(); $event.stopPropagation()"]'),
                thinking: $$('[ng-show="thinking"]'),
                
                usernameTaken: $$('[ng-show="usernameTaken"]'),
                suggestedUsername: $$('.login-radio')
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

    SignInPage.prototype.initGetCheckboxStatus = function () {
        this.getCheckboxStatus = function(){
            return browser.executeScript("return window.getComputedStyle(document.querySelector('label.checkbox'), ':before').content");
        };
    };
    
    SignInPage.prototype.initGetFakeGuid = function(){
        this.getFakeGuid = function(){
            return (((1+Math.random())*0x10000000)|0).toString(16).substring(1); 
        };
    };
    
    SignInPage.prototype.initWaitUntilThinkingIsFinished = function(){
        var self = this;
        this.waitUntilThinkingIsFinished = function(){
            browser.wait(protractor.until.elementIsNotVisible($('[ng-show="thinking"]')), 10000, "Thinking loading indicator took too long");
        };
    };
    
    SignInPage.prototype.initWaitUntilSignInIsDisplayed = function(){
        var self = this;
        this.waitUntilSignInIsDisplayed = function(){
            browser.wait(protractor.until.elementIsVisible($('.login-modal .modal')), 10000, "Sign in modal took too long");
        };
    }
    
    return SignInPage;
})();

module.exports = new SignInPage;