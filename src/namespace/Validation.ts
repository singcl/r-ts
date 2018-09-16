// 我们把Validation命名空间分割成多个文件。
// 因为不同文件之间存在依赖关系，所以我们加入了引用标签来告诉编译器文件之间的关联。
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}
