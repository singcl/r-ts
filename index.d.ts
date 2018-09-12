// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ This is the module template file for class modules.
 *~ You should rename it to index.d.ts and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ Note that ES6 modules cannot directly export class objects.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ If this module is a UMD module that exposes a global variable 'myClassLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace XClassLib;

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = XClass;

/*~ Write your module's methods and properties in this class */
declare class XClass {
    constructor(someParam?: string);

    someProperty: string[];

    myMethod(opts: XClass.XClassMethodOptions): number;
}

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block.
 */
declare namespace XClass {
    export interface XClassMethodOptions {
        width?: number;
        height?: number;
    }
}
