function f() {
    console.log('f(): evaluated');
    return function(
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        console.log('f(): called');
        return descriptor;
    };
}

function g() {
    console.log('g(): evaluated');
    return function(
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        console.log('g(): called');
        return descriptor;
    };
}

class C {
    @f()
    @g()
    public method() {
        //
    }
}
