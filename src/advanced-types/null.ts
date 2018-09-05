// 使用类型保护来去除 null
function f(sn: string | null): string {
    if (sn == null) {
        return 'default';
    } else {
        return sn;
    }
}

function f2(sn: string | null): string {
    return sn || 'default';
}

// 如果编译器不能够去除 null或 undefined，你可以使用类型断言手动去除。 语法是添加 !后缀：
function broken(name: string | null): string {
    function postfix(epithet: string) {
        return name.charAt(0) + '. the ' + epithet; // error, 'name' is possibly null
    }
    name = name || 'Blob';
    return postfix('great');
}

function fixed(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + '.  the ' + epithet; // ok
    }
    name = name || 'Bob';
    return postfix('great');
}
