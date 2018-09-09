// TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。
// 相反地，如果一个文件不带有顶级的import或者export声明，
// 那么它的内容被视为全局可见的（因此对模块也是可见的）。
export interface StringValidator {
    isAcceptable(s: string): boolean;
}
