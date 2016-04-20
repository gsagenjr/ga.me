var NavMenuPage = require('../page/navMenu.page.js');
var SignInPage = require('../page/signIn.page.js');
var ProtractorUtils = require('../utils/protractor.utils.js');

describe('Navigation Menus', function() {
    beforeEach(function() {
        NavMenuPage.get();
    });
    
    describe('The top nav menu', function() {
        it('has all elements displayed', function() {
            expect(NavMenuPage.isDisplayed.topNav.homeIcon()).toBeTruthy('Home Icon not displayed');
            expect(NavMenuPage.isDisplayed.topNav.drawerIcon()).toBeTruthy('Drawer Icon not displayed');

            expect(NavMenuPage.isDisplayed.topNav.signInButton()).toBeTruthy('Sign In Button not displayed');

            expect(NavMenuPage.isDisplayed.topNav.facebookIcon()).toBeTruthy('Facebook Icon not displayed');
            expect(NavMenuPage.isDisplayed.topNav.googlePlusIcon()).toBeTruthy('Google Plus Icon not displayed');
            expect(NavMenuPage.isDisplayed.topNav.twitterIcon()).toBeTruthy('Twitter Icon not displayed');

            expect(NavMenuPage.isDisplayed.topNav.signUpButton()).toBeTruthy('Sign Up Button not displayed');
        });
        
        it('has all expected text', function(){
            expect(NavMenuPage.getText.topNav.signInButton()).toEqual('SIGN IN', 'Sign In Button did not contain expected text');
            expect(NavMenuPage.getText.topNav.signUpButton()).toEqual('SIGN UP', 'Sign Up Button did not contain expected text');
        });
        
        it('can open the sign-in menu', function(){
            NavMenuPage.click.topNav.signInButton();
            expect(SignInPage.isDisplayed.modal()).toBeTruthy('Sign In modal not displayed');
            expect(SignInPage.isDisplayed.signIn.usernameField()).toBeTruthy('Username field not displayed');
        });
        
        it('can open facebook login', function(){
            NavMenuPage.click.topNav.facebookIcon();
            
            // Facebook is non-angular, so we ignore angular sync and defer to browser.driver
            ProtractorUtils.ignoreSync();
            ProtractorUtils.switchToWindow(1).then(function(){
                browser.driver.getCurrentUrl().then(function(currentUrl){
                    expect(currentUrl).toContain('facebook.com/login', 'Url did not match expected');
                });
            })
            // We must re-enable sync before ending the test, or if used often, enable sync in an afterEach
            ProtractorUtils.unIgnoreSync();
            // Excess windows are closed at the end of the describe, but we have more tests after and want this one closed and the handle switched now
            ProtractorUtils.closeWindow();
        });
        
        it('can open google login', function(){
            NavMenuPage.click.topNav.googlePlusIcon();
            
            // Google is non-angular, so we ignore angular sync and defer to browser.driver
            ProtractorUtils.ignoreSync();
            browser.driver.getCurrentUrl().then(function(currentUrl){
                expect(currentUrl).toContain('accounts.google.com', 'Url did not match expected');
            });
            ProtractorUtils.unIgnoreSync();
        });
        
        it('can open twitter login', function(){
             NavMenuPage.click.topNav.twitterIcon();
            
            // Twitter is non-angular, so we ignore angular sync and defer to browser.driver
            ProtractorUtils.ignoreSync();
            browser.driver.getCurrentUrl().then(function(currentUrl){
                expect(currentUrl).toContain('api.twitter.com', 'Url did not match expected');
            });
            ProtractorUtils.unIgnoreSync();
        });
        
        it('can open sign-up menu', function(){
            NavMenuPage.click.topNav.signUpButton();
            expect(SignInPage.isDisplayed.newUser.usernameField()).toBeTruthy('Username field not displayed');
        });
    })
    
    describe('The bottom nav/footer menu', function(){
        it('has all elements displayed', function() {
            expect(NavMenuPage.isDisplayed.bottomNav.developers()).toBeTruthy('Sign Up Button not displayed');
            expect(NavMenuPage.isDisplayed.bottomNav.news()).toBeTruthy('Sign Up Button not displayed');
            expect(NavMenuPage.isDisplayed.bottomNav.careers()).toBeTruthy('Sign Up Button not displayed');
            expect(NavMenuPage.isDisplayed.bottomNav.about()).toBeTruthy('Sign Up Button not displayed');
            expect(NavMenuPage.isDisplayed.bottomNav.contact()).toBeTruthy('Sign Up Button not displayed');
            expect(NavMenuPage.isDisplayed.bottomNav.termsAndPrivacy()).toBeTruthy('Sign Up Button not displayed');
            expect(NavMenuPage.isDisplayed.bottomNav.copyright()).toBeTruthy('Sign Up Button not displayed');
            expect(NavMenuPage.isDisplayed.bottomNav.twitter()).toBeTruthy('Sign Up Button not displayed');
            expect(NavMenuPage.isDisplayed.bottomNav.facebook()).toBeTruthy('Sign Up Button not displayed');
        });
        
        it('has all expected text', function(){
            expect(NavMenuPage.getText.bottomNav.developers()).toEqual('Developers', 'Bottom Nav Developers did not contain expected text');
            expect(NavMenuPage.getText.bottomNav.news()).toEqual('News', 'Bottom Nav News did not contain expected text');
            expect(NavMenuPage.getText.bottomNav.careers()).toEqual('Careers', 'Bottom Nav Careers did not contain expected text');
            expect(NavMenuPage.getText.bottomNav.about()).toEqual('About', 'Bottom Nav About did not contain expected text');
            expect(NavMenuPage.getText.bottomNav.contact()).toEqual('Contact', 'Bottom Nav Contact did not contain expected text');
            expect(NavMenuPage.getText.bottomNav.termsAndPrivacy()).toEqual('Terms & Privacy', 'Bottom Nav Terms and Privacy did not contain expected text');
            expect(NavMenuPage.getText.bottomNav.copyright()).toEqual('© 2014 Turbulenz', 'Bottom Nav Copyright did not contain expected text');
        });
    })
    
    describe('The Drawer/Left nav menu', function(){
        beforeEach(function(){
            NavMenuPage.click.topNav.drawerIcon();
        })
        
        it('can open the drawer', function(){
            expect(NavMenuPage.isDisplayed.drawer.closeIcon()).toBeTruthy('Drawer Close Icon not displayed');
        });
        
        it('has all drawer elements displayed', function(){
            expect(NavMenuPage.isDisplayed.drawer.closeIcon()).toBeTruthy('Drawer Close Icon not displayed');
            expect(NavMenuPage.isDisplayed.drawer.title()).toBeTruthy('Drawer Title not displayed');

            expect(NavMenuPage.isDisplayed.drawer.dashboardIcon()).toBeTruthy('Dashboard Icon not displayed');
            expect(NavMenuPage.isDisplayed.drawer.dashboard()).toBeTruthy('Dashboard link not displayed');
            expect(NavMenuPage.isDisplayed.drawer.gameIcon()).toBeTruthy('Game Icon not displayed');
            expect(NavMenuPage.isDisplayed.drawer.game()).toBeTruthy('Game link not displayed');

            expect(NavMenuPage.isDisplayed.drawer.facebookIcon()).toBeTruthy('Facebook Icon not displayed');
            expect(NavMenuPage.isDisplayed.drawer.signInWithFacebook()).toBeTruthy('Sign In With Facebook link not displayed');
            expect(NavMenuPage.isDisplayed.drawer.googlePlusIcon()).toBeTruthy('Google Plus Icon not displayed');
            expect(NavMenuPage.isDisplayed.drawer.signInWithGooglePlus()).toBeTruthy('Sign In With Google Plus link not displayed');
            expect(NavMenuPage.isDisplayed.drawer.twitterIcon()).toBeTruthy('Twitter Icon not displayed');
            expect(NavMenuPage.isDisplayed.drawer.signInWithTwitter()).toBeTruthy('Sign In With Twitter link not displayed');

            expect(NavMenuPage.isDisplayed.drawer.userIcon()).toBeTruthy('User Icon not displayed');
            expect(NavMenuPage.isDisplayed.drawer.signInWithUsername()).toBeTruthy('Sign In With Username link not displayed');
            expect(NavMenuPage.isDisplayed.drawer.createNewAccountIcon()).toBeTruthy('Create Account Icon not displayed');
            expect(NavMenuPage.isDisplayed.drawer.createNewAccount()).toBeTruthy('Creat New Account Link not displayed');
        });
    });
    
})