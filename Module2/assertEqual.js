// TITLE: assertEqual
/*
Write a function called assertEqual. It will be a function that takes three parameters:
actual will be a scalar value, and should ideally be the result of calling a function you
are testing, and which returns a scalar value. expected, also a scalar, should be the
theoretical result of calling your function (or, what you "expect" the function to return).
Finally, testName will be a string, and should describe what a call to assertEqual is
verifying about the function being tested.

Your function should compare actual and expected values with strict equality (triple
equals ===), then log one of two messages to the console. In general, these
assertion functions will need some kind of code or separate functions to test. For the
first four Testing problems, we will provide examples that include functions like
multiplyByTwo. It is not necessary for you to create these functions, but rather, they
are presented to aid your understanding of how assertEqual should behave once
you have built it.
*/

// Tested function (SUCCESS CASE)
// function multiplyByTwo(n) {
//     return n * 2;
// }
// var output = multiplyByTwo(2); // returns 4
// console.log('output: ', output);
// assertEqual(output, 4, 'it doubles 2 to 4');

// console output:
// passed

// Tested function (FAILED CASE)
function multiplyByTwo(n) {
    return (n * 2) + 1; // an incorrect implementation
};

var output = multiplyByTwo(2); // returns 5
assertEqual(output, 4, 'it doubles 2 to 4');

// console output:
// FAILED [it doubles 2 to 4] Expected "4", but got "5"

// Testing function
function assertEqual(actual, expected, testName) {
    // compare actual to expected
    if (actual === expected) {
        // if equal console log passed
        console.log('passed');
    } else {
        // if not equal console log FAILED testName Expected, but got Actual
        console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
    }
};
