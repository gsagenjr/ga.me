var navMenuPage = require('../page/navMenu.page.js');

describe('Navigation Menus', function() {
    beforeEach(function() {
        navMenuPage.get();
    });
    
    it('works', function() {
        expect(navMenuPage.isDisplayed.topNav.homeIcon()).toBeTruthy('Home Icon not displayed');
    });
    
    it('Can open Dashboard', function(){
        navMenuPage.click.topNav.drawerIcon();
        browser.sleep(1000);
        expect(navMenuPage.isDisplayed.drawer.closeIcon()).toBeTruthy('Drawer Close Icon not displayed');
    });
})