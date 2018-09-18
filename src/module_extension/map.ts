// / observable.ts stays the same

import { Observable } from './observable';

declare module './observable' {
    interface Observable<T> {
        map<U>(f: (x: T) => U): Observable<U>;
    }
}

Observable.prototype.map = function(f) {
    // ... another exercise for the reader
};

// 当这些声明在扩展中合并时，就好像在原始位置被声明了一样。
// 但是，你不能在扩展中声明新的顶级声明－仅可以扩展模块中已经存在的声明。
