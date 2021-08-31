// FUNCTION DEFINITION
function addFullNameProp(obj) {
    var firstName = obj['firstName'];
    var lastName = obj['lastName'];

    if (firstName && lastName) {
        obj['fullName'] = firstName + ' ' + lastName;
    }

    return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);

    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '], expected "' + expected + '", but got "' + actual + '"')
    }
}

// TESTS FOR ADD FULL NAME PROP
var person = {
    firstName: 'Chris',
    lastName: 'Riccolo'
};
var actualResult1 = addFullNameProp(person);
var expectedResult1 = {
    firstName: 'Chris',
    lastName: 'Riccolo',
    fullName: 'Chris Riccolo'
};
assertObjectsEqual(actualResult1, expectedResult1,
    'should add fullName property when firstName and lastName are defined');

var missingValues1 = {
    firstName: 'Chris'
};
var actualMissing1 = addFullNameProp(missingValues1);
var expectedMissing1 = {
    firstName: 'Chris'
};
assertObjectsEqual(actualMissing1, expectedMissing1,
    'should not add fullName property when lastName is undefined');

var missingValues2 = {
    lastName: 'Riccolo'
};
var actualMissing2 = addFullNameProp(missingValues2);
var expectedMissing2 = {
    lastName: 'Riccolo'
};
assertObjectsEqual(actualMissing2, expectedMissing2,
    'should not add fullName property when firstName is undefined');
