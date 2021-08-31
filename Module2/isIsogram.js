// FUNCTION DEFINITIONS
function isIsogram(text) {
    text = text.toLowerCase();
    var letters = text.split('');

    letters = new Set(letters);
    return text.length === letters.size;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('PASSED [' + testName + ']');
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
}

// TESTS FOR IS ISOGRAM
assertEqual(isIsogram(''), true, 'should return true for an empty string');
assertEqual(isIsogram('true'), true, 'should return true for an isogram');
assertEqual(isIsogram('assert'), false, 'should return false for non-isogram');
assertEqual(isIsogram('caCAtcHh'), false, 'should ignore case');
