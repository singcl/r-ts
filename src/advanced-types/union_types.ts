// 联合类型与交叉类型很有关联，但是使用上却完全不同。
// 在传统的面向对象语言里，我们可能会将这两种类型抽象成有层级的类型。
// 类比 C 中的共用体

function padLeft(value: string, padding: string | number): string {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft('Hello World', 4);

// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

function getSmallPet(): Fish | Bird {
    const result = {} as Fish | Bird;
    return result;
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim(); // errors
