// 索引类型

// JS中常见的代码
function pluckInJs(o, names) {
    return names.map((n) => o[n]);
}

// 下面是如何在TypeScript里使用此函数，通过 索引类型查询和 索引访问操作符：
function pluck<T, K extends keyof T>(o: T, names: K[]): Array<T[K]> {
    return names.map((n) => o[n]);
}

interface Person {
    name: string;
    age: number;
    address: string;
}

let person: Person = {
    name: 'singcl',
    age: 26,
    address: 'shanghai'
};

let strings: (string | number)[] = pluck(person, ['name', 'age']);

//
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}

let nameee: string = getProperty(person, 'name');
let age: number = getProperty(person, 'age');
let unknown = getProperty(person, 'unknown'); // error, 'unknown' is not in 'name' | 'age'

// keyof和 T[K]与字符串索引签名进行交互

interface Mapp<T> {
    [key: string]: T;
}

let keys: keyof Mapp<number>; // 索引类型查询操作符 与索引类型接口交互
let value: Mapp<number>['foo']; // 索引访问操作符 与索引类型接口交互

// 索引访问操作符。类型语法反映了表达式语法。
