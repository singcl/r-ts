/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// Some samples to try
let strings5 = ['Hello', '98052', '101'];
// Validators to use
let validators5: { [s: string]: Validation.StringValidator } = {};
validators5['ZIP code'] = new Validation.ZipCodeValidator2();
validators5['Letters only'] = new Validation.LettersOnlyValidator2();

// Show whether each string passed each validator

for (const s of strings5) {
    for (const name in validators5) {
        if (validators5.hasOwnProperty(name)) {
            console.log(
                `"${s}" - ${
                    validators5[name].isAcceptable(s)
                        ? 'matches'
                        : 'does not match'
                } ${name}`
            );
        }
    }
}

// tsc --outFile sample.js Validation.ts LettersOnlyValidator.ts ZipCodeValidator.ts Test.ts
