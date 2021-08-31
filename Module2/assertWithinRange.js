 // TITLE: assertWithinRange
 /*
 Write a function called assertWithinRange. It will be a function that takes four
 parameters: low a number value, which will be the lower bound on our range; high,
 also a number value, which will be upper bound on our range; actual, which will be a
 number value, and should ideally be the result of calling a function that you are
 testing. (presumably the function being tested should return a number value). Finally,
 testName will be a string, and should describe what a call to assertWithinRange is
 verifying about the function being tested.

 The idea here is similar to when someone says, "Give me a number between 1 and 5".
 Let us further consider that what you mean is "1, 2, 3, 4, or 5", i.e. our range should be
 inclusive.
 */

 //Test case (SUCCESSFUL)
 // var blackjackScore = 20;
 // assertWithinRange(4, 21, blackjackScore, 'blackjack score should be between 4 and 21');
 // console output:
 // passed

 //Test case (SUCCESSFUL)
 // var dieRoll = 1;
 // assertWithinRange(1, 6, dieRoll, 'die roll should be between 1 and 6');
 // console output:
 // passed

 //Test case (FAILED)
 var price = 101;
 assertWithinRange(1, 100, price, 'price should be between 1 and 100');
 // console output:
 // FAIL [price should be between 1 and 100] "101" not within range 1 to 100

 function assertWithinRange(low, high, actual, testName) {

     var inRange = (low <= actual) && (actual <= high);
     if (inRange) {
         console.log('passed');
     } else {
         console.log(`FAIL [${testName}] "${actual}" not within range ${low} to ${high}`);
     }
 }
