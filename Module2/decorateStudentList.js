// FUNCTION DEFINITIONS
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {

    var decoratedClassList = [];

    for (var i = 0; i < classList.length; i++) {
        var studentObj = {
            name: classList[i],
            age: getRandomIntInclusive(10, 11)
        };
        decoratedClassList.push(studentObj);
    }
    return decoratedClassList;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertWithinRange(low, high, actual, testName) {
    var inRange = low <= actual && actual <= high;
    if (inRange) {
        console.log('passed [' + testName + ']');
    } else {
        console.log('FAILED [' + testName + '] "' + actual + '" not within range ' + low + ' to ' + high);
    }
}

// TESTS FOR DECORATE STUDENT LIST
function testDecorateStudentList() {
    var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
        "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
        "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"
    ];

    var decoratedList = decorateClassListWithAges(classList);

    for (var i = 0; i < decoratedList.length; i++) {
        assertWithinRange(10, 11, decorateList[i].age, 'renders all ages either 10 or 11');
    }
}
