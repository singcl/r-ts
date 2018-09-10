// Node.js里的动态模块加载

// 这种模式的核心是import id = require("...")语句或者es6 import 语句 可以让我们访问模块导出的 类型。
//  模块加载器会被动态调用（通过 require），就像下面if代码块里那样。 它利用了省略引用的优化，所以模块只在被需要时加载。
//  为了让这个模块工作，一定要注意 import定义的标识符只能在表示类型处使用（不能在会转换成JavaScript的地方）。
// 为了确保类型安全性，我们可以使用typeof关键字。 typeof关键字，当在表示类型的地方使用时，会得出一个类型值，这里就表示模块的类型。

declare function require(moduleName: string): any;

import { ZipCodeValidator as Zip } from './ZipCodeValidator';

const needZipValidation = true;

if (needZipValidation) {
    const ZipCodeValidator: typeof Zip = require('./ZipCodeValidator');
    const validator = new ZipCodeValidator();
    if (validator.isAcceptable('...')) {
        /* ... */
    }
}
