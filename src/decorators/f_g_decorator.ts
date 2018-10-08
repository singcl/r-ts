// 装饰器的求值策略 和 调用策略
// 当多个装饰器应用于一个声明上，它们求值方式与复合函数相似。在这个模型下，当复合f和g时，复合的结果(f ∘ g)(x)等同于f(g(x)) 。

// 同样的，在TypeScript里，当多个装饰器应用在一个声明上时会进行如下步骤的操作：

// 1. 由上至下依次对装饰器表达式求值。
// 2. 求值的结果会被当作函数，由下至上依次调用。
function f() {
    console.log('f(): evaluated');
    return function(
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        console.log('f(): called');
        return descriptor;
    };
}

function g() {
    console.log('g(): evaluated');
    return function(
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        console.log('g(): called');
        return descriptor;
    };
}

class C {
    @f()
    @g()
    public method() {
        //
    }
}
