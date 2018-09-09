import { StringValidator } from './Validation';
import { numberRegexp } from './ZipCodeValidator';

class ZipCodeValidator implements StringValidator {
    public isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

// 导出语句很便利，因为我们可能需要对导出的部分重命名，
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
