// 交叉类型（Intersection Types）
// 我们大多是在混入（mixins）或其它不适合典型面向对象模型的地方看到交叉类型的使用。
// （在JavaScript里发生这种情况的场合很多！）

function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }

    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) {}
}

interface Loggable {
    log(): void;
}

class ConsoleLogger implements Loggable {
    log() {
        //
    }
}

var jim = extend(new Person('Jim'), new ConsoleLogger());
var n = jim.name;
jim.log();
