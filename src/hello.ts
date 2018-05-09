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

// 函数类型传统写法
let myAdd: (x: number, y: number) => number = function(xx: number, y: number): number { return xx + y; };

// 函数类型箭头函数写法
let myAdd2: (x: number, y: number) => number = (xx: number, y: number): number => xx + y;