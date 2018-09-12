(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class XClass {
        constructor(someParam) { }
        myMethod(opts) {
            if (typeof opts.height !== 'undefined' &&
                typeof opts.width !== 'undefined') {
                return opts.height * opts.height;
            }
            else {
                return 0;
            }
        }
    }
    exports.default = XClass;
});
