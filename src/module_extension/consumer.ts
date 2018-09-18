import './map';
import { Observable } from './observable';

let o: Observable<number>;
o.map((x) => x.toFixed());
