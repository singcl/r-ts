class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() {
        return this._x;
    }
    set x(v: number) {
        this._x = v;
    }
    @configurable(false)
    get y() {
        return this._y;
    }
}

function configurable(value: boolean) {
    return function(
        target: Object,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.configurable = value;
    };
}

console.log(Object.getOwnPropertyDescriptor(Point.prototype, 'x'));
console.log(Object.keys(Point.prototype));
console.log(new Point(22, 33).x);
