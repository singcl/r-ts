import * as deno from 'deno';

// deno 命名空间下的readFileSync API
var unit8Array = deno.readFileSync('../package.json');
// TextDecoder 将TypedArray 转化为常规utf8字符串
var unit8ArrayStr = new TextDecoder('utf-8').decode(unit8Array);
console.log(unit8ArrayStr);

// 方法二： 自定义函数来将TypedArray 转化为常规utf8字符串
function uint8ArrayToString(fileData: Uint8Array) {
    var dataString = '';
    for (var i = 0; i < fileData.length; i++) {
        dataString += String.fromCodePoint(fileData[i]);
    }
    return dataString;
}
console.log(uint8ArrayToString(unit8Array));

console.log('before');
deno.exit(42);
console.log('after');

// string与arrayBuffer互转参考：
// https://blog.csdn.net/LightUpHeaven/article/details/81240862
// https://stackoverflow.com/questions/8936984/uint8array-to-string-in-javascript
// https://www.cnblogs.com/tianma3798/p/5834598.html
