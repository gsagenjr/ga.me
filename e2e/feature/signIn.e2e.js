var SignInPage = require('../page/signIn.page.js');

describe('Sign In Modal', function() {
    beforeEach(function() {
        SignInPage.get();
    });
    
    it('Has all general elements displayed', function(){
        expect(SignInPage.isDisplayed.modal()).toBeTruthy('Sign In Modal not displayed');
        
        expect(SignInPage.isDisplayed.signInTab()).toBeTruthy('Sign In Tab not displayed');
        expect(SignInPage.isDisplayed.newUserTab()).toBeTruthy('New User Tab not displayed');
        expect(SignInPage.isDisplayed.forgotTab()).toBeTruthy('Forgot Tab not displayed');
        
        expect(SignInPage.isDisplayed.closeIcon()).toBeTruthy('Close Icon not displayed');
        expect(SignInPage.isDisplayed.logo()).toBeTruthy('Logo not displayed');
    });
    
    it('Has all element text', function(){
        expect(SignInPage.getText.signInTab()).toEqual('SIGN IN', 'Sign In Tab did not contain the expected text');
        expect(SignInPage.getText.newUserTab()).toEqual('NEW USER', 'New User Tab did not contain the expected text');
        expect(SignInPage.getText.forgotTab()).toEqual('FORGOT', 'Forgot Tab did not contain the expected text');
    });
    
    describe('Sign In Tab', function(){
        it('Has all elements displayed', function(){
            expect(SignInPage.isDisplayed.signIn.facebookSignIn()).toBeTruthy('Facebook Sign in not displayed');
            expect(SignInPage.isDisplayed.signIn.twitterSignIn()).toBeTruthy('Twitter Sign In not displayed');
            expect(SignInPage.isDisplayed.signIn.googleSignIn()).toBeTruthy('Google Sign In not displayed');
            
            expect(SignInPage.isDisplayed.signIn.usernameField()).toBeTruthy('Username Field not displayed');
            expect(SignInPage.isDisplayed.signIn.passwordField()).toBeTruthy('Password Field not displayed');
            
            expect(SignInPage.isDisplayed.signIn.keepMeSignedInCheckbox()).toBeTruthy('Keep Me Signed In Checkbox not displayed');
            
            expect(SignInPage.isDisplayed.signIn.signInButton()).toBeTruthy('Sign In Button not displayed');
            
            expect(SignInPage.isDisplayed.signIn.labels()).toBeTruthy('Sign In Label not displayed');
            expect(SignInPage.isDisplayed.signIn.labels(1)).toBeTruthy('Password Label not displayed');
            expect(SignInPage.isDisplayed.signIn.labels(2)).toBeTruthy('Keep Me Signed In Label not displayed');
        });
        
        it('Has all element text', function(){
            expect(SignInPage.getText.signIn.facebookSignIn()).toEqual('SIGN IN', 'Facebook Sign In did not contain the expected text');
            expect(SignInPage.getText.signIn.twitterSignIn()).toEqual('SIGN IN', 'Twitter Sign In did not contain the expected text');
            expect(SignInPage.getText.signIn.googleSignIn()).toEqual('SIGN IN', 'Google Sign In did not contain the expected text');
            
            expect(SignInPage.getText.signIn.signInButton()).toEqual('SIGN IN', 'Sign In Button did not contain the expected text');
            
            expect(SignInPage.getText.signIn.labels()).toEqual('SIGN IN', 'Sign In Label did not contain the expected text');
            expect(SignInPage.getText.signIn.labels(1)).toEqual('PASSWORD', 'Password Label did not contain the expected text');
            expect(SignInPage.getText.signIn.labels(2)).toEqual('KEEP ME SIGNED IN', 'Keep Me Signed In Label did not contain the expected text');
        });
        
        it('Has Keep Me Signed In Checkbox checked by default', function(){
            expect(SignInPage.getCheckboxStatus()).toEqual('""', "Checkbox was not checked");
        });
        
        it('Can uncheck Keep Me Signed In Checkbox', function(){
            SignInPage.click.signIn.keepMeSignedInCheckbox();
            expect(SignInPage.getCheckboxStatus()).toEqual('" "', "Checkbox was not checked");
        });
    })
})