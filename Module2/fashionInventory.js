// TITLE: Part A
// FUNCTION DEFINITIONS
function renderInventory(inventory) {
    // create flat list string
    var flatList = "";
    // iterate over the inventory array
    for (var i = 0; i < inventory.length; i++) {
        // assign a variable to be the current designer object
        var designerObject = inventory[i];
        // iterate over the current designer object's shoes array
        for (var j = 0; j < designerObject.shoes.length; j++) {
            // add to our flat list: designer name, shoe name, shoe price, and a newline symbol
            flatList += designerObject.name + ', ' + designerObject.shoes[j].name + ', ' + designerObject
                .shoes[j].price + '\n';
        }
    }
    // return flat list string
    return flatList;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
}

// TESTS FOR RENDER INVENTORY
var inventory = [{
        name: 'Brunello Cucinelli',
        shoes: [{
                name: 'tasselled black low-top lace-up',
                price: 1000
            },
            {
                name: 'tasselled green low-top lace-up',
                price: 1100
            },
            {
                name: 'plain beige suede moccasin',
                price: 950
            },
            {
                name: 'plain olive suede moccasin',
                price: 1050
            }
        ]
    },
    {
        name: 'Gucci',
        shoes: [{
                name: 'red leather laced sneakers',
                price: 800
            },
            {
                name: 'black leather laced sneakers',
                price: 900
            }
        ]
    }
];
var actualFlatList = renderInventory(inventory);
var expectedFlatList =
    'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900\n';
assertEqual(actualFlatList, expectedFlatList, 'should render flat list for inventory');

// TITLE: Part B
// FUNCTION DEFINITIONS
function calculateAveragePricePerDesigner(inventory) {
    // create result object in described format
    var averageObject = {
        designers: [],
    };
    // iterate over the inventory of designer objects
    for (var i = 0; i < inventory.length; i++) {
        // save current value as readable variable (designerObject)
        var designerObject = inventory[i];
        // save current value's shoes' property as readable variable (shoesArray)
        var shoesArray = designerObject.shoes;
        // create price object for current designer
        var priceObject = {
            // first property is just name of current designer
            name: designerObject.name,
            // average is set to a function that we define below, function should return the average price of a shoes array
            averagePrice: averagePrice(shoesArray)
        }
        // add price object to result object
        averageObject.designers.push(priceObject);
    }
    // return result object
    return averageObject;
}

// define a function that should return the average price of a shoes array
function averagePrice(shoesArray) {
    // call another function that will sum up the prices in a shoes array, divide it by length of same array
    return sum(shoesArray) / shoesArray.length;
}

// define a function that should return the sum of the prices of a shoes array
function sum(shoesArray) {
    // create sum variable
    var sum = 0;
    // iterate over shoes array
    for (var j = 0; j < shoesArray.length; j++) {
        // add to the sum the price of each shoe
        sum += shoesArray[j].price;
    }
    // return sum variable
    return sum;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
    }
}

// TESTS FOR CALCULATE AVERAGE PRICE PER DESIGNER
var inventory = [{
        name: 'Brunello Cucinelli',
        shoes: [{
                name: 'tasselled black low-top lace-up',
                price: 1000
            },
            {
                name: 'tasselled green low-top lace-up',
                price: 1100
            },
            {
                name: 'plain beige suede moccasin',
                price: 950
            },
            {
                name: 'plain olive suede moccasin',
                price: 1050
            }
        ]
    },
    {
        name: 'Gucci',
        shoes: [{
                name: 'red leather laced sneakers',
                price: 800
            },
            {
                name: 'black leather laced sneakers',
                price: 900
            }
        ]
    }
];
var actualOutput = renderAverageCostPerDesignerObject(inventory);
var expectedOuput = {
    'designers': [{
            'name': 'Brunello Cucinelli',
            'averagePrice': 1025
        },
        {
            'name': 'Gucci',
            'averagePrice': 850
        }
    ]
};
assertObjectsEqual(actualOutput, expectedOuput, 'should return properly formatted object');

// TITLE: Part C
// FUNCTION DEFINITIONS
function listAllBlackShoes(inventory) {
    // create a flat list string
    var flatBlackList = "";
    // iterate over the inventory array
    for (var i = 0; i < inventory.length; i++) {
        // assign a variable to be the current designer object
        var designerObject = inventory[i];
        // iterate over the current designer object's shoes array
        for (var j = 0; j < designerObject.shoes.length; j++) {
            // if current shoe is black
            if (isBlackShoe(designerObject.shoes[j])) {
                // add to our flat list: designer name, shoe name, shoe price, and a newline symbol
                flatBlackList += designerObject.name + ', ' + designerObject.shoes[j].name + ', ' +
                    designerObject.shoes[j].price + '\n';
            }
        }
    }
    // return flat list string
    return flatBlackList;
}

