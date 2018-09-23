// @see https://www.tslang.cn/docs/release-notes/typescript-2.2.html#object-type
// 混合构造函数类型 和 混合类
class Point2 {
    constructor(public x: number, public y: number) {}
}

class Person2 {
    constructor(public name: string) {}
}

// interface Constructor<T> {
//     new (...args: any[]): T;
// }
// 或者用类型别名：

// 混合构造函数类型指仅有单个构造函数签名，
// 且该签名仅有一个类型为 any[] 的变长参数，返回值为对象类型.
// 比如, 有 X 为对象类型, new (...args: any[]) => X 是一个实例类型为 X 的混合构造函数类型。
type Constructor<T> = new (...args: any[]) => T;

function Tagged<T extends Constructor<{}>>(Base: T) {
    return class extends Base {
        public _tag: string;
        constructor(...args: any[]) {
            super(...args);
            this._tag = '';
        }
    };
}

const TaggedPoint = Tagged(Point2);
let point = new TaggedPoint(10, 20);
point._tag = 'hello';

class Customer extends Tagged(Person2) {
    public accountBalance: number;
}

let customer = new Customer('singcl');
customer._tag = 'hell';
customer.accountBalance = 0;

// 混合类可以通过在类型参数中限定构造函数签名的返回值类型来限制它们可以被混入的类的类型。
interface Pointer {
    x: number;
    y: number;
}

const WithLocation = <T extends Constructor<Pointer>>(Base: T) => {
    return class extends Base {
        public getLocation(): [number, number] {
            return [this.x, this.y];
        }
    };
};
