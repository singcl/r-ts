import { Observable } from './observable';

Observable.prototype.map = function(f) {
    // ... another exercise for the reader
};

// 它也可以很好地工作在TypeScript中， 但编译器对 Observable.prototype.map一无所知。
// 你可以使用扩展模块来将它告诉编译器：

// let x = new Observable();
