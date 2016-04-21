var SignInPage = require('../page/signIn.page.js');
var HomePage = require('../page/home.page.js');
var ProtractorUtils = require('../utils/protractor.utils.js');

describe('Guest Access', function() {
    beforeEach(function() {
        SignInPage.get();
        SignInPage.click.newUserTab();
    });
    
    it('Can enter a guest name', function(){
        SignInPage.sendKeys.newUser.usernameField(0, SignInPage.getFakeGuid()); // Use a basic fake guid as a username
        SignInPage.waitUntilThinkingIsFinished();
        expect(SignInPage.isDisplayed.newUser.thinking()).toBeFalsy("Thinking loading indicator was displayed when it should not have been");
        expect(SignInPage.isDisplayed.newUser.letsPlayButton()).toBeTruthy('Lets Play button not displayed');
    });
    
    it('Shows when username is taken', function(){
        SignInPage.sendKeys.newUser.usernameField(0, 'test'); 
        SignInPage.waitUntilThinkingIsFinished();
        
        expect(SignInPage.isDisplayed.newUser.usernameTaken()).toBeTruthy('Username Taken was not displayed');
    })
    
    it('Shows suggested usernames if username is taken and is 5 or more characters', function(){
        SignInPage.sendKeys.newUser.usernameField(0, 'tester'); 
        SignInPage.waitUntilThinkingIsFinished();
        
        expect(SignInPage.isDisplayed.newUser.usernameTaken()).toBeTruthy('Username Taken was not displayed');
        expect(SignInPage.isDisplayed.newUser.suggestedUsername()).toBeTruthy('Suggested Username was not displayed');
        
        expect(SignInPage.getText.newUser.usernameTaken()).toContain('Someone beat you to that username!');
        expect(SignInPage.getText.newUser.suggestedUsername()).toContain('tester');
    });
    
    it('Can sign in as a guest', function(){
        SignInPage.sendKeys.newUser.usernameField(0, SignInPage.getFakeGuid()); // Use a basic fake guid as a username
        SignInPage.waitUntilThinkingIsFinished();
        SignInPage.click.newUser.letsPlayButton();
        
        // Facebook prompt has $timeout which we must ignore
        ProtractorUtils.ignoreSync().then(function(){
            expect(HomePage.isDisplayed.completeAccount()).toBeTruthy('Complete Account prompt was not displayed');
            expect(HomePage.getText.completeAccount()).toContain('Please complete your account', 'Complete Account prompt did not contain expected text');
            
            expect(HomePage.isDisplayed.games()).toBeTruthy('Games link was not displayed');
            expect(HomePage.isDisplayed.friends()).toBeTruthy('Friends link was not displayed');
        }); 
        
        ProtractorUtils.unIgnoreSync();
    });
})