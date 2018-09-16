// 我们把Validation命名空间分割成多个文件。
// 因为不同文件之间存在依赖关系，所以我们加入了引用标签来告诉编译器文件之间的关联。
/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator2 = /** @class */ (function () {
        function LettersOnlyValidator2() {
        }
        LettersOnlyValidator2.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator2;
    }());
    Validation.LettersOnlyValidator2 = LettersOnlyValidator2;
})(Validation || (Validation = {}));
// 我们把Validation命名空间分割成多个文件。
// 因为不同文件之间存在依赖关系，所以我们加入了引用标签来告诉编译器文件之间的关联。
/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator2 = /** @class */ (function () {
        function ZipCodeValidator2() {
        }
        ZipCodeValidator2.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator2;
    }());
    Validation.ZipCodeValidator2 = ZipCodeValidator2;
})(Validation || (Validation = {}));
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
var strings5 = ['Hello', '98052', '101'];
// Validators to use
var validators5 = {};
validators5['ZIP code'] = new Validation.ZipCodeValidator2();
validators5['Letters only'] = new Validation.LettersOnlyValidator2();
// Show whether each string passed each validator
for (var _i = 0, strings5_1 = strings5; _i < strings5_1.length; _i++) {
    var s = strings5_1[_i];
    for (var name_1 in validators5) {
        if (validators5.hasOwnProperty(name_1)) {
            console.log("\"" + s + "\" - " + (validators5[name_1].isAcceptable(s)
                ? 'matches'
                : 'does not match') + " " + name_1);
        }
    }
}
