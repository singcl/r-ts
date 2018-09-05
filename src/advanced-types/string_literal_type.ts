// 字符串字面量类型
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';
class UIElement {
    public animate(dx: number, dy: number, easing: Easing) {
        if (easing === 'ease-in') {
            //
        } else if (easing === 'ease-out') {
            //
        } else if (easing === 'ease-in-out') {
            //
        } else {
            //// error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, 'ease-in');
button.animate(0, 0, 'uneasy');

// 字符串字面量类型还可以用于区分函数重载：
function createElement(tagName: 'img'): HTMLImageElement;
function createElement(tagName: 'input'): HTMLInputElement;
// ... more overloads ...
function createElement(tagName: string): Element {
    // ... code goes here ...
}
