// 另一种简化命名空间操作的方法是使用import q = x.y.z给常用的对象起一个短的名字

namespace Shapes {
    export namespace Polygons {
        export class Triangle {}
        export class Square {}
    }
}

import polygons = Shapes.Polygons;
let sq = new polygons.Square(); // Same as "new Shapes.Polygons.Square()"
