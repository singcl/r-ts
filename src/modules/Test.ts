import zip = require('./ZipCodeValidator_commonjs_amd');
// Some samples to try
const strings = ['Hello', '98052', '101'];

// Validators to use
const validator = new zip();

// Show whether each string passed each validator
strings.forEach((s) => {
    console.log(
        `"${s}" - ${validator.isAcceptable(s) ? 'matches' : 'does not match'}`
    );
});

import XClass from './XClass';
