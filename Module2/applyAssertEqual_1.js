// FUNCTION DEFINITION
function square(n) {
    return n * n;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
}

assertEqual(square(3), 9, 'it should square a positive integer');
assertEqual(square(-3), 9, 'it should square a negative integer');
assertEqual(square(0), 0, 'it should square zero');
