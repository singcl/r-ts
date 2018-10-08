// 类组件

declare namespace JSX {
    interface ElementClass {
        render: any;
    }
}

class MyComponent {
    public render() {
        return 2;
    }
}

function MyFactoryFunction() {
    return {
        render: () => {}
    };
}

<MyComponent />; // 正确
<MyFactoryFunction />; // 正确

class NotAValidComponent {}
function NotAValidFactoryFunction() {
    return {};
}

<NotAValidComponent />; // 错误
<NotAValidFactoryFunction />; // 错误
