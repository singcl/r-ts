// https://www.zhihu.com/question/50780469 第一个回答里的第一条评论
// 2.x 不需要ref 直接import就可以;
/// <reference path="../../index.d.ts" />

import Xxs = require('xxs');
import SearchFunc = Xxs.SearchFunc;

const cac: SearchFunc = (a: string, b: string): boolean => !!(a + b);
const cacb: SearchFunc = (a, b) => !!(a + b);  // 这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。
const cacc: SearchFunc = function (a: string, b: string): boolean { return !!(a + b); };
const cacx: (source: string, subString: string) => boolean = (a: string, b: string): boolean => !!(a + b);