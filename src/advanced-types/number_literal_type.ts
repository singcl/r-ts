function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
    //
}

function foo(x: number) {
    if (x !== 1 || x !== 2) {
        //         ~~~~~~~
        // Operator '!==' cannot be applied to types '1' and '2'.
    }
}
