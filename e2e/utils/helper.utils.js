var HelperUtils = (function () {
    function HelperUtils() {
    }
    
    // This function is used to reduce massive amounts of refactoring needed whenever adding, removing, or renaming page elements while using the no-element-knowledge rule on spec files.
    // It takes all elements and applies the desired function(usually from our protractor utils) to the page.
    
    // Example use:
    // NavMenuPage.prototype.initIsDisplayed = function () {
    //     this.isDisplayed = {};
    //     HelperUtils.applyFunctionToElements(this.isDisplayed, this.elements, ProtractorUtils.isElementDisplayed);
    // };
    //
    // expect(NavMenuPage.isDisplayed.anyElementYouWant()).toBeTruthy();
    HelperUtils.applyFunctionToElements = function (applyToObject, applyFromObject, functionToAdd) {
        for (var property in applyFromObject) {
            if (applyFromObject.hasOwnProperty(property)) {
                var e = applyFromObject[property];
                // If the element is a protractor element, we will use it to add the function. If not, iterate deeper through the object.
                if (e.hasOwnProperty("ptor_")) {
                    applyToObject[property] = functionToAdd(applyFromObject[property]);
                }
                else {
                    applyToObject[property] = {};
                    HelperUtils.applyFunctionToElements(applyToObject[property], applyFromObject[property], functionToAdd);
                }
            }
        }
    };
    return HelperUtils;
})();
module.exports = HelperUtils;