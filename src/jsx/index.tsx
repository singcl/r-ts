// as操作符在.ts和.tsx里都可用，并且与其它类型断言行为是等价的。
// as操作符

// 类型检查
// 为了理解JSX的类型检查，你必须首先理解固有元素与基于值的元素之间的区别。
declare namespace JSX {
    interface IntrinsicElements {
        foo: any;
    }
}

// 固有原始 和 基于值的元素
<foo />; // 正确
<bar />; // 错误

import MyComponent from './myComponent';

<MyComponent />; // 正确
<SomeOtherComponent />; // 错误
