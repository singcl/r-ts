// Disposable Mixin
class Disposable {
    public isDisposed: boolean;
    public dispose() {
        this.isDisposed = true;
    }
}

// Activatable Mixin
class Activatable {
    public isActive: boolean;
    public activate() {
        this.isActive = true;
    }
    public deactivate() {
        this.isActive = false;
    }
}

class SmartObject implements Disposable, Activatable {
    // Disposable
    public isDisposed: boolean = false;
    public dispose: () => void;
    // Activatable
    public isActive: boolean = false;
    public activate: () => void;
    public deactivate: () => void;

    constructor() {
        setInterval(
            () => console.log(this.isActive + ':' + this.isDisposed),
            500
        );
    }
    public interact() {
        this.activate();
    }
}

applyMixins(SmartObject, [Disposable, Activatable]);
let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);

////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////
interface Ctor {
    new (...args: any[]): {};
}

function applyMixins<T extends Ctor, U extends Ctor>(
    derivedCtor: T,
    baseCtors: U[]
) {
    baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
