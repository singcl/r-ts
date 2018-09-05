// 可辨识联合（Discriminated Unions）
// 它具有3个要素：

// 1. 具有普通的单例类型属性— 可辨识的特征。
// 2. 一个类型别名包含了那些类型的联合— 联合。
// 3. 此属性上的类型保护。

interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

interface Triangle {
    kind: 'triangle';
    width: number;
    height: number;
}

type Shape = Square | Rectangle | Circle;
// type Shape = Square | Rectangle | Circle | Triangle;

// 第二种方法使用 never类型，编译器用它来进行完整性检查：
function assertNever(x: never): never {
    throw new Error('Unexpected object: ' + x);
}

function area(s: Shape) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.width * s.height;
        case 'circle':
            return Math.PI * s.radius ** 2;
        default:
            return assertNever(s); // error here if there are missing cases
    }
}
