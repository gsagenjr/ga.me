var navMenuPage = require('../page/navMenu.page.js');

describe('Navigation Menus', function() {
    beforeEach(function() {
        navMenuPage.get();
    });
    
    it('works', function() {
        expect(navMenuPage.isDisplayed.topNav.homeIcon()).toBeTruthy('Home Icon not displayed');
    })
})