// use deno deno-0.1.5.ts --allow-write

import * as deno from 'deno';

// Add deno.arch deno.platform #773
console.log(deno.platform);
console.log(deno.arch);

console.log(new Blob(['string']));

// Add atob() btoa() #776
console.log(btoa('hello world'));
console.log(atob('aGVsbG8gd29ybGQ='));

// Add deno.mkdir() and deno.mkdirSync() #746
deno.mkdirSync('new_dir');
(async function() {
    await deno.mkdir('new_dir_async');
})();

/*
-   Add atob() btoa() #776
-   Add deno.arch deno.platform #773
-   Add deno.symlink() and deno.symlinkSync() #742
-   Add deno.mkdir() and deno.mkdirSync() #746
-   Add deno.makeTempDir() #740
-   Improvements to FileInfo interface #765, #761
-   Add fetch.blob()
-   Upgrade V8 to 7.0.276.15
-   Upgrade Rust crates
 */
