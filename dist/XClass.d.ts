declare namespace XClass {
    interface XClassMethodOptions {
        width?: number;
        height?: number;
    }
}
declare class XClass {
    someProperty: string[];
    constructor(someParam?: string);
    myMethod(opts: XClass.XClassMethodOptions): number;
}
export = XClass;
