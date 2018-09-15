// 把所有与验证器相关的类型都放到一个叫做Validation的命名空间里。
// 因为我们想让这些接口和类在命名空间之外也是可访问的，所以需要使用 export 。
// 相反的，变量 lettersRegexp和numberRegexp是实现的细节，不需要导出，因此它们在命名空间外是不能访问的。

namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class ZipCodeValidator implements StringValidator {
        public isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }

    export class LettersOnlyValidator implements StringValidator {
        public isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}

// Some samples to try
const stringList = ['Hello', '98052', '101'];
// Validators to use

const theValidator: { [s: string]: Validation.StringValidator } = {};
theValidator['ZIP code'] = new Validation.ZipCodeValidator();
theValidator['Letters only'] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (const s of stringList) {
    for (const name in theValidator) {
        if (Object.prototype.hasOwnProperty.call(theValidator, name)) {
            console.log(
                `"${s}" - ${
                    theValidator[name].isAcceptable(s)
                        ? 'matches'
                        : 'does not match'
                } ${name}`
            );
        }
    }
}