function isBlackShoe(shoeObject) {
    // return true if shoeObject contains 'black' in the name`
    // indexOf returns the index of a substring within another string, and will return -1 if substring ('black') is not present
    if (shoeObject.name.indexOf('black') > -1) {
        return true;
    } else {
        return false;
    }
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
}

// TESTS FOR LIST ALL BLACK SHOES
var inventory = [{
        name: 'Brunello Cucinelli',
        shoes: [{
                name: 'tasselled black low-top lace-up',
                price: 1000
            },
            {
                name: 'tasselled green low-top lace-up',
                price: 1100
            },
            {
                name: 'plain beige suede moccasin',
                price: 950
            },
            {
                name: 'plain olive suede moccasin',
                price: 1050
            }
        ]
    },
    {
        name: 'Gucci',
        shoes: [{
                name: 'red leather laced sneakers',
                price: 800
            },
            {
                name: 'black leather laced sneakers',
                price: 900
            }
        ]
    }
];
var actualFlatBlackList = listAllBlackShoes(inventory);
var expectedFlatBlackList =
    'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\n';
assertEqual(actualFlatBlackList, expectedFlatBlackList,
    'should render flat list of black named shoes within inventory');

// TITLE: Part D
// FUNCTION DEFINITIONS
function generateLaceDetails(inventory) {
    // create result array for lace detail objects
    var laceDetails = [];
    // iterate over the inventory array
    for (var i = 0; i < inventory.length; i++) {
        // assign a variable to be the current designer object
        var designerObject = inventory[i];
        // iterate over the current designer object's shoes array
        for (var j = 0; j < designerObject.shoes.length; j++) {
            // assign a variable to be the current shoe object
            var currentShoe = designerObject.shoes[j];
            // make a call to a function that will take in a shoe name, and return if that shoe name contains lace
            // if it does contain lace
            if (hasLace(currentShoe.name)) {
                // create a variable and set it equal to the name of the current shoe split on a space
                var nameWordsArray = currentShoe.name.split(' ');
                // create a laced detail object for current lace shoe
                var laceObject = {
                    // set nameWords property to be nameWordsArray variable created by splitting shoe name on a space
                    nameWords: nameWordsArray,
                    // set targetWordIndex to result of calling a function that will take in the nameWordsArray, and return the index where lace is present
                    targetWordIndex: getTargetWordIndex(nameWordsArray)
                };
                // push lace detail object onto lace details array
                laceDetails.push(laceObject);
            }
        }
    }
    // return result array
    return laceDetails;
}

// write a function that will take in a shoe name, and return if that shoe name contains lace
function hasLace(shoeName) {
    // expression will be true if name contains lace, false otherwise
    return shoeName.indexOf('lace') > -1;
}

function getTargetWordIndex(nameWordsArray) {
    for (var k = 0; k < nameWordsArray.length; k++) {
        if (nameWordsArray[k].indexOf('lace') > -1) {
            return k;
        }
    }
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
    }
}

// TESTS FOR LIST ALL BLACK SHOES
var inventory = [{
        name: 'Brunello Cucinelli',
        shoes: [{
                name: 'tasselled black low-top lace-up',
                price: 1000
            },
            {
                name: 'tasselled green low-top lace-up',
                price: 1100
            },
            {
                name: 'plain beige suede moccasin',
                price: 950
            },
            {
                name: 'plain olive suede moccasin',
                price: 1050
            }
        ]
    },
    {
        name: 'Gucci',
        shoes: [{
                name: 'red leather laced sneakers',
                price: 800
            },
            {
                name: 'black leather laced sneakers',
                price: 900
            }
        ]
    }
];
var actualLaceDetails = generateLaceDetails(inventory);
var expectedLaceDetails = [{
        "nameWords": [
            "tasselled",
            "black",
            "low-top",
            "lace-up"
        ],
        "targetWordIndex": 3
    },
    {
        "nameWords": [
            "tasselled",
            "green",
            "low-top",
            "lace-up"
        ],
        "targetWordIndex": 3
    },
    {
        "nameWords": [
            "red",
            "leather",
            "laced",
            "sneakers"
        ],
        "targetWordIndex": 2
    },
    {
        "nameWords": [
            "black",
            "leather",
            "laced",
            "sneakers"
        ],
        "targetWordIndex": 2
    }
];
// this is technically cheating, but that is alright for now
assertObjectsEqual(actualLaceDetails, expectedLaceDetails, 'should render correct lace details array');
