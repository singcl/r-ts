// 多态的this类型
class BasicCalculator {
    public constructor(protected value: number = 0) {}
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}

let v = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();

console.log(v);

// 如果没有 this类型， ScientificCalculator就不能够在继承 BasicCalculator的同时还保持接口的连贯性。
//  multiply将会返回 BasicCalculator，它并没有 sin方法。
// 然而，使用 this类型， multiply会返回 this，在这里就是 ScientificCalculator。
class ScientificCalculator extends BasicCalculator {
    public constructor(value: number = 0) {
        super(value);
    }

    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
}

let v2 = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();

console.log(v2);

// es6 class
// super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B，因此super()在这里相当于A.prototype.constructor.call(this) 。
class A {
    constructor() {
        console.log(new.target.name);
    }
}

class B extends A {
    constructor() {
        super();
    }
}

new A();
new B();
