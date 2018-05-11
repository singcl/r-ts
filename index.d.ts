declare var $: any;

// 声明一个模块的类型定义
declare module 'xxs' {
    interface Xxx {
        (x: number): number;
        yy: number;
    }
    
    // 类型别名会给一个类型起个新名字。 起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型。
    // @see https://www.tslang.cn/docs/handbook/advanced-types.html
    type SearchFunc = (source: string, subString: string) => boolean;
    interface SearchFuncs {
        (source: string, subString: string): boolean;
    }
}