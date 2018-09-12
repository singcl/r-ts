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

// 使用export =  来支持commonjs 或者 AMD 工作流
// 这样在ts 或者 js 文件中能够使用类型系统 智能提示类型系统等...
// export default 不支持commonjs 或者 AMD 工作流
export = XClass;
