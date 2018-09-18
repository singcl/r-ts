namespace Animals {
    export class Zebra {}
}

namespace Animals {
    export interface Legged {
        numberOfLegs: number;
    }

    export class Dog {}
}

// 命名空间合并后：
namespace Animals {
    export interface Legged {
        numberOfLegs: number;
    }
    export class Zebra {}
    export class Dog {}
}

// 非导出成员仅在其原有的（合并前的）命名空间内可见。这就是说合并之后，从其它命名空间合并进来的成员无法访问非导出成员。
namespace Animal {
    const haveMuscles = true;
    export function animalsHaveMuscles() {
        return haveMuscles;
    }
}

namespace Animal {
    export function doAnimalsHaveMuscles() {
        return haveMuscles; // <-- error, haveMuscles is not visible here
    }
}

// 命名空间可以与其它类型的声明进行合并。
// 只要命名空间的定义符合将要合并类型的定义。
// 合并结果包含两者的声明类型。
// TypeScript使用这个功能去实现一些JavaScript里的设计模式。

// 合并命名空间和类
// 合并规则与上面 合并命名空间小节里讲的规则一致，我们必须导出 AlbumLabel类，好让合并的类能访问。
// 合并结果是一个类并带有一个内部类。 你也可以使用命名空间为类增加一些静态属性。
class Album {
    public label: Album.AlbumLabel;
}

namespace Album {
    export class AlbumLabel {}
}

// 除了内部类的模式，你在JavaScript里，创建一个函数稍后扩展它增加一些属性也是很常见的。
// TypeScript使用声明合并来达到这个目的并保证类型安全。
function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
    export let prefix = 'Hello, ';
    export let suffix = '';
}

// 命名空间可以用来扩展枚举型：
enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixColor(colorName: string) {
        if (colorName === 'yellow') {
            return Color.red + Color.green;
        } else if (colorName === 'white') {
            return Color.red + Color.green + Color.blue;
        } else if (colorName === 'magenta') {
            return Color.red + Color.blue;
        } else if (colorName === 'cyan') {
            return Color.green + Color.blue;
        }
    }
}
