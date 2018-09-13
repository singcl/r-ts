interface StringValidator {
    isAcceptable(s: string): boolean;
}

let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
    public isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}

class ZipCodeValidator implements StringValidator {
    public isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

// Some samples to try
let stringss = ['Hello', '98052', '101'];

// Validators to use
let validators: { [s: string]: StringValidator } = {};

validators['ZIP_code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();

// Show whether each string passed each validator
for (const s of stringss) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(
            `'${s}' ${isMatch ? 'matches' : 'does not match'} '${name}'.`
        );
    }
}
