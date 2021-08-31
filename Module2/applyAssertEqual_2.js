// FUNCTION DEFINITION
function every(array, callbackFunction) {
    var doesEveryElementMatch = true;

    for (var i = 0; i < array.length; i++) {
        if (doesEveryElementMatch === false) {
            break;
        }
        doesEveryElementMatch = callbackFunction(array[i]);
    }

    return doesEveryElementMatch;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
}

function isLessThan10(num) {
    return num < 10;
}

var sampleArrayTrue = [1, 4, 9];
var actualTrue = every(sampleArrayTrue, isLessThan10);
var expectedTrue = true;
assertEqual(actualTrue, expectedTrue, 'should return true when all elements pass the test function');

var sampleArrayFalse = [1, 11, 9];
var actualFalse = every(sampleArrayFalse, isLessThan10);
var expectedFalse = false;
assertEqual(actualFalse, expectedFalse,
    'should return false when at least one element does not pass the test function');
