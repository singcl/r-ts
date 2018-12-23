## The way to Typescript.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-10de6e.svg?style=flat-square)](https://github.com/prettier/prettier)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsingcl%2Fr-ts.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsingcl%2Fr-ts?ref=badge_shield)
[![NPM VERSION](https://img.shields.io/npm/v/@singcl/r-ts.svg?style=flat-square)](https://www.npmjs.com/package/@singcl/r-ts)
[![Code Climate](https://img.shields.io/codeclimate/maintainability/singcl/r-ts.svg?style=flat-square)](https://codeclimate.com/github/singcl/r-ts/maintainability)

-   [Typescript](http://www.typescriptlang.org/docs/home.html)

_badge: https://img.shields.io/_

### API

_simple .d.ts in the library._

```typescript
declare namespace XClass {
    interface XClassMethodOptions {
        width?: number;
        height?: number;
    }
}
declare class XClass {
    someProperty: string[];
    constructor(someParam?: string);
    myMethod(opts: XClass.XClassMethodOptions): number;
}
export = XClass;
```

[tsconfig.json详细配置说明](http://json.schemastore.org/tsconfig)

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsingcl%2Fr-ts.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsingcl%2Fr-ts?ref=badge_large)
