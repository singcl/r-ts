let isDone: boolean = false;
let decLiteral: number = 0o321;
let namee: string = 'blob';
let h: string = `hello`;
let r: string = `mey name is ${namee}`;
let listing: number[] = [1, 2, 3];
let listingg: Array<number> = [1, 2, 3];
let x: [string, number];
enum Color {
    Red = 1,
    Green = 2,
    Blue = 4
}
let c: Color = Color.Blue;
let no: any = 'eeeeee';

// /* tslint:disable only-arrow-functions*/

// 函数类型传统写法(函数类型完整写法)
let myAdd: (x: number, y: number) => number = function(
    xx: number,
    y: number
): number {
    return xx + y;
};

// 函数类型箭头函数写法(函数类型完整写法)
let myAdd2: (x: number, y: number) => number = (
    xx: number,
    y: number
): number => xx + y;

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

// https://www.tslang.cn/docs/handbook/functions.html
// 函数类型声明可以这样写
const caca = (a: string): number => +a;
let cac: SearchFunc = (a: string, b: string): boolean => !!(a + b);
let cacb: SearchFunc = (a, b) => !!(a + b); // 这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。
let cacc: SearchFunc = function(a: string, b: string): boolean {
    return !!(a + b);
};
let cacx: (source: string, subString: string) => boolean = (
    a: string,
    b: string
): boolean => !!(a + b);
