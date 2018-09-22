class Greeter5 {
    public greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(true)
    public greet() {
        return 'hello' + this.greeting;
    }
}

function enumerable(value: boolean) {
    return function<T>(
        target: Object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<T>
    ) {
        descriptor.enumerable = value;
    };
}

console.log(Object.getOwnPropertyDescriptor(Greeter5.prototype, 'greet'));
console.log(Object.keys(Greeter5.prototype));

// ts-node 默认会使用当前项目的tsconfig.json

// ts 编译器默认可能采用的是宽松模式（loose）将es6类 编译成es5类
// ES6类的方法默认是不可枚举的
// 但是ts 编译器 编译到es5变成了可枚举
// babel编译器默认会遵循严格的ES6定义，编译到ES5的类 的方法依然是不可枚举
