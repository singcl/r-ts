// 接口 vs. 类型别名
// @see https://www.tslang.cn/docs/handbook/advanced-types.html
type Alias = { name: number };
interface Interface {
    num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

// 另一个重要区别是类型别名不能被 extends和 implements
// 另一方面，如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。
