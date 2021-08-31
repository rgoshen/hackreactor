All The Problems
Collected here are literally all of the problems contained in Module 0 of the course. Please use in any fashion you see fit.

Quick Note:
It is not necessary to complete all these problems twice - but it can help if you had trouble in the past, or failed an assessment attempt.

Module 1 will provide plenty of practice as well, so please feel free to skip this "All the Problems" lesson by Clicking Here to start Module 1 

JS Overview
1
Console Output
Question
Please open the developer console, and paste the following code within it:

var answer = 4;
console.log('should be true:', answer === 4);
After pasting the code, hit "Enter". What has been "logged to the console"?


should be true: true


true


false

RESET INPUT
CHECK ANSWER
2
Using the Console
Question
Please carefully note, the title of the challenge is "Using the Console".

While on this page, open up the developer console, and paste these lines of code. Feel free to return to the previous lesson for more details on how to accomplish this task.

var elements = document.getElementsByClassName("title");
var target = elements[1];
target.innerHTML = "DISCOVER YOUR INNER HACKER";
target.style.background = "black";
target.style.color = "white";

After pasting the code, hit "Enter". Now, carefully examine the page. What changed when you hit "Enter"?


The title of the challenged changed its contents and color.


The question box disappeared.


Several pictures appeared in the margins.


Nothing happened.

RESET INPUT
CHECK ANSWER
Variables
3
Undefined
We will start with a walkthrough that should get you started with completing challenges in this Module, as well as beyond. The task is for you to write a function that returns undefined, but that task is already complete. Please click 'RUN TESTS' to complete the problem.

JAVASCRIPT


RESET INPUT
RUN TESTS
4
Booleans
Now we are going to complete a function that takes no parameters and returns true. Add a statement that will cause this function to return true when ran.

JAVASCRIPT


RESET INPUT
RUN TESTS
5
Numbers
Next, we are going to complete a function that takes one number parameter, adds two to that number, then returns the result.

JAVASCRIPT


RESET INPUT
RUN TESTS
6
Strings
Lastly, we are going to complete a function that takes two parameters, a string and number (will refer to an index within the string). The function should return the character within the string, located at the given number index.

JAVASCRIPT


RESET INPUT
RUN TESTS
Objects (Arrays and Objects)
7
Arrays 1
We are going to complete a function that takes in an array parameter, and returns it.

JAVASCRIPT


RESET INPUT
RUN TESTS
8
Arrays 2
We are going to complete a function that takes in an array and a number (will refer to an index within the array). The function should return the element located within the array at the given number index.

JAVASCRIPT


RESET INPUT
RUN TESTS
9
Arrays 3
We are going to complete a function that takes no parameters. This function should create an array, and return it.

JAVASCRIPT


RESET INPUT
RUN TESTS
10
Objects 1
We are going to complete a function that takes in an object parameter, and returns it.

JAVASCRIPT


RESET INPUT
RUN TESTS
11
Objects 2
We are going to complete a function that takes in an object and a string (will refer to a key in the object). The function should return the value of the property located within the object at the given string key.

JAVASCRIPT


RESET INPUT
RUN TESTS
12
Objects 3
We are going to complete a function that takes no parameters. This function should create an object, and return it.

JAVASCRIPT


RESET INPUT
RUN TESTS
13
Objects 4
We are going to write a function that returns the type of argument the function has been called with (assume the argument will be scalar - not a collection).

JAVASCRIPT


RESET INPUT
RUN TESTS
14
Objects 5
We are going to write a function that returns true if the argument is an Array, and false if it is not

JAVASCRIPT


RESET INPUT
RUN TESTS
Operators and Methods
15
Using the 'not' operator
We are going to complete a function that takes in a boolean parameter, and returns the opposite. Below are examples of the code running, assuming that you will have completed the described function: opposite.

var outputTrue = opposite(false);
console.log('should be true:', outputTrue);

var outputFalse = opposite(true);
console.log('should be false:', outputFalse);
JAVASCRIPT


RESET INPUT
RUN TESTS
16
Using the 'or' operator
We are going to complete a function that takes in two boolean parameters. Your function should create a variable and assign it to the result of comparing the two input parameters using the || operator, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: eitherAreTrue.

var outputTrue = eitherAreTrue(true, false);
console.log('should be true:', outputTrue);

var outputFalse = eitherAreTrue(false, false);
console.log('should be false:', outputFalse);
JAVASCRIPT


RESET INPUT
RUN TESTS
17
Using the 'and' operator
We are going to complete a function that takes in two boolean parameters. Your function should create a variable and assign it to the result of comparing the two input parameters using the && operator, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: bothAreTrue.

var outputTrue = bothAreTrue(true, true);
console.log('should be true:', outputTrue);

var outputFalse = bothAreTrue(false, true);
console.log('should be false:', outputFalse);
JAVASCRIPT


RESET INPUT
RUN TESTS
18
A Combination of Booleans
We are going to complete a function that takes in three boolean parameters (bool_1, bool_2, and bool_3). Your function should create a variable and assign it to the result of the following: bool_1 AND either bool_2 OR bool_3. Below are examples of the code running, assuming that you will have completed the described function: combination.

var outputTrue = combination(true, true, false);
console.log('should be true:', outputTrue);

var outputFalse = combination(false, true, true);
console.log('should be false:', outputFalse);
JAVASCRIPT


RESET INPUT
RUN TESTS
19
Using the 'strict equality' operator
We are going to complete a function that takes in two scalar (boolean, number, or string) parameters. Your function should create a variable and assign it to the result of comparing the two input parameters using the === operator, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: areEqual.

var outputTrue = areEqual("happiness", "happiness");
console.log('should be true:', outputTrue);

var outputFalse = areEqual(0, false);
console.log('should be false:', outputFalse);
JAVASCRIPT


RESET INPUT
RUN TESTS
20
Using the 'strict not equality' operator
We are going to complete a function that takes in two scalar (boolean, number, or string) parameters. Your function should create a variable and assign it to the result of comparing the two input parameters using the !== operator, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: areNotEqual.

var outputTrue = areNotEqual("happiness", "sadness");
console.log('should be true:', outputTrue);

var outputFalse = areNotEqual(7, 3 + 4);
console.log('should be false:', outputFalse);
JAVASCRIPT


RESET INPUT
RUN TESTS
21
Using the `+` operator with numbers
We are going to complete a function that takes in two number parameters, and returns their sum when added together. Your function should create a variable and assign it to the result of adding the two input parameters together using the + operator, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: getSum.

var resultSum = getSum(4, 10);
console.log('should be 14:', resultSum);
JAVASCRIPT


RESET INPUT
RUN TESTS
22
Using the `-` operator with numbers
We are going to complete a function that takes in two number parameters (num1, num2), and returns their difference when num2 is subtracted from num1. Your function should create a variable and assign it to the result of subtracting num2 from num1 using the - operator, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: getDifference.

var resultDiff = getDifference(37, 19);
console.log('should be 18:', resultDiff);
JAVASCRIPT


RESET INPUT
RUN TESTS
23
Using the `*` operator with numbers
We are going to complete a function that takes in two number parameters, and returns their product when multiplied together. Your function should create a variable and assign it to the result of multiplying the number parameters together using the * operator, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: getProduct.

var resultProduct = getProduct(9, 4);
console.log('should be 36:', resultProduct);
JAVASCRIPT


RESET INPUT
RUN TESTS
24
Using the `/` operator with numbers
We are going to complete a function that takes in two number parameters (num1, num2), and returns the result of num1 divided by num2. Your function should create a variable and assign it to the result of dividing num1 by num2 using the / operator, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: getQuotient.

var resultQuotient = getQuotient(20, 4);
console.log('should be 5:', resultQuotient);
JAVASCRIPT


RESET INPUT
RUN TESTS
25
Using the `**` operator with numbers
We are going to complete a function that takes in two number parameters (num1, num2), and returns the result of raising num1 to the num2 power. Your function should create a variable and assign it to the result of raising num1 to the num2 power using the ** operator, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: getPower.

var resultPower = getPower(3, 4);
console.log('should be 81:', resultPower);
JAVASCRIPT


RESET INPUT
RUN TESTS
26
Using the `%` operator with numbers
We are going to complete a function that takes in two number parameters (num1, num2), and returns the remainder after dividing num1 by num2. Your function should create a variable and assign it to the remainder after dividing num1 by num2 using the % operator, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: getRemainder.

var resultRemainder = getRemainder(21, 6);
console.log('should be 3:', resultRemainder);
JAVASCRIPT


RESET INPUT
RUN TESTS
27
Using the `+=` operator
We are going to complete a function that takes in two number parameters (base, incrementer), and returns the result of incrementing the base by the incrementer. Your function should reassign base to the result of incrementing base by incrementer using the += operator, then return base. Below is an example of the code running, assuming that you will have completed the described function: increment.

var resultIncremented = increment(11, 5);
console.log('should be 16:', resultIncremented);
JAVASCRIPT


RESET INPUT
RUN TESTS
28
Using the `-=` operator
We are going to complete a function that takes in two number parameters (base, decrementer), and returns the result of decrementing the base by the decrementer. Your function should reassign base to the result of decrementing base by decrementer using the -= operator, then return base. Below is an example of the code running, assuming that you will have completed the described function: decrement.

var resultDecremented = decrement(17, 5);
console.log('should be 12:', resultDecremented);
JAVASCRIPT


RESET INPUT
RUN TESTS
29
Using the `*=` operator
We are going to complete a function that takes in two number parameters (base, multiplier), and returns the result of reassigning the base to be the base multiplied by the multiplier. Your function should reassign base to the result of multipling base by multiplier using the *= operator, then return base. Below is an example of the code running, assuming that you will have completed the described function: applyTimesEquals.

var resultMultiplied = applyTimesEquals(3, 5);
console.log('should be 15:', resultMultiplied);
JAVASCRIPT


RESET INPUT
RUN TESTS
30
Using the `/=` operator
We are going to complete a function that takes in two number parameters (base, divider), and returns the result of reassigning the base to be the base divided by the divider. Your function should reassign base to the result of dividing base by divider using the /= operator, then return base. Below is an example of the code running, assuming that you will have completed the described function: applyDivideEquals.

var resultDivided = applyDivideEquals(56, 7);
console.log('should be 8:', resultDivided);
JAVASCRIPT


RESET INPUT
RUN TESTS
31
Using the `Math.abs()` method
We are going to complete a function that takes in one number parameter, and returns the absolute value of said parameter. Your function should create a variable and assign it to the result of applying the Math.abs() method to the input parameter, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: getAbsoluteValue.

var result1 = getAbsoluteValue(-56);
console.log('should be 56:', result1);

