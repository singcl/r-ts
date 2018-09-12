// TypeScript 1.5里术语名已经发生了变化。
// “内部模块”现在称做“命名空间”。 “外部模块”现在则简称为“模块”，
// 这是为了与 ECMAScript 2015里的术语保持一致，(也就是说 module X {相当于现在推荐的写法 namespace X {) 。

namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

// Some samples to try
let strings = ['Hello', '98052', '101'];

// Validators to use
let validators: { [s: string]: Validation.StringValidator } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(
            `"${s}" - ${
                validators[name].isAcceptable(s) ? 'matches' : 'does not match'
            } ${name}`
        );
    }
}
