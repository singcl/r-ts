namespace XClass {
    export interface XClassMethodOptions {
        width?: number;
        height?: number;
    }
}

class XClass {
    public someProperty: string[];
    constructor(someParam?: string) {}
    public myMethod(opts: XClass.XClassMethodOptions): number {
        if (
            typeof opts.height !== 'undefined' &&
            typeof opts.width !== 'undefined'
        ) {
            return opts.height * opts.height;
        } else {
            return 0;
        }
    }
}

export default XClass;
