

module.exports = function(){
    this.applyFunctionToElement = function(applyToObject, applyFromObject, func) {
        for(var property in applyFromObject) {
            if(applyFromObject.hasOwnProperty(property)) {
                var e = applyFromObject[property];
                if(e.hasOwnProperty("ptor_")) {
                    applyToObject[property] = func(applyFromObject[property]);
                } else {
                    applyToObject[property] = {};
                    this.applyFunctionToElements(applyToObject[property], applyFromObject[property], func);
                };
            };
        };
    };
};