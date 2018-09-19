// 固有元素 和 基于值的元素
interface FooProp {
    name: string;
    X: number;
    Y: number;
}

declare function AnotherComponent(prop: { name: string });
function ComponentFoo(prop: FooProp) {
    return <AnotherComponent name=prop.name />;
}


const Button = (prop: {value: string}, context: {color: string}) => <button />

// 由于无状态函数组件是简单的JavaScript函数，所以我们还可以利用函数重载。
interface ClickableProps {
    children: JSX.Element[] | JSX.Element;
}

interface HomeProps extends ClickableProps {
    home: JSX.Element;
}

interface SideProps extends ClickableProps {
    side: JSX.Element | string;
}

function MainButton(props: HomeProps): JSX.Element;
function MainButton(props: SideProps): JSX.Element;

function MainButton(props: SideProps): JSX.Element {
    //
}