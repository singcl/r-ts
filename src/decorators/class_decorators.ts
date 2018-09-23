@sealed
class Greeter3 {
    public greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    public greet(): string {
        return 'Hello' + this.greeting;
    }
}

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

interface Greeter3 {
    xxx: string;
}

// 下面是一个重载构造函数的例子。
// 同时 阅读https://www.tslang.cn/docs/release-notes/typescript-2.2.html#object-type 深入理解 混合构造函数类型 和 混合类
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        public newProperty: string = 'new property';
        public hello: string = 'override';
    };
}

@classDecorator
class Greeter4 {
    public property = 'property';
    public hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter4('world'));
// {
//     property: 'property',
//     hello: 'override',
//     newProperty: 'new property'
// }