var result2 = getAbsoluteValue(127);
console.log('should be 127:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
32
Using the `Math.floor()` method
We are going to complete a function that takes in one number parameter, and returns the result of rounding the number down. Your function should create a variable and assign it to the result of applying the Math.floor() method to the input parameter, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: roundDown.

var roundedDown = roundDown(6.8);
console.log('should be 6:', roundedDown);
JAVASCRIPT


RESET INPUT
RUN TESTS
33
Using the `Math.ceil()` method
We are going to complete a function that takes in one number parameter, and returns the result of rounding the number up. Your function should create a variable and assign it to the result of applying the Math.ceil() method to the input parameter, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: roundUp.

var roundedUp = roundUp(16.8);
console.log('should be 17:', roundedUp);
JAVASCRIPT


RESET INPUT
RUN TESTS
34
Using the `Number.parseInt()` method
We are going to complete a function that takes in one string parameter, representing an integer, and returns the result of parsing an integer from the input. Your function should create a variable and assign it to the result of applying the Number.parseInt() method to the input parameter, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: applyParseInt.

var parsedInteger = applyParseInt("23");
console.log('should be 23:', parsedInteger);
JAVASCRIPT


RESET INPUT
RUN TESTS
35
Using the `Number.parseFloat()` method
We are going to complete a function that takes in one string parameter, representing a float (decimal), and returns the result of parsing a float from the input. Your function should create a variable and assign it to the result of applying the Number.parseFloat() method to the input parameter, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: applyParseFloat.

var parsedFloat = applyParseFloat("101.78");
console.log('should be 101.78:', parsedFloat);
JAVASCRIPT


RESET INPUT
RUN TESTS
36
Using the `Math.random()` method
We are going to complete a function that takes in two number parameters, representing the lower and upper bounds for a random number to be generated, and returns a randomly generated number within the described bounds. Your function should create a variable and assign it to the result of generating a random number using the Math.random() method, along with the formula described above, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: generateRandomNumber.

var randomNumber = generateRandomNumber(1, 10);
console.log('should be between 1 and 10:', randomNumber);
JAVASCRIPT


RESET INPUT
RUN TESTS
37
Using the `>` operator
We are going to complete a function that takes in two number parameters (num1, num2), and returns whether num1 is greater than num2. Your function should create a variable and assign it to the result of comparing num1 to num2 using the > operator, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: applyGreaterThan.

var trueGreaterThanResult = applyGreaterThan(101, 10);
console.log('should be true:', trueGreaterThanResult);

var falseGreaterThanResult = applyGreaterThan(-13, 2);
console.log('should be false:', falseGreaterThanResult);
JAVASCRIPT


RESET INPUT
RUN TESTS
'Less than' Coding Challenge
38
Using the `<=` operator
We are going to complete a function that takes in two number parameters (num1, num2), and returns whether num1 is less than or equal to num2. Your function should create a variable and assign it to the result of comparing num1 to num2 using the <= operator, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: applyLessThanOrEqualTo.

var trueLessThanOrEqualToResult = applyLessThanOrEqualTo(11, 110);
console.log('should be true:', trueLessThanOrEqualToResult);

var falseLessThanOrEqualToResult = applyLessThanOrEqualTo(-13, -21);
console.log('should be false:', falseLessThanOrEqualToResult);
JAVASCRIPT


RESET INPUT
RUN TESTS
39
Creating a String
We are going to complete a function that takes no parameters, and returns a newly created string. Your function should create a variable and assign it to a new string, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: createString.

var resultString = createString();
console.log('should be a string type:', typeof resultString);
JAVASCRIPT


RESET INPUT
RUN TESTS
40
Accessing a Character in a String
We are going to complete a function that takes two parameters, a string and a numerical index, and returns the character in the string located at the numerical index. Your function should create a variable and assign it to an expression which accesses the character located at the numerical index, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: accessACharacter.

var resultCharacter = accessACharacter('Computer', 3);
console.log('should be "p":', resultCharacter);
JAVASCRIPT


RESET INPUT
RUN TESTS
41
Reassigning a String's Value
We are going to complete a function that takes one string parameter, and reassigns the input parameter to be "reassigned", then returns that input. Your function should not create any new variables and should reassign the input to the string "reassigned", then return the input parameter. Below are examples of the code running, assuming that you will have completed the described function: reassignAString.

var resultString1 = reassignAString('Computer Science');
console.log('should be "reassigned":', resultString1);

var resultString2 = reassignAString('Software Engineering');
console.log('should also be "reassigned":', resultString2);
JAVASCRIPT


RESET INPUT
RUN TESTS
42
Concatenate two strings
We are going to complete a function that takes in two parameters, both will be strings, and returns the two strings concatenated. Your function should create a new variable, assign it to an expression which will add together or concatenate the input strings, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: addTogetherTwoStrings.

var resultString1 = addTogetherTwoStrings('Comp', 'uter');
console.log('should be "Computer":', resultString1);

var resultString2 = addTogetherTwoStrings('Engin', 'eering');
console.log('should also be "Engineering":', resultString2);
JAVASCRIPT


RESET INPUT
RUN TESTS
43
Concatenate two strings into a full name
We are going to complete a function that takes in two parameters, both will be strings, representing a first name and a last name, and returns a full name string. Your function should create a new variable, assign it to an expression which will add together or concatenate the first and last name strings, with a space in between, then return the that variable. Below is an example of the code running, assuming that you will have completed the described function: createFullName.

var resultFullName1 = createFullName("Duevyn", "Cooke");
console.log("should log Duevyn Cooke:", resultFullName1);

var resultFullName2 = createFullName("Ada", "Lovelace");
console.log("should log Ada Lovelace:", resultFullName2);
JAVASCRIPT


RESET INPUT
RUN TESTS
44
String Interpolation
We are going to complete a function that takes in two parameters, both will be strings (activity, dayOfTheWeek), and returns a message based on the inputs. Your function should create a new variable, assign it to an expression which will interpolate the parameters into a message (described below), then return that variable. Below are examples of the code running, assuming that you will have completed the described function: interpolateAString.

var resultMessage1 = interpolateAString('hiking', 'Tuesday');
console.log("should log 'We will go hiking on Tuesday.':", resultMessage1);

var resultMessage2 = interpolateAString('dancing', 'Friday');
console.log("should log 'We will go dancing on Friday.':", resultMessage2);
JAVASCRIPT


RESET INPUT
RUN TESTS
45
Get length of string
We are going to complete a function that takes in one parameter, a string, and returns the length of that string. Your function should create a variable and assign it to the length of the input string using the .length property, and return that variable. Below are examples of the code running, assuming that you will have completed the described function: getStringLength.

var resultLength1 = getStringLength('Apple');
console.log('should log 5:', resultLength1);

var resultLength2 = getStringLength('Microsoft');
console.log('should log 9:', resultLength2);
JAVASCRIPT


RESET INPUT
RUN TESTS
46
Get last character of string
We are going to complete a function that takes in one parameter, a string, and returns the input string's last character. Your function should determine the length of the input string minus 1, and assign it to a lastIndex variable. Your function should also create a lastCharacter variable and assign it to an expression which uses lastIndex to access the last character in the string, and return the lastCharacter variable. Below are examples of the code running, assuming that you will have completed the described function: getLastCharacter.

var resultLastCharacter1 = getLastCharacter('Banana');
console.log('should log "a":', resultLastCharacter1);

var resultLastCharacter2 = getLastCharacter('Macrofirm');
console.log('should log "m":', resultLastCharacter2);
JAVASCRIPT


RESET INPUT
RUN TESTS
47
Apply substring Method
We are going to complete a function that takes in three parameters (string, start, end -> where start and end are numerical indexes), and returns a portion of the string from before start, up to, but not including, end. Your function should create a subString variable and assign it to a call of the substring() method on the string, starting from before start, up to, but not including, end, and return the subString variable. Below are examples of the code running, assuming that you will have completed the described function: applySubString.

var string1 = 'Queue';
var resultSubString1 = applySubString(string1, 1, 4);
console.log('should log "ueu":', resultSubString1);

var string2 = 'Stack Trace';
var resultSubString2 = applySubString(string2, 2, 10);
console.log('should log "ack Trac":', resultSubString2);
JAVASCRIPT


RESET INPUT
RUN TESTS
48
Apply indexOf Method
We are going to complete a function that takes in two parameters (string, subString), and returns the index of the string where the subString can be found. Your function should create an index variable and assign it to a call of the indexOf() method on the string, and passing subString as an argument, and return the index variable. Below are examples of the code running, assuming that you will have completed the described function: applyIndexOf.

var string1 = 'Quicksort';
var subString1 = 'sort';
var resultIndex1 = applyIndexOf(string1, subString1);
console.log('should log 5:', resultIndex1);

var string2 = 'size,color,cut,price';
var subString2 = 'cut';
var resultIndex2 = applyIndexOf(string2, subString2);
console.log('should log 11:', resultIndex2);
JAVASCRIPT


RESET INPUT
RUN TESTS
49
Apply toString Method
We are going to complete a function that takes in one parameter, and returns a string version of that parameter. Your function should create a stringVersion variable and assign it to a call of the toString() method on the input parameter, and return the stringVersion variable. Below are examples of the code running, assuming that you will have completed the described function: applyToString.

var input1 = 9374;
var resultString1 = applyToString(input1);
console.log('should log "9374":', resultString1);
console.log('type should be "string":', typeof resultString1);

var input2 = false;
var resultString2 = applyToString(input2);
console.log('should log "false":', resultString2);
console.log('type should be "string":', typeof resultString2);
JAVASCRIPT


RESET INPUT
RUN TESTS
50
Using Escape Characters
We are going to complete a function that takes in three string parameters (the first, second, and third lines of a haiku), and returns a string that when logged to the console, outputs the haiku in traditional format - see example above. Your function should create a haiku variable and assign it to an expression which will create one "printable onto three lines" string out of the three input strings, and return the haiku variable. Below are examples of the code running, assuming that you will have completed the described function: generateHaiku.

var resultHaiku1 = generateHaiku('In the twilight rain', 'these brilliant-hued hibiscus -', 'A lovely sunset.');
console.log('should log formatted haiku:\n', resultHaiku1);

var resultHaiku2 = generateHaiku('The lamp once out', 'Moves west, flowers\' shadows', 'Creep eastward.');
console.log('should also log formatted haiku:\n', resultHaiku2);
JAVASCRIPT


RESET INPUT
RUN TESTS
51
Creating an Array
We are going to complete a function that takes no parameters, and returns a newly created array. Your function should create a variable and assign it to a new array, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: createArray.

var resultArray = createArray();
console.log('should be an array:', Array.isArray(resultArray));
JAVASCRIPT


RESET INPUT
RUN TESTS
52
Accessing an Element in an Array
We are going to complete a function that takes two parameters, an array and a numerical index, and returns the element in the array located at the numerical index. Your function should create a variable and assign it to an expression which accesses the element located at the numerical index, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: accessAnElement.

var resultElement = accessAnElement(['Computer', 'Mouse', 'Ethernet Cable'], 1);
console.log('should be "Mouse":', resultElement);
JAVASCRIPT


RESET INPUT
RUN TESTS
53
Reassigning an Element in an Array
We are going to complete a function that takes three parameters, an array, a numerical index, a newValue, and returns the array after performing a reassignment. Your function should reassign the element within the array, located at the numerical index, to the new input value, and should then return the newly changed array. Below is an example of the code running, assuming that you will have completed the described function: reassignAnElement.

var resultArray = reassignAnElement(['desk', 'lamp', 'chewtoy'], 2, 'textbook');
console.log('should replace "chewtoy" with "textbook":', resultArray);
JAVASCRIPT


RESET INPUT
RUN TESTS
54
Get length of array
We are going to complete a function that takes in one parameter, an array, and returns the length of that array. Your function should create a variable and assign it to the length of the input array using the .length property, and return that variable. Below are examples of the code running, assuming that you will have completed the described function: getArrayLength.

var resultLength1 = getArrayLength([1, 3, 4, 5, 7]);
console.log('should log 5:', resultLength1);

var resultLength2 = getArrayLength(['a', 'b', 'c', 'd']);
console.log('should log 4:', resultLength2);
JAVASCRIPT


RESET INPUT
RUN TESTS
55
Get last element of array
We are going to complete a function that takes in one parameter, an array, and returns the input array's last element. Your function should determine the length of the input array minus 1, and assign it to a lastIndex variable. Your function should also create a lastElement variable and assign it to an expression which uses lastIndex to access the last element in the array, and return the lastElement variable. Below are examples of the code running, assuming that you will have completed the described function: getLastElement.

var resultLastElement1 = getLastElement([1, 2, "buckle", "my", "shoe"]);
console.log('should log "shoe":', resultLastElement1);

var resultLastElement2 = getLastElement([3, 4, "shut", "the", "door"]);
console.log('should log "door":', resultLastElement2);
JAVASCRIPT


RESET INPUT
RUN TESTS
56
Using .push()
We are going to complete a function that takes in two parameters, an array and an element, adds the element to the end of the array, and returns the array. Your function should use the .push() method to add the input element to the end of the input array, then return that array. Below are examples of the code running, assuming that you will have completed the described function: applyPush.

var resultArray1 = applyPush([1, 17, 29], 34);
console.log('should log [1, 17, 29, 34]:', resultArray1);

var resultArray2 = applyPush(['abc', 'def'], 'ghi');
console.log('should log ["abc", "def", "ghi"]:', resultArray2);
JAVASCRIPT


RESET INPUT
RUN TESTS
57
Using .pop()
We are going to complete a function that takes in one parameter, an array, removes the last element from the back of the array, and returns the removed element. Your function should create a popped variable, assign it to an expression using the .pop() method to remove the last element from the array, then return that popped variable. Below are examples of the code running, assuming that you will have completed the described function: applyPop.

var resultElement1 = applyPop([1, 171, 129]);
console.log('should log 129:', resultElement1);

var resultElement2 = applyPop(['islands', 'peninsulas', 'pacific']);
console.log('should log pacific:', resultElement2);
JAVASCRIPT


RESET INPUT
RUN TESTS
58
Using .unshift()
We are going to complete a function that takes in two parameters, an array and an element, adds the element to the front of the array, and returns the array. Your function should use the .unshift() method to add the input element to the front of the input array, then return that array. Below are examples of the code running, assuming that you will have completed the described function: applyUnshift.

var resultArray1 = applyUnshift([7, 9, 4], 1);
console.log('should log [1, 7, 9, 4]:', resultArray1);

var resultArray2 = applyUnshift(['ef', 'hi'], 'bc');
console.log('should log ["bc", "ef", "hi"]:', resultArray2);
JAVASCRIPT


RESET INPUT
RUN TESTS
59
Using .shift()
We are going to complete a function that takes in one parameter, an array, removes the first element from the front of the array, and returns the removed element. Your function should create a shifted variable, assign it to an expression using the .shift() method to remove the first element from the array, then return that shifted variable. Below are examples of the code running, assuming that you will have completed the described function: applyShift.

var resultElement1 = applyShift([1, 171, 129]);
console.log('should log 1:', resultElement1);

var resultElement2 = applyShift(['islands', 'peninsulas', 'pacific']);
console.log('should log islands:', resultElement2);
JAVASCRIPT


RESET INPUT
RUN TESTS
60
Using .splice() to add an element
We are going to complete a function that takes in three parameters, an array, an index, and an element, adds the element to the index of the array, without replacing any of the existing elements, and returns the array. Your function should use the .splice() method to add the input element to the input array, at the given index, and without replacing any of the existing elements, then returns the array. Below are examples of the code running, assuming that you will have completed the described function: addAnElementInGeneral.

var resultArray1 = addAnElementInGeneral([7, 9, 10], 1, 8);
console.log('should log [7, 8 , 9, 10]:', resultArray1);

var resultArray2 = addAnElementInGeneral(['q', 'r', 't'], 2, 's');
console.log('should log ["q", "r", "s", "t"]:', resultArray2);
JAVASCRIPT


RESET INPUT
RUN TESTS
61
Using .splice() to remove an element
We are going to complete a function that takes in two parameters, an array and an index, removes the element from the index of the array, and returns the array. Your function should use the .splice() method to remove the element from the input array, at the given index, then return the array. Below are examples of the code running, assuming that you will have completed the described function: removeAnElementInGeneral.

var resultArray1 = removeAnElementInGeneral([8, 9, 10, 'bad entry', 11], 3);
console.log('should log [8, 9, 10, 11]:', resultArray1);

var resultArray2 = removeAnElementInGeneral(['one', 'two', 452, 'three'], 2);
console.log('should log ["one", "two", "three"]:', resultArray2);
JAVASCRIPT


RESET INPUT
RUN TESTS
62
Using .splice() to remove and add element
We are going to complete a function that takes in four parameters, an array, an index, and two new elements, removes 2 elements, beginning at the index, adds the two new elements, and returns the array. Your function should use the .splice() method to remove two elements from the input array, at the given index, adds the two new elements in their place, then return the array. Below are examples of the code running, assuming that you will have completed the described function: applySplice.

var resultArray1 = applySplice([8, 9, 10, 'bad entry1', 'bad entry2', 13], 3, 11, 12);
console.log('should log [8, 9, 10, 11, 12, 13]:', resultArray1);

var resultArray2 = applySplice(['one', 'two', 452, 672, 'five'], 2, 'three', 'four');
console.log('should log ["one", "two", "three", "four", "five"]:', resultArray2);
JAVASCRIPT


RESET INPUT
RUN TESTS
63
Using Array.isArray()
We are going to complete a function that takes in one parameter, possibly an array, and returns whether the input in an array or not. Your function should create a variable, assign it to an expression that tells whether the input parameter is an array or not, using the Array.isArray() method, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: isAnArray.

var resultBoolean1 = isAnArray([1, 2, 3]);
console.log('should log true:', resultBoolean1);

var resultBoolean2 = isAnArray({name: 'Tom', friend: 'Jerry'});
console.log('should log false:', resultBoolean2);
JAVASCRIPT


RESET INPUT
RUN TESTS
64
Using .slice() in general
We are going to complete a function that takes in three parameters, an array and two integer indexes (start, end), and returns a portion of the array from before the start index up to, but not including, the end index. Your function should create a sliceOfArray variable and assign it to a call to the slice method on the array, starting from before start, up to, but not including, end, and return the sliceOfArray variable. Below are examples of the code running, assuming that you will have completed the described function: applySlice.

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultOfSlice1 = applySlice(array1, 1, 4);
console.log('should log ["u", "e", "u"]:', resultOfSlice1);

var array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultOfSlice2 = applySlice(array2, 2, 8);
console.log('should log [2, 3, 4, 5, 6, 7]:', resultOfSlice2);
JAVASCRIPT


RESET INPUT
RUN TESTS
65
Using .slice() to make a copy
We are going to complete a function that takes in one array parameter, and returns a copy of the array. Your function should create a copyOfArray variable and assign it to a call to the slice method on the array which will make a copy, and return the copyOfArray variable. Below are examples of the code running, assuming that you will have completed the described function: makeACopy.

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultCopy1 = makeACopy(array1);
console.log('should log ["Q", "u", "e", "u", "e"]:', resultCopy1);

var array2 = [0, 1, 2, 3, 4];
var resultCopy2 = makeACopy(array2);
console.log('should log [0, 1, 2, 3, 4]:', resultCopy2);
JAVASCRIPT


RESET INPUT
RUN TESTS
66
Using .concat()
We are going to complete a function that takes in two array parameters, and returns an array containing all of the elements of the two input arrays. Your function should create a concattedArray variable and assign it to a call to the concat method on the input array, applied to the other input array, and return the concattedArray variable. Below are examples of the code running, assuming that you will have completed the described function: applyConcat.

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f']
var resultConcat1 = applyConcat(array1, array2);
console.log('should log ["a", "b", "c", "d", "e", "f"]:', resultConcat1);

var array3 = [1, 2, 3];
var array4 = [4, 5, 6];
var resultConcat2 = applyConcat(array3, array4);
console.log('should log [1, 2, 3, 4, 5, 6]:', resultConcat2);
JAVASCRIPT


RESET INPUT
RUN TESTS
67
Using .join()
We are going to complete a function that takes in one array parameter (elements will be strings), and one string parameter, and returns a string that is the result of joining the elements of the string together, separated by the string parameter. Your function should create a joinedString variable and assign it to a call to the .join() method, and return the joinedString variable. Below are examples of the code running, assuming that you will have completed the described function: applyJoin.

var resultString1 = applyJoin(['first', 'second', 'third'], '--');
console.log('should log joined string:', resultString1);

var resultString2 = applyJoin(['git', 'commit'], ' ');
console.log('should also log joined string:', resultString2);
JAVASCRIPT


RESET INPUT
RUN TESTS
68
Using .split()
We are going to complete a function that takes in two string parameters (stringToBeSplit, splitter), and returns an array that is the result of splitting the stringToBeSplit parameter on the splitter parameter. Your function should create a splitString variable and assign it to a call to the .split() method, and return the splitString variable. Below are examples of the code running, assuming that you will have completed the described function: applySplit.

var resultArray1 = applySplit('first--second--third', '--');
console.log('should log split string:', resultArray1);

var resultArray2 = applySplit('git push origin master', ' ');
console.log('should also log split string:', resultArray2);
JAVASCRIPT


RESET INPUT
RUN TESTS
69
Apply indexOf Method to an Array
We are going to complete a function that takes in two parameters (array, element), and returns the index of the array where the element can be found. Your function should create an index variable and assign it to a call of the indexOf() method on the array, and passing element as an argument, and return the index variable. Below are examples of the code running, assuming that you will have completed the described function: applyIndexOfToArray.

var array1 = ['Quick', 'sort', 'is', 'wild'];
var element1 = 'sort';
var resultIndex1 = applyIndexOfToArray(array1, element1);
console.log('should log 1:', resultIndex1);

var array2 = ['size', 'color', 'cut', 'price'];
var element2 = 'style';
var resultIndex2 = applyIndexOfToArray(array2, element2);
console.log('should log -1:', resultIndex2);
JAVASCRIPT


RESET INPUT
RUN TESTS
70
Creating an Object
We are going to complete a function that takes no parameters, and returns a newly created object. Your function should create a variable and assign it to a new object, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: createObject.

var resultObject = createObject();
console.log('should be an object:', typeof resultObject);
console.log('should not be an array:', Array.isArray(resultObject));
JAVASCRIPT


RESET INPUT
RUN TESTS
71
Accessing a Property in an Object
We are going to complete a function that takes two parameters, an object and a string key, and returns the value for a property in the object located at the string key. Your function should create a variable and assign it to an expression which accesses the value of the property located at the string key, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: accessAProperty.

var resultValue = accessAProperty({machine: 'Computer', type: 'Macbook', ram: '2 GHz'}, 'ram');
console.log('should be "2 GHz":', resultValue);
JAVASCRIPT


RESET INPUT
RUN TESTS
72
Reassigning a Property's Value in an Object
We are going to complete a function that takes three parameters, an object, a string key, and a newValue, and returns the object after performing a reassignment. Your function should reassign the property's value within the object, located at the string key, to the newValue parameter, and should then return the newly changed object. Below is an example of the code running, assuming that you will have completed the described function: reassignAProperty.

var resultObject = reassignAProperty({name: 'Ramses', favoriteFood: 'chicken', type: 'dog'}, 'favoriteFood', 'goose');
console.log('should replace "chicken" with "goose":', resultObject);
JAVASCRIPT


RESET INPUT
RUN TESTS
73
Using 'delete' to remove a property
We are going to complete a function that takes in two parameters, an object and an key, removes the property located at the input key from the object, and returns the object. Your function should use the delete operator to remove the property at the given key from the input object, then return the object. Below are examples of the code running, assuming that you will have completed the described function: removeAProperty.

var resultObject1 = removeAProperty({q: 9, r: 10, text: 'bad entry'}, 'text');
console.log('should log {q: 9, r: 10}:', resultObject1);

var resultObject2 = removeAProperty({first: 'one', second: 'two', why: 452, third: 'three'}, 'why');
console.log('should log {first: "one", second: "two", third: "three"}:', resultObject2);
JAVASCRIPT


RESET INPUT
RUN TESTS
74
Determine if Property is Present
We are going to complete a function that takes in two parameters an object and a key, and returns whether the object has a property at the given key. Your function should create an isPresent variable and assign it to a comparison between the object's value at the given key and undefined, and return the isPresent variable. Below are examples of the code running, assuming that you will have completed the described function: isPropertyPresent.

var object1 = {
  a: 1,
  b: 2
}
var key1 = 'c';
var result1 = isPropertyPresent(object1, key1);
console.log('should log false:', result1);

var object2 = {
  'size': 'M',
  'color': 'green',
  'cut': 'tapered',
  'price': 30
};
var key2 = 'cut';
var result2 = isPropertyPresent(object2, key2);
console.log('should log true:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
75
Determine if a value is an Object
We are going to complete a function that takes in one parameter, possibly an object, and returns whether the input in an object or not. Your function should create several variables (isObject, isNotAnArray, and isObjectAndNotAnArray). Assign isObject to an application of the typeof operator to the input. Assign isNotAnArray to a call to the Array.isArray() method with the ! operator applied as well. Assign isObjectAndNotAnArray to the two previous variabes combined with the && operator, and return the isObjectAndNotAnArray variable. Below are examples of the code running, assuming that you will have completed the described function: isAnObject.

var resultBoolean1 = isAnObject([1, 2, 3]);
console.log('should log false:', resultBoolean1);

var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
console.log('should log true:', resultBoolean2);
JAVASCRIPT


RESET INPUT
RUN TESTS
76
Using Object.keys()
We are going to complete a function that takes in one parameter, an object. Your function should create a keys variable, and assign it to an expression which generates an array of all of the keys in said object by calling Object.keys(), then return that keys variable. Below is an example of the code running, assuming that you will have completed the described function: getAllKeys.

var resultKeys = getAllKeys({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log ["firstScore", "secondScore", "thirdScore"]:', resultKeys);
JAVASCRIPT


RESET INPUT
RUN TESTS
77
Using Object.values()
We are going to complete a function that takes in one parameter, an object. Your function should create a values variable, and assign it to an expression which generates an array of all of the values in said object by calling Object.values(), then return that values variable. Below is an example of the code running, assuming that you will have completed the described function: getAllValues.

var resultValues = getAllValues({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log [12, 34, 28]:', resultValues);
JAVASCRIPT


RESET INPUT
RUN TESTS
78
Using .unshift() again
We are going to complete a function that takes in three parameters, a nested array of arrays, an index, and an element, then adds the element to the front of the inner array located at the index within the input array of arrays, and returns the array of arrays. Your function should use the .unshift() method to add the input element to the front of the inner array located at the given index of the array of arrays, then return that array of arrays. Below are examples of the code running, assuming that you will have completed the described function: applyUnshiftAgain.

var resultArray1 = applyUnshiftAgain([ [1, 3], [10, 11], [9, 4] ], 1, 5);
console.log('should log [ [1, 3], [5, 10, 11], [9, 4] ]:', resultArray1);

var resultArray2 = applyUnshiftAgain([ ['ag', 'bc'], ['ef', 'hi'] ], 0, 'iq');
console.log('should log [ ["iq", "ag", "bc"], ["ef", "hi"] ]:', resultArray2);
JAVASCRIPT


RESET INPUT
RUN TESTS
79
Using Array.isArray() again
We are going to complete a function that takes in two parameters, one value is an object, possibly containing an array, as well as a key in that object, and returns whether the value located at the key is an array or not. Your function should create a variable, assign it to an expression that tells whether the input object's value located at the input key is an array or not, using the Array.isArray() method, then return that created variable. Below are examples of the code running, assuming that you will have completed the described function: isAnArrayAgain.

var resultBoolean1 = isAnArrayAgain({key1: [1, 2, 3], key2: 'gg'}, 'key1');
console.log('should log true:', resultBoolean1);

var resultBoolean2 = isAnArrayAgain({name: 'Tom', friend: 'Jerry'}, 'friend');
console.log('should log false:', resultBoolean2);
JAVASCRIPT


RESET INPUT
RUN TESTS
80
Using Object.keys() again
We are going to complete a function that takes in two parameters, an object and a key. Your function should create a keys variable, and assign it to an expression which generates an array of all of the keys in the nested object located within the input object, by calling Object.keys(), then return that keys variable. Below is an example of the code running, assuming that you will have completed the described function: getAllKeysAgain.

var resultKeys = getAllKeysAgain({firstScore: {part1: 12, part2: 14, part3: 10}, secondScore: 34, thirdScore: 28}, 'firstScore');
console.log('should log ["par1", "part2", "part3"]:', resultKeys);
JAVASCRIPT


RESET INPUT
RUN TESTS
81
Using 'delete' to remove a property again
We are going to complete a function that takes in three parameters, an array, an index, and an key, removes the property specified by the input key, located within an object, located at the given index within the input array, and returns the input array. Your function should use the delete operator to remove the property specified by the input key, located within an object, located at the given index within the input array, and returns the input array. Below are examples of the code running, assuming that you will have completed the described function: removeAPropertyAgain.

var resultObject1 = removeAPropertyAgain([{q: 9, r: 10, text: 'bad entry'}, {a: 1, b: 2}], 0, 'text');
console.log('should log [{q: 9, r: 10}, {a: 1, b: 2}]:', resultObject1);

var resultObject2 = removeAPropertyAgain([{key: 'value'}, {first: 'one', second: 'two', why: 452, third: 'three'}], 1, 'why');
console.log('should log [{key: "value"}, {first: "one", second: "two", third: "three"}]:', resultObject2);
JAVASCRIPT


RESET INPUT
RUN TESTS
Conditionals
82
IF statement with undefined
We are going to complete a function that takes in one parameter, determines if that parameter is defined, and returns a specific string if it is. Your function should use an if statement to determine if the input parameter is defined, and if it is, should return the string 'Input is defined'. Below are examples of the code running, assuming that you will have completed the described function: isItUndefined.

var result1 = isItUndefined('anything');
console.log('should log "Input is defined":', result1);

var result2 = isItUndefined();
console.log('Should log undefined, because function returned nothing:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
83
IF statement with numbers
We are going to complete a function that takes in two parameters, both numbers representing totals for apples and oranges, determines if there are fewer apples than oranges, and if so, returns a specific string. Your function should use an if statement to determine if there are fewer apples than oranges, and if there are, should return the string 'There are fewer apples than oranges'. Below are examples of the code running, assuming that you will have completed the described function: fewerApples.

var result1 = fewerApples(4, 7);
console.log('should log "There are fewer apples than oranges":', result1);

var result2 = fewerApples(19, 12);
console.log('Should log undefined, because function returned nothing:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
84
IF statement with a string
We are going to complete a function that takes in one parameter, a string representing a password, determines if the string is both longer than 4, and less than 15, characters long, and if it is returns a specific string. Your function should use an if statement to determine if the input string is both long enough, and not too long, and if it is, should return the string 'Password length is valid'. Below are examples of the code running, assuming that you will have completed the described function: validLengthPassword.

var result1 = validLengthPassword('passwordyfurdy');
console.log('should log "Password length is valid":', result1);

var result2 = validLengthPassword('pass');
console.log('Should log undefined, because function returned nothing:', result2);

var result3 = validLengthPassword('this is clearly too long of a password');
console.log('Should log undefined, because function returned nothing:', result3);
JAVASCRIPT


RESET INPUT
RUN TESTS
85
IF statement with an array
We are going to complete a function that takes in two parameters, an array of agents in the field, and an agent to search for within that array, determines if the agent to search for is present within the array, and if it is, returns a specific string. Your function should use an if statement to determine if the agent to search for is present within the list of agents, and if it is, should return the string '{agentToSearchFor} is present within Agent list', where {agentToSearchFor} has the value of the argument the function is called on. Below are examples of the code running, assuming that you will have completed the described function: findAgent.

var result1 = findAgent(['001', '005', '007', '009'], '007');
console.log('should log "007 is present within Agent list":', result1);

var result2 = findAgent(['tiny', 'teeny', 'eeny', 'meany'], 'teeny');
console.log('should log "teeny is present within Agent list":', result2);

var result3 = findAgent(['red', 'blue', 'green'], 'orange');
console.log('Should log undefined, because function returned nothing:', result3);
JAVASCRIPT


RESET INPUT
RUN TESTS
86
IF statement with an object
We are going to complete a function that takes in two parameters, an object containing the report totals for various teams, and the string name of a team, and determines if the given team has surpassed their goal of 5 reports, and if they have, returns a specific string. Your function should use an if statement to determine if the team in question has surpassed their goal of 5 reports, and if they have, should return the string '{teamName} has surpassed goal with {number_of_reports_for_team} reports', where {teamName} has the value of the second argument the function is called on, and {number_of_reports_for_team} is the number of reports in the inputted object argument for {teamName}. Below are examples of the code running, assuming that you will have completed the described function: generateReportSummary.

var result1 = generateReportSummary({a_team: 12, b_team: 7, c_team: 0}, 'b_team');
console.log('should log "b_team has surpassed goal with 7 reports":', result1);

var result2 = generateReportSummary({blue: 18, red: 8, green: 12}, 'blue');
console.log('should log "blue has surpassed goal with 18 reports":', result2);

var result3 = generateReportSummary({gamma: 1, epsilon: 3, alpha: 4, bravo: 17}, 'alpha');
console.log('Should log undefined, because function returned nothing:', result3);
JAVASCRIPT


RESET INPUT
RUN TESTS
IF ELSE statement Coding Challenges
87
IF ELSE statement with truthy/falsy
HINT: see "truthy vs. falsy" at end of Booleans Operators and Methods Lesson

We are going to complete a function that takes in one parameter, determines if that parameter is truthy or falsy, and returns a specific string for each case. Your function should use an if else statement to determine if the input parameter is truthy, and if it is, should return the string 'Input is truthy', or, if the input parameter is falsy, should return the string 'Input is falsy'. Below are examples of the code running, assuming that you will have completed the described function: isItTruthy.

var result1 = isItTruthy('anything');
console.log('should log "Input is truthy":', result1);

var result2 = isItTruthy();
console.log('should log "Input is falsy":', result2);

var result3 = isItTruthy("");
console.log('should log "Input is falsy":', result3);

var result4 = isItTruthy(false);
console.log('should log "Input is falsy":', result4);
JAVASCRIPT


RESET INPUT
RUN TESTS
88
IF ELSE statement with numbers
We are going to complete a function that takes in two parameters, both numbers representing totals for dogs and cats, determines if dogs are more than 8 and cats are fewer than 9, and returns a specific string for each case. Your function should use an if else statement to determine if there are both more than 8 dogs and fewer than 9 cats, and if there are, should return the string 'number of cats and dogs is acceptable', and if not, should return the string 'number of cats or dogs is not acceptable'. Below are examples of the code running, assuming that you will have completed the described function: balancePets.

var result1 = balancePets(9, 8);
console.log('should log "number of cats and dogs is acceptable":', result1);

var result2 = balancePets(7, 12);
console.log('should log "number of cats or dogs is not acceptable":', result2);

var result3 = balancePets(7, 7);
console.log('should log "number of cats or dogs is not acceptable":', result3);

var result4 = balancePets(5, 14);
console.log('should log "number of cats or dogs is not acceptable":', result4);
JAVASCRIPT


RESET INPUT
RUN TESTS
89
IF ELSE statement with a string
We are going to complete a function that takes in one parameter, a string representing a password, determines whether the password is longer than 8 characters, and returns a specific string for each case. Your function should use an if else statement to determine if the input string is long enough, and if it is, should return the string 'Password is long enough', and if it is not, should return the string 'Please enter a password of at least 9 characters'. Below are examples of the code running, assuming that you will have completed the described function: passwordLongEnough.

var result1 = passwordLongEnough('passafassaword');
console.log('should log "Password is long enough":', result1);

var result2 = passwordLongEnough('wordpass');
console.log('Should log "Please enter a password of at least 9 characters":', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
90
IF ELSE statement with an array
We are going to complete a function that takes in two parameters, an array of ingredients for a recipe, and an ingredient to search for within that array, determines whether the ingredient to search for is present within the array, and returns a specific string for each case. Your function should use an if else statement to determine if the ingredient to search for is present within the list of ingredients, and if it is, should return the string '{ingredientToSearchFor} is on the list', and if not, should return the string '{ingredientToSearchFor} is not on the list', where {ingredientToSearchFor} has the value of the argument the function is called on. Below are examples of the code running, assuming that you will have completed the described function: findIngredient.

var result1 = findIngredient(['flour', 'butter', 'sugar', 'eggs'], 'sugar');
console.log('should log "sugar is on the list":', result1);

var result2 = findIngredient(['milk', 'cereal', 'fruit'], 'pop-tarts');
console.log('should log "pop-tarts is not on the list":', result2);

JAVASCRIPT


RESET INPUT
RUN TESTS
91
IF ELSE statement with an object
We are going to complete a function that takes in one parameter, an object containing the fruit totals for a project, and determines whether the listed total for bananas is greater than 3 and the listed total for strawberries is greater than 10, and returns a specific string for each case. Your function should use an if else statement to determine if the totals of bananas and strawberries are sufficient, and if they are, should return the string 'We have enough fruit, with ' + {totalBananas} + ' bananas, and ' + {totalStrawberries} + ' strawberries', where {totalBananas} and {totalStrawberries} are the numbers of each fruit in the fruit totals object. If they are not, your function should return the string 'We do not have enough of both fruits'. Below are examples of the code running, assuming that you will have completed the described function: measureRequiredFruit.

var result1 = measureRequiredFruit({bananas: 4, strawberries: 12});
console.log('should log "We have enough fruit, with 4 bananas, and 12 strawberries":', result1);

var result2 = measureRequiredFruit({bananas: 5, strawberries: 15});
console.log('should log "We have enough fruit, with 5 bananas, and 15 strawberries":', result2);

var result3 = measureRequiredFruit({bananas: 2, strawberries: 12});
console.log('should log "We do not have enough of both fruits":', result3);

var result4 = measureRequiredFruit({bananas: 5, strawberries: 8});
console.log('should log "We do not have enough of both fruits":', result4);

var result5 = measureRequiredFruit({bananas: 3, strawberries: 9});
console.log('should log "We do not have enough of both fruits":', result5);
JAVASCRIPT


RESET INPUT
RUN TESTS
92
IF ELSE IF statement (1)
We are going to complete a function that takes in one parameter, a string representing the choice of Player 1 in a game of rock/paper/scissors, and returns a specific string for four different cases. Your function should use an if else if statement to determine which choice the player has made, then should return: 'Player 1 chose rock'; 'Player 1 chose paper'; 'Player 1 chose scissors'; or, 'Player 1 has chosen poorly!', depending upon the value of the input parameter. Below are examples of the code running, assuming that you will have completed the described function: player1Choice.

var result1 = player1Choice('rock');
console.log('should log "Player 1 chose rock":', result1);

var result2 = player1Choice('paper');
console.log('should log "Player 1 chose paper":', result2);

var result3 = player1Choice('scissors');
console.log('should log "Player 1 chose scissors":', result3);

var result4 = player1Choice('gun');
console.log('should log "Player 1 has chosen poorly!":', result4);
JAVASCRIPT


RESET INPUT
RUN TESTS
93
IF ELSE IF statement (2)
We are going to complete a function that takes in one parameter, a number called shirtWidth, and returns a specific string for four different cases. Your function should use an if else if statement to determine which size t-shirt is appropriate based on the following conditions: if the shirtWidth is greater than or equal to 20, and less than 30, the function returns 'You should select a size S'; if the shirtWidth is greater than or equal to 30, and less than 40, the function returns 'You should select a size M'; if the shirtWidth is greater than or equal to 40, and less than 50, the function returns 'You should select a size L'. If none of these conditions is met, the function returns 'You should select a different shirt'. Below are examples of the code running, assuming that you will have completed the described function: selectShirtSize.

var result1 = selectShirtSize(25);
console.log('should log "You should select a size S":', result1);

var result2 = selectShirtSize(32);
console.log('should log "You should select a size M":', result2);

var result3 = selectShirtSize(47);
console.log('should log "You should select a size L":', result3);

var result4 = selectShirtSize(12);
console.log('should log "You should select a different shirt":', result4);

var result5 = selectShirtSize(67);
console.log('should log "You should select a different shirt":', result5);
JAVASCRIPT


RESET INPUT
RUN TESTS
94
IF ELSE IF statement (3)
We are going to complete a function that takes in three parameters, an object (recipeMinimums) containing required amounts for two ingredients (tomatoes, onions) in a recipe, and then two numbers representing the current stock of those ingredients (stockTomatoes, and stockOnions), and returns a specific string for four different cases. Your function should use an if else if statement to determine the correct output. If both the stock of onions and tomatoes are less than the recipe minimums, your function should return 'We need more tomatoes and more onions'. If the stock of tomatoes is greater than or equal to the recipe minimum, but the stock of onions is less than the recipe minimum, your function should return 'We have enough tomatoes, but need more onions.' If the stock of tomatoes is less than the recipe minimum, but the stock of onions is greater than or equal to the recipe minimum, your function should return 'We have enough onions, but need more tomatoes'. Finally, if the stock of both ingredients is sufficient, your function should return 'We have enough tomatoes and onions. There will be {excessTomatoes} extra tomato, and {excessOnions} extra onion.', where {excessTomatoes} and {excessOnions} are the number of tomatoes and onions in excess of the minimum that the are in stock (e.g. see example above). Below are examples of the code running, assuming that you will have completed the described function: verifyStock.

var result1 = verifyStock({tomatoes: 3, onions: 7}, 5, 8);
console.log('should log "We have enough tomatoes and onions. There will be 2 extra tomato, and 1 extra onion.":', result1);

var result2 = verifyStock({tomatoes: 5, onions: 1}, 10, 4);
console.log('should log "We have enough tomatoes and onions. There will be 5 extra tomato, and 3 extra onion.":', result2);

var result3 = verifyStock({tomatoes: 2, onions: 4}, 1, 1);
console.log('should log "We need more tomatoes and more onions.":', result3);

var result4 = verifyStock({tomatoes: 4, onions: 2}, 3, 4);
console.log('should log "We have enough onions, but need more tomatoes.":', result4);

var result5 = verifyStock({tomatoes: 10, onions: 6}, 11, 4);
console.log('should log "We have enough tomatoes, but need more onions.":', result5);
JAVASCRIPT


RESET INPUT
RUN TESTS
95
Convert Score To Grade
Write a function called "convertScoreToGrade".

Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

Notes:

(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'
If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
var output = convertScoreToGrade(91);
console.log(output); // --> 'A'
JAVASCRIPT


RESET INPUT
RUN TESTS
Loops (and Iteration)
96
While loop over a series of numbers
We are going to complete a function that takes two parameters, both will be integers (start, end), and logs to the console, all of the integers starting with start, and ending with end. Your function should use a while loop to log each integer from start, up to and including end, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopASequence.

loopASequence(2, 5);
// console output:
  // 2
  // 3
  // 4
  // 5

loopASequence(3, 7);
// console output:
  // 3
  // 4
  // 5
  // 6
  // 7
JAVASCRIPT


RESET INPUT
RUN TESTS
97
While loop over an array
We are going to complete a function that takes one parameter, an array of elements, and logs all of its elements (one at a time) to the console. Your function should use a while loop to log each element from the beginning to the end of the array, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnArray.

loopAnArray(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArray([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5
JAVASCRIPT


RESET INPUT
RUN TESTS
98
While loop over a string
We are going to complete a function that takes one parameter, a string of characters, and logs all of its characters (one at a time) to the console. Your function should use a while loop to log each character from the beginning to the end of the string, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAString.

loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d
JAVASCRIPT


RESET INPUT
RUN TESTS
99
For loop over a series of numbers
We are going to complete a function that takes two parameters, both will be integers (start, end), and logs to the console, all of the integers starting with start, and ending with end. Your function should use a for loop to log each integer from start, up to and including end, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopASequenceAgain.

loopASequenceAgain(2, 5);
// console output:
  // 2
  // 3
  // 4
  // 5

loopASequenceAgain(3, 7);
  // console output:
    // 3
    // 4
    // 5
    // 6
    // 7
JAVASCRIPT


RESET INPUT
RUN TESTS
100
For loop over an array
We are going to complete a function that takes one parameter, an array of elements, and logs all of its elements (one at a time) to the console. Your function should use a for loop to log each element from the beginning to the end of the array, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnArrayAgain.

loopAnArrayAgain(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArrayAgain([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5
JAVASCRIPT


RESET INPUT
RUN TESTS
101
For loop over a string
We are going to complete a function that takes one parameter, a string of characters, and logs all of its characters (one at a time) to the console. Your function should use a for loop to log each character from the beginning to the end of the string, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAStringAgain.

loopAStringAgain('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAStringAgain('abcd');
// console output:
  // a
  // b
  // c
  // d
JAVASCRIPT


RESET INPUT
RUN TESTS
102
Loop over every other value
We are going to complete a function that takes one parameter, an array of elements, and logs every other one of its elements, beginning at index 0, to the console. Your function should use a loop to log every other element from the beginning, skipping every other element, until either end of the array, or one shy of the end (depending on odd or even length of the array passed), then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopEveryOther.

loopEveryOther(['a', 'b', 'c', 'd']);
// console output:
  // a
  // c

loopEveryOther([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 3
  // 5
JAVASCRIPT


RESET INPUT
RUN TESTS
103
Loop starting at a specific index
We are going to complete a function that takes two parameters, an array of elements, and an index, and logs every element, beginning at the inputted index (one at a time) to the console. Your function should use a loop to log every element from the inputted index, until the end of the array, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopStartingAtIndex.

loopStartingAtIndex(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // c
  // d
  // e

loopStartingAtIndex([1, 2, 3, 4, 5], 3);
// console output:
  // 4
  // 5
JAVASCRIPT


RESET INPUT
RUN TESTS
104
Loop in reverse order
We are going to complete a function that takes one parameter, an array of elements, and logs every element, beginning at the back of the input array and ending at the front of the input array, to the console. Your function should use a loop to log every element from the back of the array, up to the front of the array, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopInReverse.

loopInReverse(['a', 'b', 'c', 'd']);
// console output:
  // d
  // c
  // b
  // a

loopInReverse([1, 2, 3, 4]);
// console output:
  // 4
  // 3
  // 2
  // 1
JAVASCRIPT


RESET INPUT
RUN TESTS
105
Use a 'continue' statement
We are going to complete a function that takes two parameters, an array of elements and an index, and logs every element, except for the element at the input index, to the console. Your function should use a loop to log every element except one at the inputted index, and should also use a continue statement (must use a semi-colon after continue for tests to pass) to skip over the value at the inputted index, then return nothing. Your code should NOT use else. Below is an example of the code running, assuming that you will have completed the described function: useContinue.

useContinue(['a', 'b', 'c', 'd'], 1);
// console output:
  // a
  // c
  // d


useContinue([1, 2, 3, 4], 2);
// console output:
  // 1
  // 2
  // 4
JAVASCRIPT


RESET INPUT
RUN TESTS
Using break Coding Challenge
106
Use a 'break' statement
We are going to complete a function that takes two parameters, an array of elements and an index, and logs every element, except those whose index is greater than the input index. Your function should use a loop to log every element up to and including the element located at the input index, and should also use a break statement (must use a semi-colon after break for tests to pass) to skip over the values with indexes greater than that of the input index, then return nothing. Your code should NOT use else. Below is an example of the code running, assuming that you will have completed the described function: useBreak.

useBreak(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // a
  // b
  // c


useBreak([1, 2, 3, 4, 5, 6], 3);
// console output:
  // 1
  // 2
  // 3
  // 4
JAVASCRIPT


RESET INPUT
RUN TESTS
107
For-in loop over an object (1)
We are going to complete a function that takes one parameter, an object of properties, and logs all of its keys (one at a time) to the console. Your function should use a for-in loop to log each key in the object, then return nothing. DO NOT USE Object.keys() in your solution. Below is an example of the code running, assuming that you will have completed the described function: loopOverKeys.

loopOverKeys({a: 1, b: 2, c: 3});
// console output:
  // a
  // b
  // c

loopOverKeys({make: 'Ford', model: 'T', year: 1913});
// console output:
  // make
  // model
  // year
JAVASCRIPT


RESET INPUT
RUN TESTS
108
For-in loop over an object (2)
We are going to complete a function that takes one parameter, an object of properties, and logs all of its values (one at a time) to the console. Your function should use a for-in loop to log each value in the object, then return nothing. DO NOT USE Object.values() in your solution. Below is an example of the code running, assuming that you will have completed the described function: loopOverValues.

loopOverValues({a: 1, b: 2, c: 3});
// console output:
  // 1
  // 2
  // 3

loopOverValues({make: 'Ford', model: 'T', year: 1913});
// console output:
  // Ford
  // T
  // 1913
JAVASCRIPT


RESET INPUT
RUN TESTS
109
For loop over an array of arrays
We are going to complete a function that takes one parameter, an array of arrays, and logs all of its elements (log each element in first inner array, start to end, then second inner array, and so on...) to the console. Your function should use a nested for loop to log each element from all inner arrays, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnArrayOfArrays.

loopAnArrayOfArrays([ ['a', 'b', 'c'], ['d', 'e', 'f'] ]);
// console output:
  // a
  // b
  // c
  // d
  // e
  // f

loopAnArrayOfArrays([ [1, 2], [3, 4], [5], [6, 7, 8] ]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
JAVASCRIPT


RESET INPUT
RUN TESTS
110
For-in loop over an object of objects
We are going to complete a function that takes one parameter, a object of objects, and logs all of its values (log each value in first inner object, one at a time, then second inner object, and so on...) to the console. Your function should use a nested for-in loop to log each value from all inner objects, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnObjectOfObjects.

loopAnObjectOfObjects({ a: {a: 1, b: 2}, b: {a: 5, b: 6} });
// console output:
  // 1
  // 2
  // 5
  // 6

loopAnObjectOfObjects({ structures: {queue: true, stack: false}, plantLife: {tree: 'leaves'}, letters: {apple: 'a', bag: 'b', cats: 'c'} });
// console output:
  // true
  // false
  // leaves
  // a
  // b
  // c
JAVASCRIPT


RESET INPUT
RUN TESTS
111
Loop over an array of objects
We are going to complete a function that takes one parameter, a array of objects, and logs all of its values (log each value in first inner object, one at a time, then second inner object, and so on...) to the console. Your function should use a for-in loop nested inside of a for loop to log each value from all inner objects, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnArrayOfObjects.

loopAnArrayOfObjects([{a: 1, b: 2}, {z: 5, y: 6}, {q: 14} ]);
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14

loopAnArrayOfObjects([{queue: false, stack: true}, {fish: 'swims'}, {shirt: 's', pop: 'p', eye: 'e'} ]);
// console output:
  // false
  // true
  // swims
  // s
  // p
  // e
JAVASCRIPT


RESET INPUT
RUN TESTS
112
Loop over an object of arrays
We are going to complete a function that takes one parameter, a object of arrays, and logs all of its values (log each value in first inner array, one at a time, then second inner array, and so on...) to the console. Your function should use a for loop nested inside of a for-in loop to log each value from all inner arrays, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnObjectOfArrays.

loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14
  // 21

loopAnObjectOfArrays({ third: [false, false], fourth: ['runs'], ninth: ['q', 'l', 'z'] });
// console output:
  // false
  // false
  // runs
  // q
  // l
  // z
JAVASCRIPT


RESET INPUT
RUN TESTS
113
List all combinations of two arrays
We are going to complete a function that takes two parameters, both arrays, and logs all possible combinations of elements separated by a space (see example for details...) to the console. Your function should use a nested for loop to log all combinations of the two arrays, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: generateCombinations.

generateCombinations(['a', 'b', 'c'], ['d', 'e', 'f']);
// console output:
  // a d
  // a e
  // a f
  // b d
  // b e
  // b f
  // c d
  // c e
  // c f

generateCombinations([1, 2], ['buckle', 'my', 'shoe']);
// console output:
  // 1 buckle
  // 1 my
  // 1 shoe
  // 2 buckle
  // 2 my
  // 2 shoe
JAVASCRIPT


RESET INPUT
RUN TESTS
Functions
114
filterOddElements
Write a function called "filterOddElements".

Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array. If the input array contains no odd numbered elements, your function should return an empty array.

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
JAVASCRIPT


RESET INPUT
RUN TESTS
115
computeSumOfAllElements
Write a function called "computeSumOfAllElements".

Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array. If input array is empty, your function should return 0.

var result1 = computeSumOfAllElements([1, 2, 3]);
console.log('should log 6:', result1);

var result2 = computeSumOfAllElements([]);
console.log('should log 0:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
116
Generate Average of Elements
Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average. If input array is empty, your function should return 0.

var input1 = [1,2,3,4,5];
var result1 = computeAverageOfNumbers(input1);
console.log('should log 3:', result1);

var input2 = [];
var result2 = computeAverageOfNumbers(input2);
console.log('should log 0:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
117
Debugging (1)
We are going to debug a function that takes in an object, and a target value. This function will iterate over the object's values, and attempt to locate the target value. If the value is found, the function should return the name of the key where the value in question is located, and if not, the function should return -1. Below is an example of the code running, assuming that you will have debugged the described function: keyOfObjectValue:

var result1 = keyOfObjectValue({cucumbers: 14, carrots: 20, peas: 400}, 20);
console.log('should log "carrots":', result1);

var result2 = keyOfObjectValue({name: 'Bruce Wayne', hero: 'Batman', city: 'Gotham'}, 'Superman');
console.log('should log -1:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
118
Debugging (2)
We are going to debug a function that takes in an array of numbers. This function will iterate over the array's number elements, and return a count representing the number of elements whose value is greater than 40. If there are no values above 40, then the function should return 0. Below is an example of the code running, assuming that you will have debugged the described function: getElementsAbove40:

var result1 = getElementsAbove40([1, 42, 5, 314, 2, 89]);
console.log('should log 3:', result1);

var result2 = getElementsAbove40([1, 4, 3, 2, 6]);
console.log('should log 0:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
119
Debugging (3)
We are going to debug a function that takes in an array of strings, representing words in a sentence. This function should iterate over the input array and should create, and return, a resulting sentence from the words therein. Below is an example of the code running, assuming that you will have debugged the described function: createSentence:

var result1 = createSentence(['I', 'am', 'worth', 'it']);
console.log('should log "I am worth it.":', result1);

var result2 = createSentence(['My', 'problems', 'matter']);
console.log('should log "My problems matter.":', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
120
Use an object to count words in a sentence
Write a function called "countWords".

Given a string (words separated by spaces), "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string. If given an empty string, your function should return an empty object.

var result1 = countWords('ask a bunch get a bunch');
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

var result2 = countWords('');
console.log('should log "{}":', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
121
Use an object to count letters in a word
Write a function called "countAllCharacters".

Given a string of characters, "countAllCharacters" returns an object where each key is a character in the given string, with its value being how many times that character appeared in the given string. If given an empty string, your function should return an empty object.

var result1 = countAllCharacters('banana');
console.log('should log "{b: 1, a: 3, n: 2}":', result1);

var result2 = countAllCharacters('');
console.log('should log "{}":', result2);
JAVASCRIPT


RESET INPUT
RUN TESTSAll The Problems
Collected here are literally all of the problems contained in Module 0 of the course. Please use in any fashion you see fit.

Quick Note:
It is not necessary to complete all these problems twice - but it can help if you had trouble in the past, or failed an assessment attempt.

Module 1 will provide plenty of practice as well, so please feel free to skip this "All the Problems" lesson by Clicking Here to start Module 1 

JS Overview
1
Console Output
Question
Please open the developer console, and paste the following code within it:

var answer = 4;
console.log('should be true:', answer === 4);
After pasting the code, hit "Enter". What has been "logged to the console"?


should be true: true


true


false

RESET INPUT
CHECK ANSWER
2
Using the Console
Question
Please carefully note, the title of the challenge is "Using the Console".

While on this page, open up the developer console, and paste these lines of code. Feel free to return to the previous lesson for more details on how to accomplish this task.

var elements = document.getElementsByClassName("title");
var target = elements[1];
target.innerHTML = "DISCOVER YOUR INNER HACKER";
target.style.background = "black";
target.style.color = "white";

After pasting the code, hit "Enter". Now, carefully examine the page. What changed when you hit "Enter"?


The title of the challenged changed its contents and color.


The question box disappeared.


Several pictures appeared in the margins.


Nothing happened.

RESET INPUT
CHECK ANSWER
Variables
3
Undefined
We will start with a walkthrough that should get you started with completing challenges in this Module, as well as beyond. The task is for you to write a function that returns undefined, but that task is already complete. Please click 'RUN TESTS' to complete the problem.

JAVASCRIPT


RESET INPUT
RUN TESTS
4
Booleans
Now we are going to complete a function that takes no parameters and returns true. Add a statement that will cause this function to return true when ran.

JAVASCRIPT


RESET INPUT
RUN TESTS
5
Numbers
Next, we are going to complete a function that takes one number parameter, adds two to that number, then returns the result.

JAVASCRIPT


RESET INPUT
RUN TESTS
6
Strings
Lastly, we are going to complete a function that takes two parameters, a string and number (will refer to an index within the string). The function should return the character within the string, located at the given number index.

JAVASCRIPT


RESET INPUT
RUN TESTS
Objects (Arrays and Objects)
7
Arrays 1
We are going to complete a function that takes in an array parameter, and returns it.

JAVASCRIPT


RESET INPUT
RUN TESTS
8
Arrays 2
We are going to complete a function that takes in an array and a number (will refer to an index within the array). The function should return the element located within the array at the given number index.

JAVASCRIPT


RESET INPUT
RUN TESTS
9
Arrays 3
We are going to complete a function that takes no parameters. This function should create an array, and return it.

JAVASCRIPT


RESET INPUT
RUN TESTS
10
Objects 1
We are going to complete a function that takes in an object parameter, and returns it.

JAVASCRIPT


RESET INPUT
RUN TESTS
11
Objects 2
We are going to complete a function that takes in an object and a string (will refer to a key in the object). The function should return the value of the property located within the object at the given string key.

JAVASCRIPT


RESET INPUT
RUN TESTS
12
Objects 3
We are going to complete a function that takes no parameters. This function should create an object, and return it.

JAVASCRIPT


RESET INPUT
RUN TESTS
13
Objects 4
We are going to write a function that returns the type of argument the function has been called with (assume the argument will be scalar - not a collection).

JAVASCRIPT


RESET INPUT
RUN TESTS
14
Objects 5
We are going to write a function that returns true if the argument is an Array, and false if it is not

JAVASCRIPT


RESET INPUT
RUN TESTS
Operators and Methods
15
Using the 'not' operator
We are going to complete a function that takes in a boolean parameter, and returns the opposite. Below are examples of the code running, assuming that you will have completed the described function: opposite.

var outputTrue = opposite(false);
console.log('should be true:', outputTrue);

var outputFalse = opposite(true);
console.log('should be false:', outputFalse);
JAVASCRIPT


RESET INPUT
RUN TESTS
16
Using the 'or' operator
We are going to complete a function that takes in two boolean parameters. Your function should create a variable and assign it to the result of comparing the two input parameters using the || operator, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: eitherAreTrue.

var outputTrue = eitherAreTrue(true, false);
console.log('should be true:', outputTrue);

var outputFalse = eitherAreTrue(false, false);
console.log('should be false:', outputFalse);
JAVASCRIPT


RESET INPUT
RUN TESTS
17
Using the 'and' operator
We are going to complete a function that takes in two boolean parameters. Your function should create a variable and assign it to the result of comparing the two input parameters using the && operator, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: bothAreTrue.

var outputTrue = bothAreTrue(true, true);
console.log('should be true:', outputTrue);

var outputFalse = bothAreTrue(false, true);
console.log('should be false:', outputFalse);
JAVASCRIPT


RESET INPUT
RUN TESTS
18
A Combination of Booleans
We are going to complete a function that takes in three boolean parameters (bool_1, bool_2, and bool_3). Your function should create a variable and assign it to the result of the following: bool_1 AND either bool_2 OR bool_3. Below are examples of the code running, assuming that you will have completed the described function: combination.

var outputTrue = combination(true, true, false);
console.log('should be true:', outputTrue);

var outputFalse = combination(false, true, true);
console.log('should be false:', outputFalse);
JAVASCRIPT


RESET INPUT
RUN TESTS
19
Using the 'strict equality' operator
We are going to complete a function that takes in two scalar (boolean, number, or string) parameters. Your function should create a variable and assign it to the result of comparing the two input parameters using the === operator, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: areEqual.

var outputTrue = areEqual("happiness", "happiness");
console.log('should be true:', outputTrue);

var outputFalse = areEqual(0, false);
console.log('should be false:', outputFalse);
JAVASCRIPT


RESET INPUT
RUN TESTS
20
Using the 'strict not equality' operator
We are going to complete a function that takes in two scalar (boolean, number, or string) parameters. Your function should create a variable and assign it to the result of comparing the two input parameters using the !== operator, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: areNotEqual.

var outputTrue = areNotEqual("happiness", "sadness");
console.log('should be true:', outputTrue);

var outputFalse = areNotEqual(7, 3 + 4);
console.log('should be false:', outputFalse);
JAVASCRIPT


RESET INPUT
RUN TESTS
21
Using the `+` operator with numbers
We are going to complete a function that takes in two number parameters, and returns their sum when added together. Your function should create a variable and assign it to the result of adding the two input parameters together using the + operator, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: getSum.

var resultSum = getSum(4, 10);
console.log('should be 14:', resultSum);
JAVASCRIPT


RESET INPUT
RUN TESTS
22
Using the `-` operator with numbers
We are going to complete a function that takes in two number parameters (num1, num2), and returns their difference when num2 is subtracted from num1. Your function should create a variable and assign it to the result of subtracting num2 from num1 using the - operator, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: getDifference.

var resultDiff = getDifference(37, 19);
console.log('should be 18:', resultDiff);
JAVASCRIPT


RESET INPUT
RUN TESTS
23
Using the `*` operator with numbers
We are going to complete a function that takes in two number parameters, and returns their product when multiplied together. Your function should create a variable and assign it to the result of multiplying the number parameters together using the * operator, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: getProduct.

var resultProduct = getProduct(9, 4);
console.log('should be 36:', resultProduct);
JAVASCRIPT


RESET INPUT
RUN TESTS
24
Using the `/` operator with numbers
We are going to complete a function that takes in two number parameters (num1, num2), and returns the result of num1 divided by num2. Your function should create a variable and assign it to the result of dividing num1 by num2 using the / operator, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: getQuotient.

var resultQuotient = getQuotient(20, 4);
console.log('should be 5:', resultQuotient);
JAVASCRIPT


RESET INPUT
RUN TESTS
25
Using the `**` operator with numbers
We are going to complete a function that takes in two number parameters (num1, num2), and returns the result of raising num1 to the num2 power. Your function should create a variable and assign it to the result of raising num1 to the num2 power using the ** operator, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: getPower.

var resultPower = getPower(3, 4);
console.log('should be 81:', resultPower);
JAVASCRIPT


RESET INPUT
RUN TESTS
26
Using the `%` operator with numbers
We are going to complete a function that takes in two number parameters (num1, num2), and returns the remainder after dividing num1 by num2. Your function should create a variable and assign it to the remainder after dividing num1 by num2 using the % operator, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: getRemainder.

var resultRemainder = getRemainder(21, 6);
console.log('should be 3:', resultRemainder);
JAVASCRIPT


RESET INPUT
RUN TESTS
27
Using the `+=` operator
We are going to complete a function that takes in two number parameters (base, incrementer), and returns the result of incrementing the base by the incrementer. Your function should reassign base to the result of incrementing base by incrementer using the += operator, then return base. Below is an example of the code running, assuming that you will have completed the described function: increment.

var resultIncremented = increment(11, 5);
console.log('should be 16:', resultIncremented);
JAVASCRIPT


RESET INPUT
RUN TESTS
28
Using the `-=` operator
We are going to complete a function that takes in two number parameters (base, decrementer), and returns the result of decrementing the base by the decrementer. Your function should reassign base to the result of decrementing base by decrementer using the -= operator, then return base. Below is an example of the code running, assuming that you will have completed the described function: decrement.

var resultDecremented = decrement(17, 5);
console.log('should be 12:', resultDecremented);
JAVASCRIPT


RESET INPUT
RUN TESTS
29
Using the `*=` operator
We are going to complete a function that takes in two number parameters (base, multiplier), and returns the result of reassigning the base to be the base multiplied by the multiplier. Your function should reassign base to the result of multipling base by multiplier using the *= operator, then return base. Below is an example of the code running, assuming that you will have completed the described function: applyTimesEquals.

var resultMultiplied = applyTimesEquals(3, 5);
console.log('should be 15:', resultMultiplied);
JAVASCRIPT


RESET INPUT
RUN TESTS
30
Using the `/=` operator
We are going to complete a function that takes in two number parameters (base, divider), and returns the result of reassigning the base to be the base divided by the divider. Your function should reassign base to the result of dividing base by divider using the /= operator, then return base. Below is an example of the code running, assuming that you will have completed the described function: applyDivideEquals.

var resultDivided = applyDivideEquals(56, 7);
console.log('should be 8:', resultDivided);
JAVASCRIPT


RESET INPUT
RUN TESTS
31
Using the `Math.abs()` method
We are going to complete a function that takes in one number parameter, and returns the absolute value of said parameter. Your function should create a variable and assign it to the result of applying the Math.abs() method to the input parameter, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: getAbsoluteValue.

var result1 = getAbsoluteValue(-56);
console.log('should be 56:', result1);

var result2 = getAbsoluteValue(127);
console.log('should be 127:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
32
Using the `Math.floor()` method
We are going to complete a function that takes in one number parameter, and returns the result of rounding the number down. Your function should create a variable and assign it to the result of applying the Math.floor() method to the input parameter, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: roundDown.

var roundedDown = roundDown(6.8);
console.log('should be 6:', roundedDown);
JAVASCRIPT


RESET INPUT
RUN TESTS
33
Using the `Math.ceil()` method
We are going to complete a function that takes in one number parameter, and returns the result of rounding the number up. Your function should create a variable and assign it to the result of applying the Math.ceil() method to the input parameter, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: roundUp.

var roundedUp = roundUp(16.8);
console.log('should be 17:', roundedUp);
JAVASCRIPT


RESET INPUT
RUN TESTS
34
Using the `Number.parseInt()` method
We are going to complete a function that takes in one string parameter, representing an integer, and returns the result of parsing an integer from the input. Your function should create a variable and assign it to the result of applying the Number.parseInt() method to the input parameter, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: applyParseInt.

var parsedInteger = applyParseInt("23");
console.log('should be 23:', parsedInteger);
JAVASCRIPT


RESET INPUT
RUN TESTS
35
Using the `Number.parseFloat()` method
We are going to complete a function that takes in one string parameter, representing a float (decimal), and returns the result of parsing a float from the input. Your function should create a variable and assign it to the result of applying the Number.parseFloat() method to the input parameter, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: applyParseFloat.

var parsedFloat = applyParseFloat("101.78");
console.log('should be 101.78:', parsedFloat);
JAVASCRIPT


RESET INPUT
RUN TESTS
36
Using the `Math.random()` method
We are going to complete a function that takes in two number parameters, representing the lower and upper bounds for a random number to be generated, and returns a randomly generated number within the described bounds. Your function should create a variable and assign it to the result of generating a random number using the Math.random() method, along with the formula described above, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: generateRandomNumber.

var randomNumber = generateRandomNumber(1, 10);
console.log('should be between 1 and 10:', randomNumber);
JAVASCRIPT


RESET INPUT
RUN TESTS
37
Using the `>` operator
We are going to complete a function that takes in two number parameters (num1, num2), and returns whether num1 is greater than num2. Your function should create a variable and assign it to the result of comparing num1 to num2 using the > operator, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: applyGreaterThan.

var trueGreaterThanResult = applyGreaterThan(101, 10);
console.log('should be true:', trueGreaterThanResult);

var falseGreaterThanResult = applyGreaterThan(-13, 2);
console.log('should be false:', falseGreaterThanResult);
JAVASCRIPT


RESET INPUT
RUN TESTS
'Less than' Coding Challenge
38
Using the `<=` operator
We are going to complete a function that takes in two number parameters (num1, num2), and returns whether num1 is less than or equal to num2. Your function should create a variable and assign it to the result of comparing num1 to num2 using the <= operator, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: applyLessThanOrEqualTo.

var trueLessThanOrEqualToResult = applyLessThanOrEqualTo(11, 110);
console.log('should be true:', trueLessThanOrEqualToResult);

var falseLessThanOrEqualToResult = applyLessThanOrEqualTo(-13, -21);
console.log('should be false:', falseLessThanOrEqualToResult);
JAVASCRIPT


RESET INPUT
RUN TESTS
39
Creating a String
We are going to complete a function that takes no parameters, and returns a newly created string. Your function should create a variable and assign it to a new string, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: createString.

var resultString = createString();
console.log('should be a string type:', typeof resultString);
JAVASCRIPT


RESET INPUT
RUN TESTS
40
Accessing a Character in a String
We are going to complete a function that takes two parameters, a string and a numerical index, and returns the character in the string located at the numerical index. Your function should create a variable and assign it to an expression which accesses the character located at the numerical index, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: accessACharacter.

var resultCharacter = accessACharacter('Computer', 3);
console.log('should be "p":', resultCharacter);
JAVASCRIPT


RESET INPUT
RUN TESTS
41
Reassigning a String's Value
We are going to complete a function that takes one string parameter, and reassigns the input parameter to be "reassigned", then returns that input. Your function should not create any new variables and should reassign the input to the string "reassigned", then return the input parameter. Below are examples of the code running, assuming that you will have completed the described function: reassignAString.

var resultString1 = reassignAString('Computer Science');
console.log('should be "reassigned":', resultString1);

var resultString2 = reassignAString('Software Engineering');
console.log('should also be "reassigned":', resultString2);
JAVASCRIPT


RESET INPUT
RUN TESTS
42
Concatenate two strings
We are going to complete a function that takes in two parameters, both will be strings, and returns the two strings concatenated. Your function should create a new variable, assign it to an expression which will add together or concatenate the input strings, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: addTogetherTwoStrings.

var resultString1 = addTogetherTwoStrings('Comp', 'uter');
console.log('should be "Computer":', resultString1);

var resultString2 = addTogetherTwoStrings('Engin', 'eering');
console.log('should also be "Engineering":', resultString2);
JAVASCRIPT


RESET INPUT
RUN TESTS
43
Concatenate two strings into a full name
We are going to complete a function that takes in two parameters, both will be strings, representing a first name and a last name, and returns a full name string. Your function should create a new variable, assign it to an expression which will add together or concatenate the first and last name strings, with a space in between, then return the that variable. Below is an example of the code running, assuming that you will have completed the described function: createFullName.

var resultFullName1 = createFullName("Duevyn", "Cooke");
console.log("should log Duevyn Cooke:", resultFullName1);

var resultFullName2 = createFullName("Ada", "Lovelace");
console.log("should log Ada Lovelace:", resultFullName2);
JAVASCRIPT


RESET INPUT
RUN TESTS
44
String Interpolation
We are going to complete a function that takes in two parameters, both will be strings (activity, dayOfTheWeek), and returns a message based on the inputs. Your function should create a new variable, assign it to an expression which will interpolate the parameters into a message (described below), then return that variable. Below are examples of the code running, assuming that you will have completed the described function: interpolateAString.

var resultMessage1 = interpolateAString('hiking', 'Tuesday');
console.log("should log 'We will go hiking on Tuesday.':", resultMessage1);

var resultMessage2 = interpolateAString('dancing', 'Friday');
console.log("should log 'We will go dancing on Friday.':", resultMessage2);
JAVASCRIPT


RESET INPUT
RUN TESTS
45
Get length of string
We are going to complete a function that takes in one parameter, a string, and returns the length of that string. Your function should create a variable and assign it to the length of the input string using the .length property, and return that variable. Below are examples of the code running, assuming that you will have completed the described function: getStringLength.

var resultLength1 = getStringLength('Apple');
console.log('should log 5:', resultLength1);

var resultLength2 = getStringLength('Microsoft');
console.log('should log 9:', resultLength2);
JAVASCRIPT


RESET INPUT
RUN TESTS
46
Get last character of string
We are going to complete a function that takes in one parameter, a string, and returns the input string's last character. Your function should determine the length of the input string minus 1, and assign it to a lastIndex variable. Your function should also create a lastCharacter variable and assign it to an expression which uses lastIndex to access the last character in the string, and return the lastCharacter variable. Below are examples of the code running, assuming that you will have completed the described function: getLastCharacter.

var resultLastCharacter1 = getLastCharacter('Banana');
console.log('should log "a":', resultLastCharacter1);

var resultLastCharacter2 = getLastCharacter('Macrofirm');
console.log('should log "m":', resultLastCharacter2);
JAVASCRIPT


RESET INPUT
RUN TESTS
47
Apply substring Method
We are going to complete a function that takes in three parameters (string, start, end -> where start and end are numerical indexes), and returns a portion of the string from before start, up to, but not including, end. Your function should create a subString variable and assign it to a call of the substring() method on the string, starting from before start, up to, but not including, end, and return the subString variable. Below are examples of the code running, assuming that you will have completed the described function: applySubString.

var string1 = 'Queue';
var resultSubString1 = applySubString(string1, 1, 4);
console.log('should log "ueu":', resultSubString1);

var string2 = 'Stack Trace';
var resultSubString2 = applySubString(string2, 2, 10);
console.log('should log "ack Trac":', resultSubString2);
JAVASCRIPT


RESET INPUT
RUN TESTS
48
Apply indexOf Method
We are going to complete a function that takes in two parameters (string, subString), and returns the index of the string where the subString can be found. Your function should create an index variable and assign it to a call of the indexOf() method on the string, and passing subString as an argument, and return the index variable. Below are examples of the code running, assuming that you will have completed the described function: applyIndexOf.

var string1 = 'Quicksort';
var subString1 = 'sort';
var resultIndex1 = applyIndexOf(string1, subString1);
console.log('should log 5:', resultIndex1);

var string2 = 'size,color,cut,price';
var subString2 = 'cut';
var resultIndex2 = applyIndexOf(string2, subString2);
console.log('should log 11:', resultIndex2);
JAVASCRIPT


RESET INPUT
RUN TESTS
49
Apply toString Method
We are going to complete a function that takes in one parameter, and returns a string version of that parameter. Your function should create a stringVersion variable and assign it to a call of the toString() method on the input parameter, and return the stringVersion variable. Below are examples of the code running, assuming that you will have completed the described function: applyToString.

var input1 = 9374;
var resultString1 = applyToString(input1);
console.log('should log "9374":', resultString1);
console.log('type should be "string":', typeof resultString1);

var input2 = false;
var resultString2 = applyToString(input2);
console.log('should log "false":', resultString2);
console.log('type should be "string":', typeof resultString2);
JAVASCRIPT


RESET INPUT
RUN TESTS
50
Using Escape Characters
We are going to complete a function that takes in three string parameters (the first, second, and third lines of a haiku), and returns a string that when logged to the console, outputs the haiku in traditional format - see example above. Your function should create a haiku variable and assign it to an expression which will create one "printable onto three lines" string out of the three input strings, and return the haiku variable. Below are examples of the code running, assuming that you will have completed the described function: generateHaiku.

var resultHaiku1 = generateHaiku('In the twilight rain', 'these brilliant-hued hibiscus -', 'A lovely sunset.');
console.log('should log formatted haiku:\n', resultHaiku1);

var resultHaiku2 = generateHaiku('The lamp once out', 'Moves west, flowers\' shadows', 'Creep eastward.');
console.log('should also log formatted haiku:\n', resultHaiku2);
JAVASCRIPT


RESET INPUT
RUN TESTS
51
Creating an Array
We are going to complete a function that takes no parameters, and returns a newly created array. Your function should create a variable and assign it to a new array, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: createArray.

var resultArray = createArray();
console.log('should be an array:', Array.isArray(resultArray));
JAVASCRIPT


RESET INPUT
RUN TESTS
52
Accessing an Element in an Array
We are going to complete a function that takes two parameters, an array and a numerical index, and returns the element in the array located at the numerical index. Your function should create a variable and assign it to an expression which accesses the element located at the numerical index, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: accessAnElement.

var resultElement = accessAnElement(['Computer', 'Mouse', 'Ethernet Cable'], 1);
console.log('should be "Mouse":', resultElement);
JAVASCRIPT


RESET INPUT
RUN TESTS
53
Reassigning an Element in an Array
We are going to complete a function that takes three parameters, an array, a numerical index, a newValue, and returns the array after performing a reassignment. Your function should reassign the element within the array, located at the numerical index, to the new input value, and should then return the newly changed array. Below is an example of the code running, assuming that you will have completed the described function: reassignAnElement.

var resultArray = reassignAnElement(['desk', 'lamp', 'chewtoy'], 2, 'textbook');
console.log('should replace "chewtoy" with "textbook":', resultArray);
JAVASCRIPT


RESET INPUT
RUN TESTS
54
Get length of array
We are going to complete a function that takes in one parameter, an array, and returns the length of that array. Your function should create a variable and assign it to the length of the input array using the .length property, and return that variable. Below are examples of the code running, assuming that you will have completed the described function: getArrayLength.

var resultLength1 = getArrayLength([1, 3, 4, 5, 7]);
console.log('should log 5:', resultLength1);

var resultLength2 = getArrayLength(['a', 'b', 'c', 'd']);
console.log('should log 4:', resultLength2);
JAVASCRIPT


RESET INPUT
RUN TESTS
55
Get last element of array
We are going to complete a function that takes in one parameter, an array, and returns the input array's last element. Your function should determine the length of the input array minus 1, and assign it to a lastIndex variable. Your function should also create a lastElement variable and assign it to an expression which uses lastIndex to access the last element in the array, and return the lastElement variable. Below are examples of the code running, assuming that you will have completed the described function: getLastElement.

var resultLastElement1 = getLastElement([1, 2, "buckle", "my", "shoe"]);
console.log('should log "shoe":', resultLastElement1);

var resultLastElement2 = getLastElement([3, 4, "shut", "the", "door"]);
console.log('should log "door":', resultLastElement2);
JAVASCRIPT


RESET INPUT
RUN TESTS
56
Using .push()
We are going to complete a function that takes in two parameters, an array and an element, adds the element to the end of the array, and returns the array. Your function should use the .push() method to add the input element to the end of the input array, then return that array. Below are examples of the code running, assuming that you will have completed the described function: applyPush.

var resultArray1 = applyPush([1, 17, 29], 34);
console.log('should log [1, 17, 29, 34]:', resultArray1);

var resultArray2 = applyPush(['abc', 'def'], 'ghi');
console.log('should log ["abc", "def", "ghi"]:', resultArray2);
JAVASCRIPT


RESET INPUT
RUN TESTS
57
Using .pop()
We are going to complete a function that takes in one parameter, an array, removes the last element from the back of the array, and returns the removed element. Your function should create a popped variable, assign it to an expression using the .pop() method to remove the last element from the array, then return that popped variable. Below are examples of the code running, assuming that you will have completed the described function: applyPop.

var resultElement1 = applyPop([1, 171, 129]);
console.log('should log 129:', resultElement1);

var resultElement2 = applyPop(['islands', 'peninsulas', 'pacific']);
console.log('should log pacific:', resultElement2);
JAVASCRIPT


RESET INPUT
RUN TESTS
58
Using .unshift()
We are going to complete a function that takes in two parameters, an array and an element, adds the element to the front of the array, and returns the array. Your function should use the .unshift() method to add the input element to the front of the input array, then return that array. Below are examples of the code running, assuming that you will have completed the described function: applyUnshift.

var resultArray1 = applyUnshift([7, 9, 4], 1);
console.log('should log [1, 7, 9, 4]:', resultArray1);

var resultArray2 = applyUnshift(['ef', 'hi'], 'bc');
console.log('should log ["bc", "ef", "hi"]:', resultArray2);
JAVASCRIPT


RESET INPUT
RUN TESTS
59
Using .shift()
We are going to complete a function that takes in one parameter, an array, removes the first element from the front of the array, and returns the removed element. Your function should create a shifted variable, assign it to an expression using the .shift() method to remove the first element from the array, then return that shifted variable. Below are examples of the code running, assuming that you will have completed the described function: applyShift.

var resultElement1 = applyShift([1, 171, 129]);
console.log('should log 1:', resultElement1);

var resultElement2 = applyShift(['islands', 'peninsulas', 'pacific']);
console.log('should log islands:', resultElement2);
JAVASCRIPT


RESET INPUT
RUN TESTS
60
Using .splice() to add an element
We are going to complete a function that takes in three parameters, an array, an index, and an element, adds the element to the index of the array, without replacing any of the existing elements, and returns the array. Your function should use the .splice() method to add the input element to the input array, at the given index, and without replacing any of the existing elements, then returns the array. Below are examples of the code running, assuming that you will have completed the described function: addAnElementInGeneral.

var resultArray1 = addAnElementInGeneral([7, 9, 10], 1, 8);
console.log('should log [7, 8 , 9, 10]:', resultArray1);

var resultArray2 = addAnElementInGeneral(['q', 'r', 't'], 2, 's');
console.log('should log ["q", "r", "s", "t"]:', resultArray2);
JAVASCRIPT


RESET INPUT
RUN TESTS
61
Using .splice() to remove an element
We are going to complete a function that takes in two parameters, an array and an index, removes the element from the index of the array, and returns the array. Your function should use the .splice() method to remove the element from the input array, at the given index, then return the array. Below are examples of the code running, assuming that you will have completed the described function: removeAnElementInGeneral.

var resultArray1 = removeAnElementInGeneral([8, 9, 10, 'bad entry', 11], 3);
console.log('should log [8, 9, 10, 11]:', resultArray1);

var resultArray2 = removeAnElementInGeneral(['one', 'two', 452, 'three'], 2);
console.log('should log ["one", "two", "three"]:', resultArray2);
JAVASCRIPT


RESET INPUT
RUN TESTS
62
Using .splice() to remove and add element
We are going to complete a function that takes in four parameters, an array, an index, and two new elements, removes 2 elements, beginning at the index, adds the two new elements, and returns the array. Your function should use the .splice() method to remove two elements from the input array, at the given index, adds the two new elements in their place, then return the array. Below are examples of the code running, assuming that you will have completed the described function: applySplice.

var resultArray1 = applySplice([8, 9, 10, 'bad entry1', 'bad entry2', 13], 3, 11, 12);
console.log('should log [8, 9, 10, 11, 12, 13]:', resultArray1);

var resultArray2 = applySplice(['one', 'two', 452, 672, 'five'], 2, 'three', 'four');
console.log('should log ["one", "two", "three", "four", "five"]:', resultArray2);
JAVASCRIPT


RESET INPUT
RUN TESTS
63
Using Array.isArray()
We are going to complete a function that takes in one parameter, possibly an array, and returns whether the input in an array or not. Your function should create a variable, assign it to an expression that tells whether the input parameter is an array or not, using the Array.isArray() method, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: isAnArray.

var resultBoolean1 = isAnArray([1, 2, 3]);
console.log('should log true:', resultBoolean1);

var resultBoolean2 = isAnArray({name: 'Tom', friend: 'Jerry'});
console.log('should log false:', resultBoolean2);
JAVASCRIPT


RESET INPUT
RUN TESTS
64
Using .slice() in general
We are going to complete a function that takes in three parameters, an array and two integer indexes (start, end), and returns a portion of the array from before the start index up to, but not including, the end index. Your function should create a sliceOfArray variable and assign it to a call to the slice method on the array, starting from before start, up to, but not including, end, and return the sliceOfArray variable. Below are examples of the code running, assuming that you will have completed the described function: applySlice.

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultOfSlice1 = applySlice(array1, 1, 4);
console.log('should log ["u", "e", "u"]:', resultOfSlice1);

var array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultOfSlice2 = applySlice(array2, 2, 8);
console.log('should log [2, 3, 4, 5, 6, 7]:', resultOfSlice2);
JAVASCRIPT


RESET INPUT
RUN TESTS
65
Using .slice() to make a copy
We are going to complete a function that takes in one array parameter, and returns a copy of the array. Your function should create a copyOfArray variable and assign it to a call to the slice method on the array which will make a copy, and return the copyOfArray variable. Below are examples of the code running, assuming that you will have completed the described function: makeACopy.

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultCopy1 = makeACopy(array1);
console.log('should log ["Q", "u", "e", "u", "e"]:', resultCopy1);

var array2 = [0, 1, 2, 3, 4];
var resultCopy2 = makeACopy(array2);
console.log('should log [0, 1, 2, 3, 4]:', resultCopy2);
JAVASCRIPT


RESET INPUT
RUN TESTS
66
Using .concat()
We are going to complete a function that takes in two array parameters, and returns an array containing all of the elements of the two input arrays. Your function should create a concattedArray variable and assign it to a call to the concat method on the input array, applied to the other input array, and return the concattedArray variable. Below are examples of the code running, assuming that you will have completed the described function: applyConcat.

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f']
var resultConcat1 = applyConcat(array1, array2);
console.log('should log ["a", "b", "c", "d", "e", "f"]:', resultConcat1);

var array3 = [1, 2, 3];
var array4 = [4, 5, 6];
var resultConcat2 = applyConcat(array3, array4);
console.log('should log [1, 2, 3, 4, 5, 6]:', resultConcat2);
JAVASCRIPT


RESET INPUT
RUN TESTS
67
Using .join()
We are going to complete a function that takes in one array parameter (elements will be strings), and one string parameter, and returns a string that is the result of joining the elements of the string together, separated by the string parameter. Your function should create a joinedString variable and assign it to a call to the .join() method, and return the joinedString variable. Below are examples of the code running, assuming that you will have completed the described function: applyJoin.

var resultString1 = applyJoin(['first', 'second', 'third'], '--');
console.log('should log joined string:', resultString1);

var resultString2 = applyJoin(['git', 'commit'], ' ');
console.log('should also log joined string:', resultString2);
JAVASCRIPT


RESET INPUT
RUN TESTS
68
Using .split()
We are going to complete a function that takes in two string parameters (stringToBeSplit, splitter), and returns an array that is the result of splitting the stringToBeSplit parameter on the splitter parameter. Your function should create a splitString variable and assign it to a call to the .split() method, and return the splitString variable. Below are examples of the code running, assuming that you will have completed the described function: applySplit.

var resultArray1 = applySplit('first--second--third', '--');
console.log('should log split string:', resultArray1);

var resultArray2 = applySplit('git push origin master', ' ');
console.log('should also log split string:', resultArray2);
JAVASCRIPT


RESET INPUT
RUN TESTS
69
Apply indexOf Method to an Array
We are going to complete a function that takes in two parameters (array, element), and returns the index of the array where the element can be found. Your function should create an index variable and assign it to a call of the indexOf() method on the array, and passing element as an argument, and return the index variable. Below are examples of the code running, assuming that you will have completed the described function: applyIndexOfToArray.

var array1 = ['Quick', 'sort', 'is', 'wild'];
var element1 = 'sort';
var resultIndex1 = applyIndexOfToArray(array1, element1);
console.log('should log 1:', resultIndex1);

var array2 = ['size', 'color', 'cut', 'price'];
var element2 = 'style';
var resultIndex2 = applyIndexOfToArray(array2, element2);
console.log('should log -1:', resultIndex2);
JAVASCRIPT


RESET INPUT
RUN TESTS
70
Creating an Object
We are going to complete a function that takes no parameters, and returns a newly created object. Your function should create a variable and assign it to a new object, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: createObject.

var resultObject = createObject();
console.log('should be an object:', typeof resultObject);
console.log('should not be an array:', Array.isArray(resultObject));
JAVASCRIPT


RESET INPUT
RUN TESTS
71
Accessing a Property in an Object
We are going to complete a function that takes two parameters, an object and a string key, and returns the value for a property in the object located at the string key. Your function should create a variable and assign it to an expression which accesses the value of the property located at the string key, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: accessAProperty.

var resultValue = accessAProperty({machine: 'Computer', type: 'Macbook', ram: '2 GHz'}, 'ram');
console.log('should be "2 GHz":', resultValue);
JAVASCRIPT


RESET INPUT
RUN TESTS
72
Reassigning a Property's Value in an Object
We are going to complete a function that takes three parameters, an object, a string key, and a newValue, and returns the object after performing a reassignment. Your function should reassign the property's value within the object, located at the string key, to the newValue parameter, and should then return the newly changed object. Below is an example of the code running, assuming that you will have completed the described function: reassignAProperty.

var resultObject = reassignAProperty({name: 'Ramses', favoriteFood: 'chicken', type: 'dog'}, 'favoriteFood', 'goose');
console.log('should replace "chicken" with "goose":', resultObject);
JAVASCRIPT


RESET INPUT
RUN TESTS
73
Using 'delete' to remove a property
We are going to complete a function that takes in two parameters, an object and an key, removes the property located at the input key from the object, and returns the object. Your function should use the delete operator to remove the property at the given key from the input object, then return the object. Below are examples of the code running, assuming that you will have completed the described function: removeAProperty.

var resultObject1 = removeAProperty({q: 9, r: 10, text: 'bad entry'}, 'text');
console.log('should log {q: 9, r: 10}:', resultObject1);

var resultObject2 = removeAProperty({first: 'one', second: 'two', why: 452, third: 'three'}, 'why');
console.log('should log {first: "one", second: "two", third: "three"}:', resultObject2);
JAVASCRIPT


RESET INPUT
RUN TESTS
74
Determine if Property is Present
We are going to complete a function that takes in two parameters an object and a key, and returns whether the object has a property at the given key. Your function should create an isPresent variable and assign it to a comparison between the object's value at the given key and undefined, and return the isPresent variable. Below are examples of the code running, assuming that you will have completed the described function: isPropertyPresent.

var object1 = {
  a: 1,
  b: 2
}
var key1 = 'c';
var result1 = isPropertyPresent(object1, key1);
console.log('should log false:', result1);

var object2 = {
  'size': 'M',
  'color': 'green',
  'cut': 'tapered',
  'price': 30
};
var key2 = 'cut';
var result2 = isPropertyPresent(object2, key2);
console.log('should log true:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
75
Determine if a value is an Object
We are going to complete a function that takes in one parameter, possibly an object, and returns whether the input in an object or not. Your function should create several variables (isObject, isNotAnArray, and isObjectAndNotAnArray). Assign isObject to an application of the typeof operator to the input. Assign isNotAnArray to a call to the Array.isArray() method with the ! operator applied as well. Assign isObjectAndNotAnArray to the two previous variabes combined with the && operator, and return the isObjectAndNotAnArray variable. Below are examples of the code running, assuming that you will have completed the described function: isAnObject.

var resultBoolean1 = isAnObject([1, 2, 3]);
console.log('should log false:', resultBoolean1);

var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
console.log('should log true:', resultBoolean2);
JAVASCRIPT


RESET INPUT
RUN TESTS
76
Using Object.keys()
We are going to complete a function that takes in one parameter, an object. Your function should create a keys variable, and assign it to an expression which generates an array of all of the keys in said object by calling Object.keys(), then return that keys variable. Below is an example of the code running, assuming that you will have completed the described function: getAllKeys.

var resultKeys = getAllKeys({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log ["firstScore", "secondScore", "thirdScore"]:', resultKeys);
JAVASCRIPT


RESET INPUT
RUN TESTS
77
Using Object.values()
We are going to complete a function that takes in one parameter, an object. Your function should create a values variable, and assign it to an expression which generates an array of all of the values in said object by calling Object.values(), then return that values variable. Below is an example of the code running, assuming that you will have completed the described function: getAllValues.

var resultValues = getAllValues({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log [12, 34, 28]:', resultValues);
JAVASCRIPT


RESET INPUT
RUN TESTS
78
Using .unshift() again
We are going to complete a function that takes in three parameters, a nested array of arrays, an index, and an element, then adds the element to the front of the inner array located at the index within the input array of arrays, and returns the array of arrays. Your function should use the .unshift() method to add the input element to the front of the inner array located at the given index of the array of arrays, then return that array of arrays. Below are examples of the code running, assuming that you will have completed the described function: applyUnshiftAgain.

var resultArray1 = applyUnshiftAgain([ [1, 3], [10, 11], [9, 4] ], 1, 5);
console.log('should log [ [1, 3], [5, 10, 11], [9, 4] ]:', resultArray1);

var resultArray2 = applyUnshiftAgain([ ['ag', 'bc'], ['ef', 'hi'] ], 0, 'iq');
console.log('should log [ ["iq", "ag", "bc"], ["ef", "hi"] ]:', resultArray2);
JAVASCRIPT


RESET INPUT
RUN TESTS
79
Using Array.isArray() again
We are going to complete a function that takes in two parameters, one value is an object, possibly containing an array, as well as a key in that object, and returns whether the value located at the key is an array or not. Your function should create a variable, assign it to an expression that tells whether the input object's value located at the input key is an array or not, using the Array.isArray() method, then return that created variable. Below are examples of the code running, assuming that you will have completed the described function: isAnArrayAgain.

var resultBoolean1 = isAnArrayAgain({key1: [1, 2, 3], key2: 'gg'}, 'key1');
console.log('should log true:', resultBoolean1);

var resultBoolean2 = isAnArrayAgain({name: 'Tom', friend: 'Jerry'}, 'friend');
console.log('should log false:', resultBoolean2);
JAVASCRIPT


RESET INPUT
RUN TESTS
80
Using Object.keys() again
We are going to complete a function that takes in two parameters, an object and a key. Your function should create a keys variable, and assign it to an expression which generates an array of all of the keys in the nested object located within the input object, by calling Object.keys(), then return that keys variable. Below is an example of the code running, assuming that you will have completed the described function: getAllKeysAgain.

var resultKeys = getAllKeysAgain({firstScore: {part1: 12, part2: 14, part3: 10}, secondScore: 34, thirdScore: 28}, 'firstScore');
console.log('should log ["par1", "part2", "part3"]:', resultKeys);
JAVASCRIPT


RESET INPUT
RUN TESTS
81
Using 'delete' to remove a property again
We are going to complete a function that takes in three parameters, an array, an index, and an key, removes the property specified by the input key, located within an object, located at the given index within the input array, and returns the input array. Your function should use the delete operator to remove the property specified by the input key, located within an object, located at the given index within the input array, and returns the input array. Below are examples of the code running, assuming that you will have completed the described function: removeAPropertyAgain.

var resultObject1 = removeAPropertyAgain([{q: 9, r: 10, text: 'bad entry'}, {a: 1, b: 2}], 0, 'text');
console.log('should log [{q: 9, r: 10}, {a: 1, b: 2}]:', resultObject1);

var resultObject2 = removeAPropertyAgain([{key: 'value'}, {first: 'one', second: 'two', why: 452, third: 'three'}], 1, 'why');
console.log('should log [{key: "value"}, {first: "one", second: "two", third: "three"}]:', resultObject2);
JAVASCRIPT


RESET INPUT
RUN TESTS
Conditionals
82
IF statement with undefined
We are going to complete a function that takes in one parameter, determines if that parameter is defined, and returns a specific string if it is. Your function should use an if statement to determine if the input parameter is defined, and if it is, should return the string 'Input is defined'. Below are examples of the code running, assuming that you will have completed the described function: isItUndefined.

var result1 = isItUndefined('anything');
console.log('should log "Input is defined":', result1);

var result2 = isItUndefined();
console.log('Should log undefined, because function returned nothing:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
83
IF statement with numbers
We are going to complete a function that takes in two parameters, both numbers representing totals for apples and oranges, determines if there are fewer apples than oranges, and if so, returns a specific string. Your function should use an if statement to determine if there are fewer apples than oranges, and if there are, should return the string 'There are fewer apples than oranges'. Below are examples of the code running, assuming that you will have completed the described function: fewerApples.

var result1 = fewerApples(4, 7);
console.log('should log "There are fewer apples than oranges":', result1);

var result2 = fewerApples(19, 12);
console.log('Should log undefined, because function returned nothing:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
84
IF statement with a string
We are going to complete a function that takes in one parameter, a string representing a password, determines if the string is both longer than 4, and less than 15, characters long, and if it is returns a specific string. Your function should use an if statement to determine if the input string is both long enough, and not too long, and if it is, should return the string 'Password length is valid'. Below are examples of the code running, assuming that you will have completed the described function: validLengthPassword.

var result1 = validLengthPassword('passwordyfurdy');
console.log('should log "Password length is valid":', result1);

var result2 = validLengthPassword('pass');
console.log('Should log undefined, because function returned nothing:', result2);

var result3 = validLengthPassword('this is clearly too long of a password');
console.log('Should log undefined, because function returned nothing:', result3);
JAVASCRIPT


RESET INPUT
RUN TESTS
85
IF statement with an array
We are going to complete a function that takes in two parameters, an array of agents in the field, and an agent to search for within that array, determines if the agent to search for is present within the array, and if it is, returns a specific string. Your function should use an if statement to determine if the agent to search for is present within the list of agents, and if it is, should return the string '{agentToSearchFor} is present within Agent list', where {agentToSearchFor} has the value of the argument the function is called on. Below are examples of the code running, assuming that you will have completed the described function: findAgent.

var result1 = findAgent(['001', '005', '007', '009'], '007');
console.log('should log "007 is present within Agent list":', result1);

var result2 = findAgent(['tiny', 'teeny', 'eeny', 'meany'], 'teeny');
console.log('should log "teeny is present within Agent list":', result2);

var result3 = findAgent(['red', 'blue', 'green'], 'orange');
console.log('Should log undefined, because function returned nothing:', result3);
JAVASCRIPT


RESET INPUT
RUN TESTS
86
IF statement with an object
We are going to complete a function that takes in two parameters, an object containing the report totals for various teams, and the string name of a team, and determines if the given team has surpassed their goal of 5 reports, and if they have, returns a specific string. Your function should use an if statement to determine if the team in question has surpassed their goal of 5 reports, and if they have, should return the string '{teamName} has surpassed goal with {number_of_reports_for_team} reports', where {teamName} has the value of the second argument the function is called on, and {number_of_reports_for_team} is the number of reports in the inputted object argument for {teamName}. Below are examples of the code running, assuming that you will have completed the described function: generateReportSummary.

var result1 = generateReportSummary({a_team: 12, b_team: 7, c_team: 0}, 'b_team');
console.log('should log "b_team has surpassed goal with 7 reports":', result1);

var result2 = generateReportSummary({blue: 18, red: 8, green: 12}, 'blue');
console.log('should log "blue has surpassed goal with 18 reports":', result2);

var result3 = generateReportSummary({gamma: 1, epsilon: 3, alpha: 4, bravo: 17}, 'alpha');
console.log('Should log undefined, because function returned nothing:', result3);
JAVASCRIPT


RESET INPUT
RUN TESTS
IF ELSE statement Coding Challenges
87
IF ELSE statement with truthy/falsy
HINT: see "truthy vs. falsy" at end of Booleans Operators and Methods Lesson

We are going to complete a function that takes in one parameter, determines if that parameter is truthy or falsy, and returns a specific string for each case. Your function should use an if else statement to determine if the input parameter is truthy, and if it is, should return the string 'Input is truthy', or, if the input parameter is falsy, should return the string 'Input is falsy'. Below are examples of the code running, assuming that you will have completed the described function: isItTruthy.

var result1 = isItTruthy('anything');
console.log('should log "Input is truthy":', result1);

var result2 = isItTruthy();
console.log('should log "Input is falsy":', result2);

var result3 = isItTruthy("");
console.log('should log "Input is falsy":', result3);

var result4 = isItTruthy(false);
console.log('should log "Input is falsy":', result4);
JAVASCRIPT


RESET INPUT
RUN TESTS
88
IF ELSE statement with numbers
We are going to complete a function that takes in two parameters, both numbers representing totals for dogs and cats, determines if dogs are more than 8 and cats are fewer than 9, and returns a specific string for each case. Your function should use an if else statement to determine if there are both more than 8 dogs and fewer than 9 cats, and if there are, should return the string 'number of cats and dogs is acceptable', and if not, should return the string 'number of cats or dogs is not acceptable'. Below are examples of the code running, assuming that you will have completed the described function: balancePets.

var result1 = balancePets(9, 8);
console.log('should log "number of cats and dogs is acceptable":', result1);

var result2 = balancePets(7, 12);
console.log('should log "number of cats or dogs is not acceptable":', result2);

var result3 = balancePets(7, 7);
console.log('should log "number of cats or dogs is not acceptable":', result3);

var result4 = balancePets(5, 14);
console.log('should log "number of cats or dogs is not acceptable":', result4);
JAVASCRIPT


RESET INPUT
RUN TESTS
89
IF ELSE statement with a string
We are going to complete a function that takes in one parameter, a string representing a password, determines whether the password is longer than 8 characters, and returns a specific string for each case. Your function should use an if else statement to determine if the input string is long enough, and if it is, should return the string 'Password is long enough', and if it is not, should return the string 'Please enter a password of at least 9 characters'. Below are examples of the code running, assuming that you will have completed the described function: passwordLongEnough.

var result1 = passwordLongEnough('passafassaword');
console.log('should log "Password is long enough":', result1);

var result2 = passwordLongEnough('wordpass');
console.log('Should log "Please enter a password of at least 9 characters":', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
90
IF ELSE statement with an array
We are going to complete a function that takes in two parameters, an array of ingredients for a recipe, and an ingredient to search for within that array, determines whether the ingredient to search for is present within the array, and returns a specific string for each case. Your function should use an if else statement to determine if the ingredient to search for is present within the list of ingredients, and if it is, should return the string '{ingredientToSearchFor} is on the list', and if not, should return the string '{ingredientToSearchFor} is not on the list', where {ingredientToSearchFor} has the value of the argument the function is called on. Below are examples of the code running, assuming that you will have completed the described function: findIngredient.

var result1 = findIngredient(['flour', 'butter', 'sugar', 'eggs'], 'sugar');
console.log('should log "sugar is on the list":', result1);

var result2 = findIngredient(['milk', 'cereal', 'fruit'], 'pop-tarts');
console.log('should log "pop-tarts is not on the list":', result2);

JAVASCRIPT


RESET INPUT
RUN TESTS
91
IF ELSE statement with an object
We are going to complete a function that takes in one parameter, an object containing the fruit totals for a project, and determines whether the listed total for bananas is greater than 3 and the listed total for strawberries is greater than 10, and returns a specific string for each case. Your function should use an if else statement to determine if the totals of bananas and strawberries are sufficient, and if they are, should return the string 'We have enough fruit, with ' + {totalBananas} + ' bananas, and ' + {totalStrawberries} + ' strawberries', where {totalBananas} and {totalStrawberries} are the numbers of each fruit in the fruit totals object. If they are not, your function should return the string 'We do not have enough of both fruits'. Below are examples of the code running, assuming that you will have completed the described function: measureRequiredFruit.

var result1 = measureRequiredFruit({bananas: 4, strawberries: 12});
console.log('should log "We have enough fruit, with 4 bananas, and 12 strawberries":', result1);

var result2 = measureRequiredFruit({bananas: 5, strawberries: 15});
console.log('should log "We have enough fruit, with 5 bananas, and 15 strawberries":', result2);

var result3 = measureRequiredFruit({bananas: 2, strawberries: 12});
console.log('should log "We do not have enough of both fruits":', result3);

var result4 = measureRequiredFruit({bananas: 5, strawberries: 8});
console.log('should log "We do not have enough of both fruits":', result4);

var result5 = measureRequiredFruit({bananas: 3, strawberries: 9});
console.log('should log "We do not have enough of both fruits":', result5);
JAVASCRIPT


RESET INPUT
RUN TESTS
92
IF ELSE IF statement (1)
We are going to complete a function that takes in one parameter, a string representing the choice of Player 1 in a game of rock/paper/scissors, and returns a specific string for four different cases. Your function should use an if else if statement to determine which choice the player has made, then should return: 'Player 1 chose rock'; 'Player 1 chose paper'; 'Player 1 chose scissors'; or, 'Player 1 has chosen poorly!', depending upon the value of the input parameter. Below are examples of the code running, assuming that you will have completed the described function: player1Choice.

var result1 = player1Choice('rock');
console.log('should log "Player 1 chose rock":', result1);

var result2 = player1Choice('paper');
console.log('should log "Player 1 chose paper":', result2);

var result3 = player1Choice('scissors');
console.log('should log "Player 1 chose scissors":', result3);

var result4 = player1Choice('gun');
console.log('should log "Player 1 has chosen poorly!":', result4);
JAVASCRIPT


RESET INPUT
RUN TESTS
93
IF ELSE IF statement (2)
We are going to complete a function that takes in one parameter, a number called shirtWidth, and returns a specific string for four different cases. Your function should use an if else if statement to determine which size t-shirt is appropriate based on the following conditions: if the shirtWidth is greater than or equal to 20, and less than 30, the function returns 'You should select a size S'; if the shirtWidth is greater than or equal to 30, and less than 40, the function returns 'You should select a size M'; if the shirtWidth is greater than or equal to 40, and less than 50, the function returns 'You should select a size L'. If none of these conditions is met, the function returns 'You should select a different shirt'. Below are examples of the code running, assuming that you will have completed the described function: selectShirtSize.

var result1 = selectShirtSize(25);
console.log('should log "You should select a size S":', result1);

var result2 = selectShirtSize(32);
console.log('should log "You should select a size M":', result2);

var result3 = selectShirtSize(47);
console.log('should log "You should select a size L":', result3);

var result4 = selectShirtSize(12);
console.log('should log "You should select a different shirt":', result4);

var result5 = selectShirtSize(67);
console.log('should log "You should select a different shirt":', result5);
JAVASCRIPT


RESET INPUT
RUN TESTS
94
IF ELSE IF statement (3)
We are going to complete a function that takes in three parameters, an object (recipeMinimums) containing required amounts for two ingredients (tomatoes, onions) in a recipe, and then two numbers representing the current stock of those ingredients (stockTomatoes, and stockOnions), and returns a specific string for four different cases. Your function should use an if else if statement to determine the correct output. If both the stock of onions and tomatoes are less than the recipe minimums, your function should return 'We need more tomatoes and more onions'. If the stock of tomatoes is greater than or equal to the recipe minimum, but the stock of onions is less than the recipe minimum, your function should return 'We have enough tomatoes, but need more onions.' If the stock of tomatoes is less than the recipe minimum, but the stock of onions is greater than or equal to the recipe minimum, your function should return 'We have enough onions, but need more tomatoes'. Finally, if the stock of both ingredients is sufficient, your function should return 'We have enough tomatoes and onions. There will be {excessTomatoes} extra tomato, and {excessOnions} extra onion.', where {excessTomatoes} and {excessOnions} are the number of tomatoes and onions in excess of the minimum that the are in stock (e.g. see example above). Below are examples of the code running, assuming that you will have completed the described function: verifyStock.

var result1 = verifyStock({tomatoes: 3, onions: 7}, 5, 8);
console.log('should log "We have enough tomatoes and onions. There will be 2 extra tomato, and 1 extra onion.":', result1);

var result2 = verifyStock({tomatoes: 5, onions: 1}, 10, 4);
console.log('should log "We have enough tomatoes and onions. There will be 5 extra tomato, and 3 extra onion.":', result2);

var result3 = verifyStock({tomatoes: 2, onions: 4}, 1, 1);
console.log('should log "We need more tomatoes and more onions.":', result3);

var result4 = verifyStock({tomatoes: 4, onions: 2}, 3, 4);
console.log('should log "We have enough onions, but need more tomatoes.":', result4);

var result5 = verifyStock({tomatoes: 10, onions: 6}, 11, 4);
console.log('should log "We have enough tomatoes, but need more onions.":', result5);
JAVASCRIPT


RESET INPUT
RUN TESTS
95
Convert Score To Grade
Write a function called "convertScoreToGrade".

Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

Notes:

(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'
If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
var output = convertScoreToGrade(91);
console.log(output); // --> 'A'
JAVASCRIPT


RESET INPUT
RUN TESTS
Loops (and Iteration)
96
While loop over a series of numbers
We are going to complete a function that takes two parameters, both will be integers (start, end), and logs to the console, all of the integers starting with start, and ending with end. Your function should use a while loop to log each integer from start, up to and including end, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopASequence.

loopASequence(2, 5);
// console output:
  // 2
  // 3
  // 4
  // 5

loopASequence(3, 7);
// console output:
  // 3
  // 4
  // 5
  // 6
  // 7
JAVASCRIPT


RESET INPUT
RUN TESTS
97
While loop over an array
We are going to complete a function that takes one parameter, an array of elements, and logs all of its elements (one at a time) to the console. Your function should use a while loop to log each element from the beginning to the end of the array, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnArray.

loopAnArray(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArray([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5
JAVASCRIPT


RESET INPUT
RUN TESTS
98
While loop over a string
We are going to complete a function that takes one parameter, a string of characters, and logs all of its characters (one at a time) to the console. Your function should use a while loop to log each character from the beginning to the end of the string, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAString.

loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d
JAVASCRIPT


RESET INPUT
RUN TESTS
99
For loop over a series of numbers
We are going to complete a function that takes two parameters, both will be integers (start, end), and logs to the console, all of the integers starting with start, and ending with end. Your function should use a for loop to log each integer from start, up to and including end, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopASequenceAgain.

loopASequenceAgain(2, 5);
// console output:
  // 2
  // 3
  // 4
  // 5

loopASequenceAgain(3, 7);
  // console output:
    // 3
    // 4
    // 5
    // 6
    // 7
JAVASCRIPT


RESET INPUT
RUN TESTS
100
For loop over an array
We are going to complete a function that takes one parameter, an array of elements, and logs all of its elements (one at a time) to the console. Your function should use a for loop to log each element from the beginning to the end of the array, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnArrayAgain.

loopAnArrayAgain(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArrayAgain([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5
JAVASCRIPT


RESET INPUT
RUN TESTS
101
For loop over a string
We are going to complete a function that takes one parameter, a string of characters, and logs all of its characters (one at a time) to the console. Your function should use a for loop to log each character from the beginning to the end of the string, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAStringAgain.

loopAStringAgain('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAStringAgain('abcd');
// console output:
  // a
  // b
  // c
  // d
JAVASCRIPT


RESET INPUT
RUN TESTS
102
Loop over every other value
We are going to complete a function that takes one parameter, an array of elements, and logs every other one of its elements, beginning at index 0, to the console. Your function should use a loop to log every other element from the beginning, skipping every other element, until either end of the array, or one shy of the end (depending on odd or even length of the array passed), then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopEveryOther.

loopEveryOther(['a', 'b', 'c', 'd']);
// console output:
  // a
  // c

loopEveryOther([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 3
  // 5
JAVASCRIPT


RESET INPUT
RUN TESTS
103
Loop starting at a specific index
We are going to complete a function that takes two parameters, an array of elements, and an index, and logs every element, beginning at the inputted index (one at a time) to the console. Your function should use a loop to log every element from the inputted index, until the end of the array, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopStartingAtIndex.

loopStartingAtIndex(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // c
  // d
  // e

loopStartingAtIndex([1, 2, 3, 4, 5], 3);
// console output:
  // 4
  // 5
JAVASCRIPT


RESET INPUT
RUN TESTS
104
Loop in reverse order
We are going to complete a function that takes one parameter, an array of elements, and logs every element, beginning at the back of the input array and ending at the front of the input array, to the console. Your function should use a loop to log every element from the back of the array, up to the front of the array, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopInReverse.

loopInReverse(['a', 'b', 'c', 'd']);
// console output:
  // d
  // c
  // b
  // a

loopInReverse([1, 2, 3, 4]);
// console output:
  // 4
  // 3
  // 2
  // 1
JAVASCRIPT


RESET INPUT
RUN TESTS
105
Use a 'continue' statement
We are going to complete a function that takes two parameters, an array of elements and an index, and logs every element, except for the element at the input index, to the console. Your function should use a loop to log every element except one at the inputted index, and should also use a continue statement (must use a semi-colon after continue for tests to pass) to skip over the value at the inputted index, then return nothing. Your code should NOT use else. Below is an example of the code running, assuming that you will have completed the described function: useContinue.

useContinue(['a', 'b', 'c', 'd'], 1);
// console output:
  // a
  // c
  // d


useContinue([1, 2, 3, 4], 2);
// console output:
  // 1
  // 2
  // 4
JAVASCRIPT


RESET INPUT
RUN TESTS
Using break Coding Challenge
106
Use a 'break' statement
We are going to complete a function that takes two parameters, an array of elements and an index, and logs every element, except those whose index is greater than the input index. Your function should use a loop to log every element up to and including the element located at the input index, and should also use a break statement (must use a semi-colon after break for tests to pass) to skip over the values with indexes greater than that of the input index, then return nothing. Your code should NOT use else. Below is an example of the code running, assuming that you will have completed the described function: useBreak.

useBreak(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // a
  // b
  // c


useBreak([1, 2, 3, 4, 5, 6], 3);
// console output:
  // 1
  // 2
  // 3
  // 4
JAVASCRIPT


RESET INPUT
RUN TESTS
107
For-in loop over an object (1)
We are going to complete a function that takes one parameter, an object of properties, and logs all of its keys (one at a time) to the console. Your function should use a for-in loop to log each key in the object, then return nothing. DO NOT USE Object.keys() in your solution. Below is an example of the code running, assuming that you will have completed the described function: loopOverKeys.

loopOverKeys({a: 1, b: 2, c: 3});
// console output:
  // a
  // b
  // c

loopOverKeys({make: 'Ford', model: 'T', year: 1913});
// console output:
  // make
  // model
  // year
JAVASCRIPT


RESET INPUT
RUN TESTS
108
For-in loop over an object (2)
We are going to complete a function that takes one parameter, an object of properties, and logs all of its values (one at a time) to the console. Your function should use a for-in loop to log each value in the object, then return nothing. DO NOT USE Object.values() in your solution. Below is an example of the code running, assuming that you will have completed the described function: loopOverValues.

loopOverValues({a: 1, b: 2, c: 3});
// console output:
  // 1
  // 2
  // 3

loopOverValues({make: 'Ford', model: 'T', year: 1913});
// console output:
  // Ford
  // T
  // 1913
JAVASCRIPT


RESET INPUT
RUN TESTS
109
For loop over an array of arrays
We are going to complete a function that takes one parameter, an array of arrays, and logs all of its elements (log each element in first inner array, start to end, then second inner array, and so on...) to the console. Your function should use a nested for loop to log each element from all inner arrays, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnArrayOfArrays.

loopAnArrayOfArrays([ ['a', 'b', 'c'], ['d', 'e', 'f'] ]);
// console output:
  // a
  // b
  // c
  // d
  // e
  // f

loopAnArrayOfArrays([ [1, 2], [3, 4], [5], [6, 7, 8] ]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
JAVASCRIPT


RESET INPUT
RUN TESTS
110
For-in loop over an object of objects
We are going to complete a function that takes one parameter, a object of objects, and logs all of its values (log each value in first inner object, one at a time, then second inner object, and so on...) to the console. Your function should use a nested for-in loop to log each value from all inner objects, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnObjectOfObjects.

loopAnObjectOfObjects({ a: {a: 1, b: 2}, b: {a: 5, b: 6} });
// console output:
  // 1
  // 2
  // 5
  // 6

loopAnObjectOfObjects({ structures: {queue: true, stack: false}, plantLife: {tree: 'leaves'}, letters: {apple: 'a', bag: 'b', cats: 'c'} });
// console output:
  // true
  // false
  // leaves
  // a
  // b
  // c
JAVASCRIPT


RESET INPUT
RUN TESTS
111
Loop over an array of objects
We are going to complete a function that takes one parameter, a array of objects, and logs all of its values (log each value in first inner object, one at a time, then second inner object, and so on...) to the console. Your function should use a for-in loop nested inside of a for loop to log each value from all inner objects, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnArrayOfObjects.

loopAnArrayOfObjects([{a: 1, b: 2}, {z: 5, y: 6}, {q: 14} ]);
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14

loopAnArrayOfObjects([{queue: false, stack: true}, {fish: 'swims'}, {shirt: 's', pop: 'p', eye: 'e'} ]);
// console output:
  // false
  // true
  // swims
  // s
  // p
  // e
JAVASCRIPT


RESET INPUT
RUN TESTS
112
Loop over an object of arrays
We are going to complete a function that takes one parameter, a object of arrays, and logs all of its values (log each value in first inner array, one at a time, then second inner array, and so on...) to the console. Your function should use a for loop nested inside of a for-in loop to log each value from all inner arrays, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnObjectOfArrays.

loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14
  // 21

loopAnObjectOfArrays({ third: [false, false], fourth: ['runs'], ninth: ['q', 'l', 'z'] });
// console output:
  // false
  // false
  // runs
  // q
  // l
  // z
JAVASCRIPT


RESET INPUT
RUN TESTS
113
List all combinations of two arrays
We are going to complete a function that takes two parameters, both arrays, and logs all possible combinations of elements separated by a space (see example for details...) to the console. Your function should use a nested for loop to log all combinations of the two arrays, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: generateCombinations.

generateCombinations(['a', 'b', 'c'], ['d', 'e', 'f']);
// console output:
  // a d
  // a e
  // a f
  // b d
  // b e
  // b f
  // c d
  // c e
  // c f

generateCombinations([1, 2], ['buckle', 'my', 'shoe']);
// console output:
  // 1 buckle
  // 1 my
  // 1 shoe
  // 2 buckle
  // 2 my
  // 2 shoe
JAVASCRIPT


RESET INPUT
RUN TESTS
Functions
114
filterOddElements
Write a function called "filterOddElements".

Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array. If the input array contains no odd numbered elements, your function should return an empty array.

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
JAVASCRIPT


RESET INPUT
RUN TESTS
115
computeSumOfAllElements
Write a function called "computeSumOfAllElements".

Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array. If input array is empty, your function should return 0.

var result1 = computeSumOfAllElements([1, 2, 3]);
console.log('should log 6:', result1);

var result2 = computeSumOfAllElements([]);
console.log('should log 0:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
116
Generate Average of Elements
Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average. If input array is empty, your function should return 0.

var input1 = [1,2,3,4,5];
var result1 = computeAverageOfNumbers(input1);
console.log('should log 3:', result1);

var input2 = [];
var result2 = computeAverageOfNumbers(input2);
console.log('should log 0:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
117
Debugging (1)
We are going to debug a function that takes in an object, and a target value. This function will iterate over the object's values, and attempt to locate the target value. If the value is found, the function should return the name of the key where the value in question is located, and if not, the function should return -1. Below is an example of the code running, assuming that you will have debugged the described function: keyOfObjectValue:

var result1 = keyOfObjectValue({cucumbers: 14, carrots: 20, peas: 400}, 20);
console.log('should log "carrots":', result1);

var result2 = keyOfObjectValue({name: 'Bruce Wayne', hero: 'Batman', city: 'Gotham'}, 'Superman');
console.log('should log -1:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
118
Debugging (2)
We are going to debug a function that takes in an array of numbers. This function will iterate over the array's number elements, and return a count representing the number of elements whose value is greater than 40. If there are no values above 40, then the function should return 0. Below is an example of the code running, assuming that you will have debugged the described function: getElementsAbove40:

var result1 = getElementsAbove40([1, 42, 5, 314, 2, 89]);
console.log('should log 3:', result1);

var result2 = getElementsAbove40([1, 4, 3, 2, 6]);
console.log('should log 0:', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
119
Debugging (3)
We are going to debug a function that takes in an array of strings, representing words in a sentence. This function should iterate over the input array and should create, and return, a resulting sentence from the words therein. Below is an example of the code running, assuming that you will have debugged the described function: createSentence:

var result1 = createSentence(['I', 'am', 'worth', 'it']);
console.log('should log "I am worth it.":', result1);

var result2 = createSentence(['My', 'problems', 'matter']);
console.log('should log "My problems matter.":', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
120
Use an object to count words in a sentence
Write a function called "countWords".

Given a string (words separated by spaces), "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string. If given an empty string, your function should return an empty object.

var result1 = countWords('ask a bunch get a bunch');
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

var result2 = countWords('');
console.log('should log "{}":', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
121
Use an object to count letters in a word
Write a function called "countAllCharacters".

Given a string of characters, "countAllCharacters" returns an object where each key is a character in the given string, with its value being how many times that character appeared in the given string. If given an empty string, your function should return an empty object.

var result1 = countAllCharacters('banana');
console.log('should log "{b: 1, a: 3, n: 2}":', result1);

var result2 = countAllCharacters('');
console.log('should log "{}":', result2);
JAVASCRIPT


RESET INPUT
RUN TESTS
