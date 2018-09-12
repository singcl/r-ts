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
    // 类和函数声明可以直接被标记为默认导出。 标记为默认导出的类和函数的名字是可以省略的。
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
        }
    }
    ZipCodeValidator.numberRegexp = /^[0-9]+$/;
    exports.default = ZipCodeValidator;
});
