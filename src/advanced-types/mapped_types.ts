// 映射类型
interface Person {
    name: string;
    age: number;
}

interface PersonPartial {
    name?: string;
    age?: number;
}

interface PersonReadonly {
    readonly name: string;
    readonly age: number;
}

// TypeScript提供了从旧类型中创建新类型的一种方式 — 映射类型
type Readonly2<T> = { readonly [P in keyof T]: T[P] };
type Partial2<T> = { [P in keyof T]?: T[P] };
type Pick2<T, K extends keyof T> = { [P in K]: T[P] };

// 像下面这样使用：
type PersonPartial2 = Partial2<Person>;
type PersonReadonly2 = Readonly2<Person>;
type PersonPick2 = Pick2<Person, 'age' | 'name'>;

// 下面来看看最简单的映射类型和它的组成部分：
type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };

// 它的语法与索引签名的语法类似，内部使用了 for .. in。 具有三个部分：
// 1. 类型变量 K，它会依次绑定到每个属性。
// 2. 字符串字面量联合的 Keys，它包含了要迭代的属性名的集合。
// 3. 属性的结果类型。

// 通用版本。
type Nullable4<T> = { [P in keyof T]: T[P] | null };
type Partial4<T> = { [P in keyof T]?: T[P] };

// 属性列表是 keyof T且结果类型是 T[P]的变体。 这是使用通用映射类型的一个好模版。
// 因为这类转换是 同态的，映射只作用于 T的属性而没有其它的。

// 下面是另一个例子， T[P]被包装在 Proxy< T > 类里：
type Proxy<T> = {
    get(): T;
    set(value: T): void;
};

type Proxify<T> = { [P in keyof T]: Proxy<T[P]> };
function proxify<T>(o: T): Proxify<T> {
    // ??? 这里怎么实现？/*  */
    // ... wrap proxies ... ?????????????
}

let proxyProps = proxify({ name: 'hello' });
proxyProps.name.get();

type Pick3<T, K extends keyof T> = { [P in K]: T[P] };
type Record3<K extends string, T> = { [P in K]: T };

type ThreeStringProps = Record3<'prop1' | 'prop2' | 'prop3', string>;

// 由映射类型进行推断
function unproxify<T>(t: Proxify<T>): T {
    const result = {} as T;
    for (const k in t) {
        result[k] = t[k].get();
    }

    return result;
}

let originalProps = unproxify(proxyProps);
