var navMenuPage = require('../page/navMenu.page.js');

describe('Navigation Menus', function() {
    beforeEach(function() {
        navMenuPage.get();
    });
    
    describe('The top nav menu', function() {
        it('has all elements displayed', function() {
            expect(navMenuPage.isDisplayed.topNav.homeIcon()).toBeTruthy('Home Icon not displayed');
            expect(navMenuPage.isDisplayed.topNav.drawerIcon()).toBeTruthy('Drawer Icon not displayed');

            expect(navMenuPage.isDisplayed.topNav.signInButton()).toBeTruthy('Sign In Button not displayed');

            expect(navMenuPage.isDisplayed.topNav.facebookIcon()).toBeTruthy('Facebook Icon not displayed');
            expect(navMenuPage.isDisplayed.topNav.googlePlusIcon()).toBeTruthy('Google Plus Icon not displayed');
            expect(navMenuPage.isDisplayed.topNav.twitterIcon()).toBeTruthy('Twitter Icon not displayed');

            expect(navMenuPage.isDisplayed.topNav.signUpButton()).toBeTruthy('Sign Up Button not displayed');
        });
        
        it('has all expected text', function(){
            expect(navMenuPage.getText.topNav.signInButton()).toEqual('SIGN IN WITH USERNAME', 'Sign In Button did not contain expected text');
            expect(navMenuPage.getText.topNav.signUpButton()).toEqual('SIGN UP', 'Sign Up Button did not contain expected text');
        });
    })
    
    describe('The bottom nav/footer menu', function(){
        it('has all elements displayed', function() {
            expect(navMenuPage.isDisplayed.bottomNav.developers()).toBeTruthy('Sign Up Button not displayed');
            expect(navMenuPage.isDisplayed.bottomNav.news()).toBeTruthy('Sign Up Button not displayed');
            expect(navMenuPage.isDisplayed.bottomNav.careers()).toBeTruthy('Sign Up Button not displayed');
            expect(navMenuPage.isDisplayed.bottomNav.about()).toBeTruthy('Sign Up Button not displayed');
            expect(navMenuPage.isDisplayed.bottomNav.contact()).toBeTruthy('Sign Up Button not displayed');
            expect(navMenuPage.isDisplayed.bottomNav.termsAndPrivacy()).toBeTruthy('Sign Up Button not displayed');
            expect(navMenuPage.isDisplayed.bottomNav.copyright()).toBeTruthy('Sign Up Button not displayed');
            expect(navMenuPage.isDisplayed.bottomNav.twitter()).toBeTruthy('Sign Up Button not displayed');
            expect(navMenuPage.isDisplayed.bottomNav.facebook()).toBeTruthy('Sign Up Button not displayed');
        });
        
        it('has all expected text', function(){
            expect(navMenuPage.getText.bottomNav.developers()).toEqual('Developers', 'Bottom Nav Developers did not contain expected text');
            expect(navMenuPage.getText.bottomNav.news()).toEqual('News', 'Bottom Nav News did not contain expected text');
            expect(navMenuPage.getText.bottomNav.careers()).toEqual('Careers', 'Bottom Nav Careers did not contain expected text');
            expect(navMenuPage.getText.bottomNav.about()).toEqual('About', 'Bottom Nav About did not contain expected text');
            expect(navMenuPage.getText.bottomNav.contact()).toEqual('Contact', 'Bottom Nav Contact did not contain expected text');
            expect(navMenuPage.getText.bottomNav.termsAndPrivacy()).toEqual('Terms & Privacy', 'Bottom Nav Terms and Privacy did not contain expected text');
            expect(navMenuPage.getText.bottomNav.copyright()).toEqual('© 2014 Turbulenz', 'Bottom Nav Copyright did not contain expected text');
        });
    })
    
    describe('The Drawer/Left nav menu', function(){
        beforeEach(function(){
            navMenuPage.click.topNav.drawerIcon();
        })
        
        it('can open the drawer', function(){
            expect(navMenuPage.isDisplayed.drawer.closeIcon()).toBeTruthy('Drawer Close Icon not displayed');
        });
        
        it('has all drawer elements displayed', function(){
            expect(navMenuPage.isDisplayed.drawer.closeIcon()).toBeTruthy('Drawer Close Icon not displayed');
            expect(navMenuPage.isDisplayed.drawer.title()).toBeTruthy('Drawer Title not displayed');

            expect(navMenuPage.isDisplayed.drawer.dashboardIcon()).toBeTruthy('Dashboard Icon not displayed');
            expect(navMenuPage.isDisplayed.drawer.dashboard()).toBeTruthy('Dashboard link not displayed');
            expect(navMenuPage.isDisplayed.drawer.gameIcon()).toBeTruthy('Game Icon not displayed');
            expect(navMenuPage.isDisplayed.drawer.game()).toBeTruthy('Game link not displayed');

            expect(navMenuPage.isDisplayed.drawer.facebookIcon()).toBeTruthy('Facebook Icon not displayed');
            expect(navMenuPage.isDisplayed.drawer.signInWithFacebook()).toBeTruthy('Sign In With Facebook link not displayed');
            expect(navMenuPage.isDisplayed.drawer.googlePlusIcon()).toBeTruthy('Google Plus Icon not displayed');
            expect(navMenuPage.isDisplayed.drawer.signInWithGooglePlus()).toBeTruthy('Sign In With Google Plus link not displayed');
            expect(navMenuPage.isDisplayed.drawer.twitterIcon()).toBeTruthy('Twitter Icon not displayed');
            expect(navMenuPage.isDisplayed.drawer.signInWithTwitter()).toBeTruthy('Sign In With Twitter link not displayed');

            expect(navMenuPage.isDisplayed.drawer.userIcon()).toBeTruthy('User Icon not displayed');
            expect(navMenuPage.isDisplayed.drawer.signInWithUsername()).toBeTruthy('Sign In With Username link not displayed');
            expect(navMenuPage.isDisplayed.drawer.createNewAccountIcon()).toBeTruthy('Create Account Icon not displayed');
            expect(navMenuPage.isDisplayed.drawer.createNewAccount()).toBeTruthy('Creat New Account Link not displayed');
        });
    });
    
})