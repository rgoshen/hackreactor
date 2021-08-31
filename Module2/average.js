// FUNCTION DEFINITIONS
function average(numbers) {
    return sum(numbers) / numbers.length;
}

function sum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('PASSED [' + testName + ']');
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
}

// TESTS FOR SUM
var sumTestArray = [1, 2, 3, 4, 5];
var actualSumResult = sum(sumTestArray);
var expectedSumResult = 15;
assertEqual(actualSumResult, expectedSumResult, 'should accurately sum the integers in an array');

// TESTS FOR AVERAGE
var averageTestArray = [1, 2, 3, 4, 5];
var actualAverageResult = average(averageTestArray);
var expectedAverageResult = 3;
assertEqual(actualSumResult, expectedSumResult,
    'should accurately calculate the average of integers in an array');
