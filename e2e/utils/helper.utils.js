var HelperUtils = (function () {
    function HelperUtils() {
    }
    // Example use:
    //  private initClick() {
    //      this.click = {
    //          vehiclesOfInterestTab: protractorUtils.clickElement(this.elements.vehiclesOfInterestTab)
    //      };
    //  }
    // vehiclesOfInterestPage.click.vehicleOfInterestTab();
    HelperUtils.applyFunctionToElements = function (applyToObject, applyFromObject, func) {
        for (var property in applyFromObject) {
            if (applyFromObject.hasOwnProperty(property)) {
                var e = applyFromObject[property];
                if (e.hasOwnProperty("ptor_")) {
                    applyToObject[property] = func(applyFromObject[property]);
                }
                else {
                    applyToObject[property] = {};
                    HelperUtils.applyFunctionToElements(applyToObject[property], applyFromObject[property], func);
                }
            }
        }
    };
    return HelperUtils;
})();
module.exports = HelperUtils;