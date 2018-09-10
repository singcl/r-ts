// 类和函数声明可以直接被标记为默认导出。 标记为默认导出的类和函数的名字是可以省略的。
export default class ZipCodeValidator {
    public static numberRegexp = /^[0-9]+$/;
    public isAcceptable(s: string) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}
