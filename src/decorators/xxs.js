// 子类实例 将拥有子类实例属性/方法 和 父类实例属性/方法

class Base {
    constructor() {
        this.x = 1;
        this.xx = 3;
    }
}

class Child extends Base {
    constructor() {
        super();
        this.c = 3;
        this.cc = 44;
        this.x = 222222;
    }
}

console.log(new Child()); // Child { x: 222222, xx: 3, c: 3, cc: 44 }

// extends 不仅可以继承类 还可以继承 原生构造函数 和 自定义构造函数
function Test() {
    this.y = 2;
    this.yy = 3;
}

Test.prototype.method = function() {
    console.log('ha');
};

class SubTest extends Test {
    constructor() {
        super();
        this.c = 3;
        this.cc = 44;
        this.x = 222222;
    }

    meth() {
        return 2;
    }
}

console.log(new SubTest());

// 类的方法默认是不可枚举的
console.log(Object.getOwnPropertyDescriptor(SubTest.prototype, 'meth'));
// { value: [Function: meth],
//   writable: true,
//   enumerable: false,
//   configurable: true }

console.log(Object.keys(SubTest.prototype));
