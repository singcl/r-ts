(function(factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        let v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(['require', 'exports'], factory);
    }
})(function(require, exports) {
    class XClass {
        someProperty;
        constructor(someParam) {}
        myMethod(opts) {
            return 3;
        }
    }

    return XClass;
});
