// CommonJS和AMD都有一个exports对象的概念，它包含了一个模块的所有导出内容。

// TypeScript模块支持 export =语法以支持传统的CommonJS和AMD的工作流模型。

// export =语法定义一个模块的导出对象。 它可以是类，接口，命名空间，函数或枚举。
const numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    public isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export = ZipCodeValidator;
