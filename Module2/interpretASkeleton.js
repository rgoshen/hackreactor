// FUNCTION DEFINITIONS
function findMaxRepeatCountInWord(word) {
    // Break up individual words into individual letters.
    var letters = word.split('');
    // Count the instances of each letter
    var counts = {};
    for (var i = 0; i < letters.length; i++) {
        if (counts[letters[i]] === undefined) {
            counts[letters[i]] = 1;
        } else {
            counts[letters[i]]++;
        }
    }
    // Iterate all the counts and find the highest
    var max = 0;
    for (var key in counts) {
        if (max < counts[key]) {
            max = counts[key];
        }
    }
    return max;
}

function findFirstWordWithMostRepeatedChars(text) {
    var maxRepeatCountOverall = 0;
    var wordWithMaxRepeatCount = '';

    var words = text.split(' ');

    for (var i = 0; i < words.length; i++) {
        var repeatCountForWord = findMaxRepeatCountInWord(words[i]);
        if (repeatCountForWord > maxRepeatCountOverall) {
            maxRepeatCountOverall = repeatCountForWord;
            wordWithMaxRepeatCount = words[i];
        }
    }
    return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
}

// TESTS FOR findMaxRepeatCountInWord
var actualMaxCount = findMaxRepeatCountInWord('bananas');
var expectedMaxCount = 3;
assertEqual(actualMaxCount, expectedMaxCount,
    'should return count of letter that is repeated most often in input word');

// TESTS FOR findFirstWordWithMostRepeatedChars
var actualWord = findFirstWordWithMostRepeatedChars('bananas are excellent');
var expectedWord = 'bananas';
assertEqual(actualWord, expectedWord, 'should return word with most repeated letters');
