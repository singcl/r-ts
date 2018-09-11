/// <reference types="./XClass.d.ts" />

class XClass {
    public someProperty: string[];
    public constructor(someParam: string) {}
    public myMethod(opts: XClass.XClassMethodOptions): number {
        return 3;
    }
}

export default XClass;
