// 属性类型检查

// 对于固有元素，这是 JSX.IntrinsicElements属性的类型。

declare namespace JSX {
    interface IntrinsicElement {
        foo: { bar?: boolean };
    }
}
// `foo`的元素属性类型为`{bar?: boolean}`
<foo bar />;

// 对于基于值的元素
declare namespace JSX {
    interface ElementAttributesProperty {
        props; // 指定用来使用的属性名
    }
}

class MyComponent {
    // 在元素实例类型上指定属性
    props: {
        foo?: string;
    };
}

// `MyComponent`的元素属性类型为`{foo?: string}`
<MyComponent foo="bar" />;

declare namespace JSX {
    interface IntrinsicElements {
        foo: { requiredProp: string; optionalProp?: number };
    }
}

<foo requiredProp="bar" />; // 正确
<foo requiredProp="bar" optionalProp={0} />; // 正确
<foo />; // 错误, 缺少 requiredProp
<foo requiredProp={0} />; // 错误, requiredProp 应该是字符串
<foo requiredProp="bar" unknownProp />; // 错误, unknownProp 不存在
<foo requiredProp="bar" some-unknown-prop />; // 正确, `some-unknown-prop`不是个合法的标识符

// 延展操作符也可以使用：
var props = { requiredProp: 'bar' };
<foo {...props} />; // 正确

var badProps = {};
<foo {...badProps} />; // 错误

// 子孙类型检查
declare namespace JSX {
    interface ElementChildrenAttribute {
        children: {}; // specify children name to use
    }
}

// 如不特殊指定子孙的类型，我们将使用 React typings里的默认类型
<div>
    <h1>Hello</h1>
</div>;

<div>
    <h1>Hello</h1>
    World
</div>;

const CustomComp = (props) => <div>props.children</div>
<CustomComp>
    <div>Hello World</div>
    {"This is just a JS expression..." + 1000}
</CustomComp>

// 你也可以像其它属性一样指定 children的类型。下面我们重写 React typings里的默认类型。
interface PropsType {
    children: JSX.Element
    name: string
}

class Component extends React.Component<PropsType, {}> {
    render() {
        return (
            <h2>
                this.props.children
      </h2>
        )
    }
}

// OK
<Component>
    <h1>Hello World</h1>
</Component>

    // Error: children is of type JSX.Element not array of JSX.Element
    <Component>
        <h1>Hello World</h1>
        <h2>Hello World</h2>
    </Component>

    // Error: children is of type JSX.Element not array of JSX.Element or string.
    <Component>
        <h1>Hello</h1>
        World
</Component>

// React整合
// 要想一起使用JSX和React，你应该使用 React类型定义。 这些类型声明定义了 JSX合适命名空间来使用React。
/// <reference path="react.d.ts" />

interface Props {
    foo: string;
}

class MyComponent extends React.Component<Props, {}> {
    render() {
        return <span>{this.props.foo}</span>
    }
}

<MyComponent foo="bar" />; // 正确
<MyComponent foo={0} />; // 错误