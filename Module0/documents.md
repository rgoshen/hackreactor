All The Docs
Collected here is literally all of the documentation contained in the Prep course. Please use responsibly.
JS Overview
What is JavaScript?
JavaScript is a programming language created for the web
It is a full-fledged dynamic programming language
When applied to an HTML document, it can provide dynamic interactivity on websites
If we picture the idea of a website, the hierarchy is as follows:
HTML (HyperText Markup Language) is the contents of the page
CSS (Cascading Style Sheets) is information about how the HTML contents of the page should be formatted when displayed to a user
JavaScript, or JS, allows the page to react to user inputs (clicking, scrolling, etc.), as well as other events
There is certainly a great deal more to JS, and web applications, but this mental model is sufficient as this point.

The Developer Console
The first thing we are going to do, before we get into the core of JS fundamentals, is access a web page, then have a look at the "Developer Console." To make things simple, if you are here learning JS for the very first time, it is a solid idea to download and use Google Chrome. Rather than extoll the endless virtues of Chrome, which is a debatable position to take, we are going to use Chrome exclusively in an effort to reduce complexity. To be sure, while this course can be completed using virtually any browser, a few specific instructions will likely be directly applicable for students using Chrome. If you are using another browser, a quick search of "how do I do {desired action} using {alternate browser}, (e.g. how do I open the developer console using Firefox).

Opening the Console
There are several ways to open the developer console, and a large number of things to do once you have it open. For the time being, we will introduce two ways.

The first is a keyboard shortcut that will work on MacOS operating systems. While visiting a website, you must hold down both the "command" key, and the "option" key, then press "j", the console will then open in your browser
The second way is described in the screenshot below:


The console is a great place to run quick snippets (small sections) of JS code
Pro-tip: console.log messages
Try running this code in the console:

console.log("This is the console output:", 4);
As you will see if you run this code, we can place messages that tell us more information about our console output by placing the message in quotes (this makes it a String), and separating it with a comma. We will learn more about strings later.

REPL
REPL stands for read-eval-print-loop
It is a simple, interactive computer programming environment
A developer can type code snippets and see an immediate output
It can be an invaluable tool for seeing what small sections of code will actually do
Variables
What is Programming?
Programming is largely instructing a computer about how to manipulate data
We will go over what kinds of data are available in JavaScript
Concurrently (at the same time) we will thread in an example of how to manipulate those kinds of data
With this in mind, JS has several data types, or ways of storing information. In this section we will introduce some basic and useful data types, as well as how we can refer to these data types within our programs (variables). We will also wrap up each lesson by introducing a way to manipulate these data types, in the form of functions.

Variables
A variable is a named location for storing a value. It is important to consider that this value we are storing will have a "type".

A quick comment about comments
Comments are sections of code that the computer ignores
It is mainly for you, or other human programmers
They can describe what your code does, or:
They can describe what code you will write should do (pseudocode)
// comments can be a single line, and are denoted by "//"
/*
  We can also allow our comments to take up
  multiple lines.
  There are lots of reasons why this might be the case
  In order to create a multiline comment, we place "/", and ""*" before our
  multiline comment, and "*", and "/" afterwards.
*/
An Initial glance at Functions
Consider this piece of code that you ran in the console during the previous set of challenges:

var elements = document.getElementsByClassName("title");
document.getElementsByClassName("title") is an example of calling a function
In this case, it grabs any "elements", or components from a webpage that have class name of "title", and saves them in a variable called elements
By and large, the approach outlined by this course is to learn JavaScript by building an understanding of functions.

Functions are the prime mechanism with which you will be manipulating data
The tend to range from extremely simple use cases (scenarios in which you would use the function or program) as in simply "returning" what was inputted (functions typically take inputs and have outputs), to somewhat more complex use cases (take for example our "call" to document.getElementsByClassName("title"))
Coding Challenges
Each subsequent lesson will be accompanied by coding challenges
You will face a great deal of these
They are an effective way to solidify your knowledge
One question that jumps out for a great deal of beginners when they see their first coding challenge is "What does it mean by 'Run Tests'?" Let us take a glance at a quick example function:

// this function has one simple operation: it returns 1
function returnOne() {
  return 1;
}

// this part is similar to what happens when you click 'Run Tests'
var result = returnOne();
console.log(result); // should log 1 to the console
Despite the possibly obvious nature of this function, it is part of software engineering to verify that your code works using automated tests. The above example is a simple way of doing just this: we save the result of calling our function (assign the function's return value to a variable), log it to the console (console.log(result)), then check to see if everything worked out.

For now, this is a good working mental model of what "Submit", or "Run Tests" is doing. Essentially, it will take your function, run it with some arguments (this function took no arguments, but others surely will), possibly compare the results with desired outcomes, then notify the developer as to whether this was successful or not.

What is Undefined?
Consider the following code.

var declaration;
console.log(declaration);
Please run the code listed above in a console.

As you can see, we have logged undefined to the console
When we say var declaration;, we have declared a variable called declaration
But, we have yet to assign it a particular value
JavaScript handles this by storing the name of the variable in memory, and giving it a default value of undefined
A small note about Null
You may come across something called null. A precise definition of the Null type, and null will require more information for us to get into. For now, simply be aware that there is value called null, which is different than undefined, and also has applications in JS programming.

Return Values for Functions
Functions usually return a value
The function, after running, "returns" something
Furthermore, a function's default behavior, if we do not tell a function what to return, will return undefined
Consider to following function:
// first, we declare a function that takes no parameters, does nothing, and returns nothing
function nothing() {

}

var returnValue = nothing(); // this line "calls" the function and assigns the value returned to returnValue
console.log(returnValue); // if you run this code in a console, you can see that returnValue is undefined
What are Booleans?
Booleans are a logical value type
Booleans can be true or false
Consider the following code

var isRaining = true;
console.log(isRaining);

var isVegetarian = false;
console.log(vegetarian);
In the above examples, we have created two boolean values, one for each possible value that a boolean type variable can have: true, and false.

Return Values for Functions
Previously, we discussed a function that did not return anything, and therefore returned undefined by default
Let us now examine two examples of functions that return a boolean type value:
// first we will declare a function that takes no parameters, does nothing, and returns true
function isTrue() {
  return true;
}
var trueResult = isTrue(); // this line "calls" the function and assigns the value returned to trueResult
console.log(trueResult); // if you run this code in the console, you can see that trueResult has been set to a value of true
// next, we will declare a function that takes no parameters, does nothing, and returns false
function isFalse() {
  return false;
}
var falseResult = isFalse(); // this line "calls" the function and assigns the value returned to falseResult
console.log(falseResult); // if you run this code in the console, you can see that falseResult has been set to a value of false
JavaScript and Numbers
There is one number type in JS, and it is called Number
If a value is of type "number", it can be positive, negative, an integer, or a floating-point (decimal)
In addition to being able to represent integers and floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN (not-a-number, see below for more information on NaN)
Examples:

var integer = 4;
var float = 4.7;
var max = +Infinity;

// some operations with numbers
var sum = 4 + 5; // adding two numbers
var difference = 9 - 4; // subtracting two numbers
var product = 4 * 5; // multiplying two numbers
var quotient = 20 / 4; // dividing two numbers
A quick note about NaN
Examine the following code:

console.log(4 + 5);
It is relatively easy to see that 9 will be logged to the console.

With that in mind, consider this:

console.log(4 + undefined);
As you can see, we now log NaN to the console. NaN is more a less a way for JavaScript to say "I think you meant to have a number here, but I cannot produce a number with what you gave me, so have NaN instead :)"

A mention of Modulo (%)
In addition to +, -, *, and /, corresponding to addition, subtraction, multiplication, and division, there is one more Mathematical concept we must visit.

In practice % will return the remainder after division. Consider dividing 9 by 2. 2 "goes into" 9 four times, and there is a remainder of 1. Thus:

var remainder = 9 % 2;
console.log(remainder); // should log 1 to the console
This concept will be featured later on, so a quick glance is all that is necessary at this point
One thing for those of you reading every word of this course: in order to tell if a number is odd or even, we can use the modulo operator
anyOddNumber % 2 will always evaluate to 1
anyEvenNumber % 2 will always evaluate to 0
Return Values for Functions, and our first parameter
Let us walk through a function, this time with a parameter, as well as a return value.

// let us declare a function that takes one parameter, adds one to that parameter, and returns the result
function addOne(num) {
  return num + 1;
}

var incremented = addOne(6); // this line calls the function with an "argument" of 6, and assigns the value returned to `incremented`
console.log(incremented); // if you run this code in the console, you can see that `incremented` has been set to a value of 7
Parameters vs. Arguments
Using the above example, when you are referring to the definition of the function, we refer to what the function "takes" as its parameter(s); in this case num. When considering an actual "call" to the function, like addTwo(6), we refer to 6 as an argument.

What are Strings?
A JavaScript string stores a series of characters, like "Excelsior!"
A string can be any text inside of double or single quotes: 'SpongeBob' or "SpongeBob"
It is possible to access an entire string, or an individual character within it
To that end, the characters in a string are "indexed", and the indexes start at 0
For a demonstration of this concept, open the developer console once more, and paste the following code:

var testString = 'words';

var firstCharacter = testString[0]; // accesses the first character: 'w'
var thirdCharacter = testString[2]; // accesses the third character: 'r'
console.log(firstCharacter); // will log 'w'
console.log(thirdCharacter); // will log 'r'
Empty Strings
A string does not need to have anything in it to still be considered a string
In some cases, it might be useful to establish a variable as a string, without actually adding any characters to it
var emptyString = "";
console.log(emptyString);
Return Values for Functions, and multiple parameters
// first we will declare a function that takes a string parameter and returns it
function returnString(string) {
  return string;
}
var resultString = returnString('hooray for programming');
console.log('resultString:', resultString); // we have added console.log messages to help us identify which variable is which when this code is run in the console
// next, we will declare a function that takes a string parameter and returns the first letter
function returnFirstCharacter(string) {
  return string[0];
}
var firstCharacter = returnFirstCharacter('coffee');
console.log('firstCharacter:',firstCharacter);
// lastly, we will declare a function that takes a string and a number parameter and returns the character located at the given index within the string
function returnACharacter(string, index) {
  return string[index];
}
var character = returnACharacter('tea', 1);
console.log('character:', character);
A Brief Commentary on Naming Variables
A variable is a named location for storing a value
It is important to consider that this value we are storing will have a "type"
The name we choose can help, or it can hurt, our understanding of the program
Let us consider a few examples for each of the previously mentioned data types:
// Numbers
var count = 9;
var whatever = 6398;

// Strings
var name = "Charlemagne";
var something = "Head Chef";

// Booleans
var hasBeenDelivered = true;
var blah = false;
For each of the previous three examples, we have provided one good variable name, and one bad variable name. While there are syntactical considerations associated with naming a variable (no spaces, no !, %, etc.), as programmers we must go further than that.

Consider the example for Boolean type variables. We have two variable names, "hasBeenDelivered", and "blah". If we consider that part of writing excellent code is its future readability, it is simple to understand that while "hasBeenDelivered" gives us a good picture of what this variable represents in the context of our program, "blah" does nothing of the sort. It is highly likely that the utility of the variable "blah" would be lost after a small interval of time.

Objects (Arrays and Objects)
What is an Array?
So far, we have discussed several data types:

undefined
boolean
number
string
We consider these data types to be scalar. The following data type, broken into two sections, Arrays and Objects, are examples of collections of data. We begin with arrays:

The Array "object" is used to store an ordered list of multiple values in a single variable
Array indexes, like string indexes, are zero-based: the first element in an array is located at index 0, the second at index 1, and so on
Arrays are considered "objects" in JavaScript, for several reasons, none of which truly matter to us at this point
var fruits = ['oranges', 'bananas', 'apples'];
var scores = [98, 85, 91, 78, 82];

var firstFruit = fruits[0];
var thirdScore = scores[2];

console.log('firstFruit:', firstFruit);
console.log('thirdScore:', thirdScore);
Empty Arrays
An array does not need to have anything in it to still be considered an array
In some cases, it might be useful to establish a variable as an array, without actually adding any elements to it
var emptyArray = [];
console.log(emptyArray);
Return Values for Functions, and using a variable as an argument
// first, we will declare a function that takes an array parameter and returns it
function returnArray(array) {
  return array;
}

var fruits = ['oranges', 'bananas', 'apples']; // we are defining a variable that we will pass to our function as an argument
var resultArray = returnArray(fruits); // now, we call the function with 'fruits' as our argument
console.log('resultArray:', resultArray);
// next, we will declare a function that takes in an array and an index, and returns the element located at the inputted index
function returnAnElement(array, index) {
  return array[index];
}

var scores = [98, 85, 91, 78, 82];
var position = 3;
var positionElement = returnAnElement(scores, position);
console.log('positionElement:', positionElement);
Creating a variable inside of a Function definition
Up until now, we have been dealing entirely with the parameters when defining our functions. Now, let us look at a case where we create a new variable inside of our function definition, then return it.

// we will declare a function that takes no parameters, creates an array, and returns the newly created array
function createAndReturnAnArray() {
  var newArray = ['some', 'elements', 4, 5];
  return newArray;
}

var resultArray = createAndReturnAnArray();
console.log('resultArray:', resultArray);
What is an Object?
An object is a collection of properties
A property is an association between a name (key) and a value (some data type)
A property's value can be any of the types we have gone over, as well as being another object, or even a function
In the case where the value of a property is a function, we refer to the property as a method
// first let us look at an object with boolean values
var booleanObj = {
  isObject: true,
  isString: false
};
// next, let us look at an object with number values
var numbersObj = {
  count: 4,
  remaining: 7
};
// finally, let us look at an object with string values
var stringsObj = {
  name: 'Daisy',
  currentTitle: 'pupper',
  futurePosition: 'doggo'
};
As stated above, we can also have objects whose values are Arrays, Objects, or even Functions.

Accessing the Value of a Property
We need to the name of the object, and the name of the key
Two ways to do same thing:
Can use "dot notation"
Can use "bracket notation"
var stringsObj = {
  name: 'Daisy',
  currentTitle: 'pupper',
  futurePosition: 'doggo'
};

// to access a value within an object
var valueOfName = stringsObj.name;
console.log('accessed using dot notation:', valueOfName);
OR:

var stringsObj = {
  name: 'Daisy',
  currentTitle: 'pupper',
  futurePosition: 'doggo'
};

var valueOfName = stringsObj['name'];
console.log('accessed using bracket notation:', valueOfName);
Empty Objects
An object does not need to have any properties to still be considered an object
In some cases, it might be useful to establish a variable as an object, without actually adding any properties to it
The typeof issue
One very useful tool in programming is the typeof operator
Its functionality is rather simple, and when applied to a value, it will tell you the type of value in question
Run the following code in a console to get a sense of how this works:
console.log(typeof undefined); // we have left off the label for this message, but will include it for the rest
console.log('type of true:', typeof true);
console.log('type of false:', typeof false);
console.log('type of 9', typeof 9);
console.log('type of 4.0:', typeof 4.0);
console.log('type of "a string of characters":', typeof "a string of characters");
It would be completely understandable to assume that this would work for Arrays as well
Unfortunately, this is not the case:
console.log('type of an array:', typeof [3, 4, 5]);
console.log('type of an object:', typeof {a: 1});
When run in the console, this code will output "object" for both cases
When dealing with arrays, it is important to remember that in JavaScript, arrays are "list like objects"
Let's look at how to tell the difference between arrays and objects, using Array.isArray():
console.log('Is an array?:', Array.isArray([3, 4, 5]));
console.log('Is an array?:', Array.isArray({a: 1}));
Return Values for Functions
//first, we will declare a function that takes an object parameter and returns it
function returnObject(object) {
  return object;
}

var user = {
  id: 4,
  name: 'Robert Solomon',
  occupation: 'Mathematician'
}; // we are defining a variable that we will pass to our function as an argument
var resultObject = returnObject(user); // now, we call the function with 'user' as our argument
console.log('resultObject:', resultObject);
// next we will declare a function that takes in an object, and a key, and returns the value located at the inputted key
function returnAValue(obj, key) {
  return obj[key];
}

var computer = {
  name: "MacBook Pro",
  version: "10.14.6",
  processor: "2 GHz Intel Core i7",
  memory_gb: 8
};
var nameOfKey = "version";
var valueAtKey = returnAValue(computer, nameOfKey);
console.log('valueAtKey:', valueAtKey);
// we will now declare a function that takes no parameters, creates an object, and returns the newly created object
function createAndReturnAnObject() {
  var newObj = {a: 1, b: 2};
  return newObj;
}

var resultObject = createAndReturnAnObject();
console.log('resultObject:', resultObject);
Example Use Cases of Typeof and Array.isArray()
// let us write a function that returns the type of argument the function has been called with (assume the argument will be scalar - not a collection)
function getType(param) {
  return typeof param;
}

var numType = getType(56);
console.log('numType:', numType);

var stringType = getType('serial number');
console.log('stringType:', stringType);

var undefinedType = getType();
console.log('undefinedType:', undefinedType); //think carefully about what is happening here
// let us write a function that returns true if the argument is an Array, and returns false if it is not
function determineIsAnArray(input) {
  var isAnArray = Array.isArray(input);
  return isAnArray;
}

var affirmative = determineIsAnArray([1, 2, 3]);
console.log('affirmative:', affirmative);

var negative = determineIsAnArray({a: 1});
console.log('negative:', negative);
Operators and Methods
What is an Operator?
An operator is used to perform specific computations or operations on operands
We have seen a few so far: =,+, -, and typeof
They can be unary: {operator} {operand} (e.g. typeof "username"), or:
They can be binary: {operand1} {operator} {operand2} (e.g. 4 + 5)
There are many more
What is a Method?
A method is a function that is a property of an object
We have seen a few so far: console.log, and Array.isArray()
There are many more
A few details about console.log and Expressions as Arguments
console.log() is a method (a function that is a property of an object)
When we call console.log() we will typically pass it an argument, or sometimes several arguments, where each argument is separated by commas
The commas are also operators
In a few cases of calling console.log, we said something like:

console.log('some message:', typeof {a: 1});
To be sure, we are calling this function, console.log, with two arguments. The first is a string:

'some message:'
and the second is an operator applied to an object:

typeof {a: 1}
This second argument is an example of calling a function with an expression as an argument. Before the function runs, the expression is "evaluated". typeof {a: 1} evaluates to "object", thus the resulting message when this code is run in the console. Let us keep this concept in mind as we proceed through the material.

Expressions assigned to a Variable
Let's think about the above example:

console.log('some message:', typeof {a: 1});
One thing we have already been doing, is assigning the result of an expression to a variable, using =; which is an assignment operator. Let us do so now:

var typeOfOperand = typeof {a: 1};
console.log('some message:', typeOfOperand);
A Quick Refresher on Booleans
A Boolean is a logical data type that can have one of two values:

true, or:
false
Let us get started on some ways to interact with Booleans.

Not ( ! )
Oftentimes, we will want to look at the opposite of a boolean expression
This can quickly become confusing, thus it can be helpful to examine this english language example
Consider the word "nonsense":
Essentially, if we say something is nonsense, we are saying that it is not sense
Furthermore, someone might disagree with this description, and respond with "that is not nonsense"
In code, something like that might look like this:
var sense = true;
// to describe nonsense
var nonsense = !sense;
console.log('nonsense:', nonsense);
var notNonsense = !nonsense;
console.log('not nonsense:', notNonsense);
Or ( || )
We can compare two boolean values and decide if at least ONE of them is true
There are four cases to examine when comparing two boolean values:
console.log(true || true); // will log true
console.log(true || false); // will log true
console.log(false || true); // will log true
console.log(false || false); // will log false
We can demonstrate this same idea by creating a variable, and assigning it to the result of comparing the two variables using the || operator
Run the code below, then change the values to examine how it works
var haveACar = true;
var bussesAreRunning = true;

var willAttendEvent = haveACar || bussesAreRunning;
console.log("I will attend the event:", willAttendEvent);
And ( && )
We can also compare two boolean values and decide if BOTH of them are true:
console.log(true && true); // will log true
console.log(true && false); // will log false
console.log(false && true); // will log false
console.log(false && false); // will log false
We can demonstrate this same idea by creating a variable, and assigning it to the result of comparing the two variables using the && operator
Run the code below, then change the values to examine how it works
var friendCanGo = true;
var iCanGo = true;

var weWillAttend = friendCanGo && iCanGo;
console.log("Both my friend and I will go:", weWillAttend);
Combinations
We can have several scenarios where we compare more than two boolean values
Linking together combinations of boolean comparisons can give our programs complexity
Run the code below, then change the values to examine how it works
var storeIsOpen = true;
var isHungry = true;
var isThirsty = true;

var willGoToStore = storeIsOpen && (isHungry || isThirsty);
console.log(willGoToStore); // will log true
Equal to ( === )
This operator allows us to compare two scalar values directly
Works with undefined, Booleans, Numbers, and Strings
In the case of undefined:

var declared;
var undefinedMatch = declared === undefined;
console.log('undefinedMatch:',undefinedMatch);
In the case of Booleans:

var isRaining = true;
var weatherPredictedRain = true;

var weathermanWasRight = isRaining === weatherPredictedRain;
console.log('weathermanWasRight:', weathermanWasRight);
In the case of Numbers:

var expectedCount = 10;
var actualCount = 9;

var expectationsMet = expectedCount === actualCount;
console.log('expectationsMet:', expectationsMet);
In the case of Strings:

var currentString = 'happiness';
var nextString = 'happiness';

var stringsMatch = currentString === nextString;
console.log('stringsMatch:', stringsMatch);
Not equal to ( !== )
This operator allows us to compare two scalar values directly
Works with undefined, Booleans, Numbers, and Strings.
It works similarly (but exactly opposite) to the "equal to" operator ( === )
In the case of undefined:

var declared = 'something';
var undefinedDoesNotMatch = declared !== undefined;
console.log('undefinedDoesNotMatch:',undefinedDoesNotMatch);
In the case of Booleans:

var isRaining = true;
var weatherPredictedRain = false;

var weathermanWasNotRight = isRaining !== weatherPredictedRain;
console.log('weathermanWasNotRight:', weathermanWasNotRight);
In the case of Numbers:

var expectedCount = 10;
var actualCount = 9;

var expectationsNotMet = expectedCount !== actualCount;
console.log('expectationsNotMet:', expectationsNotMet);
In the case of Strings:

var currentString = 'happiness';
var nextString = 'sadness';

var stringsDoNotMatch = currentString !== nextString;
console.log('stringsDoNotMatch:', stringsDoNotMatch);
A Quick Note about Truthy and Falsy
You may come across the idea of values' being truthy or falsy
Essentially, a truthy value is one that is considered true when encountered in a Boolean context
All values are truthy, unless explicitly defined as falsy
Falsy values:
false
0
""
null
undefined
NaN
Exploiting this dynamic can be useful for certain operations
A Quick Refresher on Numbers
There is one number type in JS, and it is called Number
If a value is of type "number", it can be positive, negative, an integer, or a floating-point (decimal)
In addition to being able to represent integers and floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN (not-a-number, see below for more information on NaN)
Addition ( + )
Let us consider the case of wanting to add together two values and that these values happen to be numbers
We can do so using the + operator:
var sum = 3 + 4;
console.log('sum:', sum);
We can also do this with variables whose values are numbers:

var numberOfApples = 3;
var numberOfBananas = 4;
var totalFruit = numberOfApples + numberOfBananas;
console.log('totalFruit:', totalFruit);
Subtraction ( - )
Let us consider the case of wanting to subtract one number from another number
We can do so using the - operator:
var difference = 12 - 4;
console.log('difference:', difference);
We can also do this with variables whose values are numbers:

var numberOfApplesInitially = 12;
var numberOfApplesSold = 4;
var numberOfApplesRemaining = numberOfApplesInitially - numberOfApplesSold;
console.log('numberOfApplesRemaining:', numberOfApplesRemaining);
Multiplication ( * )
Let us consider the case of wanting to multiply one number by another number
We can do so using the * operator:
var product = 7 * 4;
console.log('product:', product);
We can also do this with variables whose values are numbers:

var numberOfStores = 7;
var numberOfEmployeesPerStore = 4;
var numberOfTotalEmployees = numberOfStores * numberOfEmployeesPerStore;
console.log('numberOfTotalEmployees:', numberOfTotalEmployees);
Division ( / )
Let us consider the case of wanting to divide one number by another number
We can do so using the / operator:
var quotient = 24 / 6;
console.log('quotient:', quotient);
We can also do this with variables whose values are numbers:

var slicesOfPizza = 24;
var numberOfPeople = 6;
var slicesPerPerson = slicesOfPizza / numberOfPeople;
console.log('slicesPerPerson:', slicesPerPerson); // no worries, the slices are not that big
Exponent ( ** )
Let us consider the case of wanting to raise one number to the power of another number
We can do so using the ** operator:
var power = 2 ** 5;
console.log('power:', power);
We can also do this with variables whose values are numbers:

var choicesPerCategory = 2;
var numberOfCategories = 5;
var totalNumberOfChoices = choicesPerCategory ** numberOfCategories;
console.log('totalNumberOfChoices:', totalNumberOfChoices);
Modulo ( % )
Let us consider the case of wanting the remainder after dividing one number by another number
We can do so using the % operator:
var remainder = 11 % 2;
console.log('remainder:', remainder);
We can also do this with variables whose values are numbers:

var numberOfSocks = 11;
var numberOfSocksPerPerson = 2;
var numberOfSocksRemaining = numberOfSocks % numberOfSocksPerPerson;
console.log('numberOfSocksRemaining:', numberOfSocksRemaining);
Plus-equals ( += )
Let us consider the case of wanting to increment a variable's value
We can do so using the += operator:
var increment = 11;
increment += 2;
console.log('increment:', increment);
We can also do this with variables whose values are numbers:

var totalUnitsOfCargo = 11;
var additionalUnits = 2;
totalUnitsOfCargo += additionalUnits;
// totalUnitsOfCargo = totalUnitsOfCargo + additionalUnits
console.log('totalUnitsOfCargo:', totalUnitsOfCargo);
Minus-equals ( -= )
Let us consider the case of wanting to decrement a variable's value
We can do so using the -= operator:
var decrement = 13;
decrement -= 3;
console.log('decrement:', decrement);
We can also do this with variables whose values are numbers:

var totalUnitsAvailable = 13;
var unitsSold = 3;
totalUnitsAvailable -= unitsSold;
// totalUnitsAvailable = totalUnitsAvailable - unitsSold
console.log('totalUnitsAvailable:', totalUnitsAvailable);
Times-equals ( *= )
Let us consider the case of wanting to multiply a variable's value by another, and reassign the first variable to the result of said operation
We can do so using the *= operator:
var result = 10;
result *= 4;
console.log('result:', result);
We can also do this with variables whose values are numbers:

var currentProduct = 10;
var multiplier = 4;
currentProduct *= multiplier;
// currentProduct = currentProduct * multiplier
console.log('currentProduct:', currentProduct);
Divide-equals ( /= )
Let us consider the case of wanting to divide a variable's value by another, and reassign the first variable to the result of said operation
We can do so using the /= operator:
var result = 55;
result /= 5;
console.log('result:', result);
We can also do this with variables whose values are numbers:

var currentQuotient = 55;
var divider = 5;
currentQuotient /= divider;
// currentQuotient = currentQuotient / divider
console.log('currentQuotient:', currentProduct);
Absolute Value
Let us consider the case of wanting to get the absolute value of a number
We can do so using the Math.abs() method:
var original = -295;
console.log('absolute value applied:', Math.abs(original););
We can also do this with variables whose values are numbers:

var position1 = 5;
var position2 = 300;
var difference = position1 - position2;
var magnitudeDifference = Math.abs(difference)
console.log('magnitudeDifference:', magnitudeDifference);
Rounding Up and Rounding Down
Let us consider the case of wanting to round a number either up or down
We can do so using the Math.ceil() (up), and the Math.floor() (down) methods:
var original = 33.7;

console.log('rounded up:', Math.ceil(original));
console.log('rounded down:', Math.floor(original));
We can also do this with variables whose values are numbers:

var score = 89.4;
var gradeFromATeacherWhoGetsIt = Math.ceil(score);
var gradeFromAMonsterInTeachersClothes = Math.floor(score);

console.log('gradeFromATeacherWhoGetsIt:', gradeFromATeacherWhoGetsIt);
console.log('gradeFromAMonsterInTeachersClothes:', gradeFromAMonsterInTeachersClothes);
Parsing an Integer or a Float from a String
Let us consider the case of wanting to take a string version of a number, and get an actual number
We will examine two cases, wanting to "parse" an integer, and:
Wanting to parse a float (decimal)
We can do so using the Number.parseInt(), and the Number.parseFloat() methods:
var parsedInteger = Number.parseInt("49");
console.log('parsedInteger:', parsedInteger);

var parsedFloat = Number.parseFloat("29.45")
console.log('parsedFloat:', parsedFloat);
We can also do this with variables whose values are string versions of numbers:

var userIdString = "49";
var parsedUserId = Number.parseInt(userIdString);
console.log("parsedUserId:", parsedUserId);

var userRatingString = "29.45";
var parsedUserRating = Number.parseFloat(userRatingString)
console.log('parsedUserRating:', parsedUserRating);
Generate a Random Number
Let us consider the case of wanting to generate a random number
We can do so using the Math.random() method
Math.random() will generate a number between 0 and 1
The number generated can be 0, but will not be 1
A little more work is required to get a random number between two specific values
// generate a random number between 0 and 1
console.log('random number between 0 and 1:', Math.random());
// generate a random number between 1 and 10
var randomBetween1And10 = Math.random() * (10 - 1) + 1;
console.log('randomBetween1And10:', randomBetween1And10);
We can also do this with variables whose values are numbers:

var min = 90;
var max = 100;
var randomBetweenMinAndMax = Math.random() * (max - min) + min;
console.log("randomBetweenMinAndMax:", randomBetweenMinAndMax);
Greater than ( > ) and Greater than or equal to ( >= )
Let us consider the case of wanting to tell if one number value is greater than another number value
We can do so using the > operator
Let us consider at the same time, the case of wanting to tell if one number value is greater than or equal to another number value
We can do so using the >= operator
var exclusiveLowerBound = 7;
console.log('actual is greater than exclusive lower bound:', 9 > exclusiveLowerBound);

var inclusiveLowerBound = 5;
console.log('actual is greater than or equal to inclusive lower bound:', 5 >= inclusiveLowerBound);
We can also do this with variables whose values are numbers:

var numberOfEnvelopesPurchased = 430;
var numberOfEnvelopesNeeded = 350;
var acquiredSufficientEnvelopes = numberOfEnvelopesPurchased >= numberOfEnvelopesNeeded;
console.log("acquiredSufficientEnvelopes:", acquiredSufficientEnvelopes);
Less than ( < ) and Less than or equal to ( <= )
Let us consider the case of wanting to tell if one number value is less than another number value
We can do so using the < operator
Let us consider at the same time, the case of wanting to tell if one number value is less than or equal to another number value
We can do so using the <= operator
var exclusiveUpperBound = 17;
console.log('actual is less than exclusive upper bound:', 9 < exclusiveUpperBound);

var inclusiveUpperBound = 51;
console.log('actual is less than or equal to inclusive upper bound:', 51 <= inclusiveUpperBound);
We can also do this with variables whose values are numbers:

var fuelNeeded = 27;
var fuelCapacity = 30;
var canMakeTripWithoutStopping = fuelNeeded <= fuelCapacity;
console.log("canMakeTripWithoutStopping:", canMakeTripWithoutStopping);
A Quick Refresher on Strings
A JavaScript string stores a series of characters, like "Excelsior!"
A string can be any text inside of double or single quotes: 'SpongeBob' or "SpongeBob"
It is possible to access an entire string, or an individual character within it
To that end, the characters in a string are "indexed", and the indexes start at 0
Creating a String
Let us consider the case of wanting to create a string
In order to create a string, we assign a variable to a series of characters wrapped with single of double quotes
var newString = "a series of characters";
console.log('newString:', newString);
Accessing a Character in a String
Let us consider the case of wanting to access a specific character from within a string
Recall that strings are zero-indexed
This means that we can access a given character within a string, but these characters begin at 0:
var name = "Robert Smalls";
var firstCharacter = name[0];
var eighthCharacter = name[7];

console.log('firstCharacter:',firstCharacter); // should log "R"
console.log('eighthCharacter:', eighthCharacter); // should log "S"
We can also do this with variables for the indexes:

var name = "Robert Smalls";
var index = 1;
var secondCharacter = name[index];

console.log('secondCharacter:',secondCharacter); // should log "o"
Reassigning a String
Let us consider the case of wanting to change a string
Strings are immutable
This means that we cannot change them once they are created
This is not a large problem, as we can certainly reassign a variable from one string to another without much difficulty:
var job = "Shipping Coordinator";
console.log('job before reassignment:', job);

// we reassign a variable by leaving off the keyword 'var' (provided variable name already exists)
job = "Director of Shipping";
console.log('job after reassignment:', job);
Add together or concatenate two or more Strings
Let us consider the case of wanting to concatenate two or more strings
Frequently, you will be asked to add strings together in order to create a new string of some kind
We can do so using the + operator:
var firstName = "Robert";
var lastName = "Smalls";

var fullName = firstName + lastName;
console.log('fullName without space:', fullName);
In the previous example, we crated the string "RobertSmalls", which is not perfectly precise. To fix this, we will need to add a third string with just a space:

var firstName = "Robert";
var lastName = "Smalls";

var fullName = firstName + " " + lastName;
console.log('fullName with space:', fullName);
String Interpolation
Let us consider the case in which we want to build a message around the values of a variable
This is called string interpolation
We can do this using the + operator (note -> there are newer ways to do this - research template literals):
var food = "pizza";
var methodOfTransport = "the train";

var sentence = "The best way to travel to get " + food + " is surely to take " + methodOfTransport;
console.log("Resulting sentence:", sentence);
Get the length of a string
Let us consider the case of wanting to get the length of a string
We can do so using the .length property (not a method, although vaguely similar in appearance):
var lengthOfName = "Alan Turing".length;
console.log('lengthOfName version 1:', lengthOfName);
We can also do this with variables whose values are strings:

var name = "Alan Turing";
var lengthOfName = name.length;
console.log('lengthOfName version 2:', lengthOfName);
Get the last character of a string
Let us consider the case of wanting to get the last character in a string
Were we to attempt to use an actual number index, we will be unsuccessful for the general case
This is because we may not automatically know how long the string in question is
We can do so using the .length property and the fact that a string's index start at 0:
var lastCharacter = "JavaScript"["JavaScript".length - 1];
console.log('last character:', lastCharacter);
We can also do this with variables whose values are strings:

var language = "JavaScript";
var lastIndex = language.length - 1;

var lastCharacter = language[lastIndex];
console.log('lastCharacter:', lastCharacter);
Using the substring Method
Let us consider the case of wanting to get a portion of a string
We can do so using the .substring() method (note -> there are other ways to do this - research the .substr() method):
var subString = "JavaScript".substring(2, 9);
console.log('portion of string from before index 2, up to, but not including, index 9:', subString);
var subString = "JavaScript".substring(1);
console.log('portion of string from before index 1, to the end of the string:', subString);
var subString = "JavaScript".substring();
console.log('portion which includes entire string:', subString);
We can also do this with variables whose values are strings:

var language = "JavaScript";
var startIndex = 2;
var endIndex = 9;

var subString = language.substring(startIndex, endIndex);
console.log('portion of string from before startIndex, up to, but not including, endIndex:', subString);
Using the indexOf Method
Let us consider the case of wanting to determine where in a string we can find a particular substring
We can do so using the .indexOf() method for string
var indexOfSubString1 = "Google".indexOf('oog');
console.log('index where substring is found:', indexOfSubString1);

var indexOfSubString2 = "In defense of one's principles".indexOf('e');
console.log('index where substring is first found:', indexOfSubString2);
We say "first found" in the last example, because we can also tell our call to indexOf that it should begin searching after a certain index:

var indexOfSubString = "In defense of one's principles".indexOf('e', 7);
console.log('index where substring is found, after a certain point in string:', indexOfSubString);
If the substring is not found, the call to indexOf will return -1:

var indexOfSubStringNotPresent = "Oceanic".indexOf('xyz');
console.log('index if substring is not present:', indexOfSubStringNotPresent);
We can also do this with variables whose values are strings:

var DNAStrand = "ATGCGCTAA";
var stopCodon = "TAA";
var indexOfStopCodon = DNAStrand.indexOf(stopCodon);

console.log('index where stop codon is found with gene sequence:', indexOfStopCodon);
Let us further complicate the issue by looking for the second stop codon, based upon where we find the first.

var DNAStrand = "ATGCGCTAACATCGCAGCTAGTTAAGCGATTGCAT";
var stopCodon = "TAA";
var indexOfFirstStopCodon = DNAStrand.indexOf(stopCodon);

var indexOfSecondStopCodon = DNAStrand.indexOf(stopCodon, indexOfFirstStopCodon + 1)

console.log('index where second stop codon is found with gene sequence:', indexOfSecondStopCodon);
And once again, if the substring is not present, the call to indexOf will return -1:

var DNAStrand = "ATGCGCATTCCGCATT";
var stopCodon = "TAA";
var indexOfStopCodon = DNAStrand.indexOf(stopCodon);

console.log("return value when substring is not present:", indexOfStopCodon);
Using the toString Method
Let us consider the case of wanting to turn a value, other than a string, into a string
We can do so using the .toString() method (note -> there are other, albeit slightly different ways to do this - research the JSON.stringify() method)::
var num = 17;
var stringNum = num.toString();
console.log('stringNum:', stringNum);
console.log('type of stringNum:', typeof stringNum);

var bool = true;
var stringBool = bool.toString();
console.log('stringBool:', stringBool);
console.log('type of stringBool:', typeof stringBool);
Quick Note (may seem odd, but a glance now will be useful later):

17.toString();// this will throw an error

Number(17).toString(); // this will not

var num = 17;
num.toString(); //this will also not
Escape Characters
In computing and telecommunication, an escape character is a character which invokes an alternative interpretation on subsequent characters in a character sequence
Let us consider two cases:
The first is having an apostrophe as part of a string wrapped in single quotes
The second will be a character called a newline symbol, which will alter the behavior of the string when it is printed out
We can do both of these, and more, using escape characters:
Escaping apostrophe:

console.log('sample:', 'It\'s raining');
Newline symbol:

console.log('multiline string:', 'First Line\nSecond Line\nThird Line');
We can also do this with variables:

var message = 'That is Jubal\'s Mother\'s favorite, isn\'t it?';
console.log('message containing escaped apostrophes:', message);

var haiku = 'An old silent pond...\nA frog jumps into the pond,\nsplash! Silence again.';
console.log('A haiku from Matsuo Basho:\n', haiku);
A Quick Refresher on Arrays
The Array "object" is used to store an ordered list of multiple values in a single variable
The values of an Array can be of any type
Array indexes, like string indexes, are zero-based: the first element in an array is located at index 0, the second at index 1, and so on
Creating an Array
Let us consider the case of wanting to create an array
In order to create an array, we can assign a variable to a set of square brackets, which may or may not contain elements, each of which are separated by commas
var fruits = ['oranges', 'bananas', 'apples'];
var scores = [98, 85, 91, 78, 82];
var empty = [];

console.log('fruits:', fruits);
console.log('scores:', scores);
console.log('empty:', empty);
Accessing an Element in an Array
Let us consider the case of wanting to access a specific element from within an array
Recall that arrays are zero-indexed
This means that we can access a given element, but these element begin at 0:
var array = [1, 2, 3, 4];

var secondElement = array[1];
console.log('secondElement:', secondElement)
We can also do this with variables:

var breakFastOptions = ['eggs', 'bacon', 'pancakes', 'coffee', 'fruit'];
var index = 3;
var breakFastChoice = breakFastOptions[index];

console.log('breakFastChoice:', breakFastChoice);
Reassigning an Element in an Array
Let us consider the case of wanting to reassign an element in an array
Arrays are mutable
This means that we can change them once they are created, and is as simple as making an assignment using the = operator:
var array = ['January', 'March', 'March'];
console.log('before reassignment:', array);

array[1] = 'February';
console.log('after reassignment:', array);
We can also do this with variables:

var marvelHeroes = ['Iron Man', 'Captain America', 'Thor', 'Batman'];
console.log('before reassignment:', marvelHeroes);

var indexToCorrect = 3;
var marvelHeroToBeAdded = 'Scarlet Witch';

marvelHeroes[indexToCorrect] = marvelHeroToBeAdded;
console.log('after reassignment:', marvelHeroes);
Getting the Length of an Array
Let us consider the case of wanting to get the length of an array
We can do so using the .length property (not a method, although vaguely similar in appearance):
var lengthOfArray = [1, 2, 3, 4].length;
console.log('lengthOfArray', lengthOfArray);
We can also do this with variables:

var legends = ["Alan Turing", "Ada Lovelace", "Al-Kwarizmi", "Edsger Dijkstra"];
var lengthOfLegendsArray = legends.length;
console.log('lengthOfLegendsArray:', lengthOfLegendsArray);
Getting the last element of an Array
Let us consider the case of wanting to get the last character in an array
Were we to attempt to use an actual number index, we will be unsuccessful for the general case
This is because we may not automatically know how long the array in question is
We can do so using the .length property and the fact that an array's index start at 0:
var lastElement = [1, 2, 3, 4, 5][[1, 2, 3, 4, 5].length - 1];
console.log('last element:', lastElement);
We can also do this with variables:

var numberSequence = [1, 2, 3, 4, 5];
var lastIndex = numberSequence.length - 1;

var lastElement = numberSequence[lastIndex];
console.log('lastElement:', lastElement);
Adding an Element to the back of an Array
Let us consider the case of wanting to add an element to the back of an existing array
We can do so using the .push() method:
var array = [1, 2, 3, 4];
array.push(5);
console.log('array with newly added element:', array);
We can also do this with variables:

var messages = ['Hey', 'Sounds good', 'See you then'];
var newMessage = 'On my way!';
messages.push(newMessage);
console.log('list of messages with new message added:', messages);
Removing an Element from the back of an Array
Let us consider the case of wanting to remove an element from the back of an existing array
We can do so using the .pop() method:
var array = [1, 2, 3, 4];
var elementPopped = array.pop();
console.log('array without removed element:', array);
console.log('element removed:', elementPopped);
We can also do this with variables:

var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Sunday'];
var dayPopped = weekdays.pop();
console.log('week days with last element removed:', weekdays);
console.log('last day removed:', dayPopped);
Adding an Element to the front of an Array
Let us consider the case of wanting to add an element to the front of an existing array
We can do so using the .unshift() method:
var array = [2, 3, 4];
array.unshift(1);
console.log('array with newly added element:', array);
We can also do this with variables:

var places = ['Second', 'Third', 'Fourth'];
var firstPlace = 'First';
places.unshift(firstPlace);
console.log('list of places with new place added:', places);
Removing an Element from the front of an Array
Let us consider the case of wanting to remove an element from the front of an existing array
We can do so using the .shift() method:
var array = [1, 2, 3, 4];
var elementShifted= array.shift();
console.log('array without removed element:', array);
console.log('element removed:', elementShifted);
We can also do this with variables:

var activities = ['running', 'hiking', 'dancing', 'singing'];
var activityShifted = activities.shift();
console.log('activities with first element removed:', activities);
console.log('first activity removed:', activityShifted);
Adding an Element in General (.splice (a))
Let us consider the case of wanting to add an element, without replacing anything, to an existing array
Let us further consider that we do not want to add the element to the back or the front, as we have done thus far
We can do so using the .splice() method:
var array = [1, 2, 4];
array.splice(2, 0, 3);
console.log('array with newly added element:', array);
We can also do this with variables:

var alphabeticallyOrderedItems = ['Bacon', 'Eggs', 'Yogurt'];
var newItem = 'Sausage';
var indexOfNewItem = 2;

alphabeticallyOrderedItems.splice(indexOfNewItem, 0, newItem);
console.log('list of alphabetically ordered items with new item added:', alphabeticallyOrderedItems);
Removing an Element in General (.splice (b))
Let us consider the case of wanting to remove an element from an existing array
Let us further consider that we do not want to remove the element from the back or the front, as we have done thus far
We can do so using the .splice() method:
var array = [1, 2, 'mistake', 3];
array.splice(2, 1);
console.log('array with element removed:', array);
We can also do this with variables:

var lunchItems = ['Turkey Sandwich', 'Falafel', 'Processor Speed', 'Gyro'];
var indexOfItemToBeRemoved = 2;

lunchItems.splice(indexOfItemToBeRemoved, 1);
console.log('list of lunch items with incorrect item removed:', lunchItems);
Removing and Adding Elements in General (.splice (c))
Let us consider the case of wanting to remove a certain number of elements from an index in an existing array, and add another certain number of elements, in the same place, to the same array
We can do so using the .splice() method:
var array = [1, 2, 3, 'mistake1', 'mistake2', 6];
array.splice(3, 2, 4, 5);
console.log('array with elements spliced:', array);
We can also do this with variables:

var lunchItems = ['Turkey Sandwich', 'Falafel', 'Paella', 'Processor Speed', 'RAM', 'Gyro'];
var indexOfFirstItemToBeRemoved = 3;
var numberOfItemsToRemove = 2;
var itemToBeAdded1 = 'Fish Tacos';
var itemToBeAdded2 = 'Pizza';

lunchItems.splice(indexOfFirstItemToBeRemoved, numberOfItemsToRemove, itemToBeAdded1, itemToBeAdded2);
console.log('list of lunch items after splicing:', lunchItems);
Determining if a value is an Array
Let us consider the case of wanting to determine if a value is an array
We can do so using the Array.isArray() method:
var array = [0, 3, 4];
console.log('input is an array:', Array.isArray(array));

var name = 'Tovio';
console.log('input is an array:', Array.isArray(name));
We can also do this with variables:

var holidays = ['Christmas', 'Memorial Day', 'Ramadan', 'Holi'];
var isHolidaysAnArray = Array.isArray(holidays);
console.log('holidays is an array:', isHolidaysAnArray);

var eventDate = 'May 25th, 1931';
var isEventDateAnArray = Array.isArray(eventDate);
console.log('eventDate is an array:', isEventDateAnArray);
Slicing a portion of an Array (and making a copy)
Let us consider the case of wanting a specific section of an existing array, or:
The case of wanting to make a copy of an existing array
In both cases, let us further consider that we do not wish to alter the original array
We can do so using the .slice() method:
var array = ['a', 'b', 'c', 'd', 'e'];

var sliceOfArray1 = array.slice(0, 2);
console.log('slicing a portion of the array from before index 0, to before index 2:', sliceOfArray1)
var array = ['a', 'b', 'c', 'd', 'e'];

var sliceOfArray2 = array.slice(2, 5); // OR array.slice(2); OR array.slice(2, array.length);
console.log('slicing a portion of the array from before index to, to before index 5 OR from index 2 to rest of array:', sliceOfArray2);

console.log('slicing the array does not affect the original array:', array);
var array = ['a', 'b', 'c', 'd', 'e'];

var copyOfArray = array.slice();
console.log('copy of array:', copyOfArray);
We can also do this with variables:

var altitudesAlongHikingTrail = [20, 70, 110, 170, 120, 40];
var todaysHike = altitudesAlongHikingTrail.slice(1, 4);

console.log('altitudes for today\'s hike:', todaysHike);

console.log('original altitudes along trail is not affected by slice:', altitudesAlongHikingTrail);
var originalListOfVegatables = ['squash', 'bell pepper', 'artichoke', 'cucumber'];
var copyOfListOfVegatables = originalListOfVegatables.slice();

console.log('copy of list of vegatables:', copyOfListOfVegatables);
Adding the contents of an Array to another Array
Let us consider the case of wanting to add the contents of one array to another array
Let us further consider that we do not wish to affect either original array
We can do so using the .concat() method
var array1 = [1, 2, 3];
var array2 = ['a', 'b', 'c'];
var array3 = ['do', 're', 'mi'];

var resultOfConcat1 = array1.concat(array2);
console.log('concatting array1 and array2 together:', resultOfConcat1);
console.log('-------------------------\n');
console.log('array1 is unaffected:', array1);
console.log('array2 is unaffected:', array2);

console.log('-------------------------\n');

var resultOfConcat2 = resultOfConcat1.concat(array3);
console.log('concatting array3 into our previous result:', resultOfConcat2);
console.log('-------------------------\n');
console.log('array1 is unaffected:', array1);
console.log('array2 is unaffected:', array2);
console.log('array3 is unaffected:', array3);
console.log('resultOfConcat1 is unaffected:', resultOfConcat1);

console.log('-------------------------\n');

var resultOfConcat3 = array1.concat(array2, array3);
console.log('concatting multiple arrays:', resultOfConcat3);

We can also do this with variables:

var breakfastItems = ['bacon', 'eggs', 'coffee', 'pancakes'];
var lunchItems = ['falafel', 'gyro', 'pad thai', 'sandwich'];
var dinnerItems = ['skirt steak', 'pork chops', 'lasagne', 'lamb shank'];

var brunchItems = breakfastItems.concat(lunchItems);
console.log('items for brunch:', brunchItems);

var happyHourItems = lunchItems.concat(dinnerItems);
console.log('items for happy hour:', happyHourItems);

var entireMenu = breakfastItems.concat(lunchItems, dinnerItems);
console.log('entire menu of items:', entireMenu);
Transforming an Array into a String
Let us consider the case of wanting to transform an array into a string
We can do so using the .join() method
var joinedOnNothing = ["a", "b", "c"].join();
console.log('joined with no argument supplied:', joinedOnNothing);
var joinedOnEmptyString = ["a", "b", "c"].join("");
console.log('joined on an empty string:', joinedOnEmptyString);
var joinedOnAString = ["a", "b", "c"].join("-");
console.log('joined on a string:', joinedOnAString);
We can also do so with variables:

var listOfCountingSequence = [1, 2, 3, 4, 5];
var countingSequence = listOfCountingSequence.join();
console.log('counting sequence:', countingSequence);
var lettersInWord = ['M', 'e', 'r', 'g', 'e', 's', 'o', 'r', 't'];
var joiner = "";
var joinedWord = lettersInWord.join(joiner);
console.log('word after joining on empty string:', joinedWord);
var wordsInSentence = ['I', 'am', 'learning', 'to', 'code'];
var joiner = ' ';
var joinedSentece = wordsInSentence.join(joiner);
console.log('sentence after joining on a space:', joinedSentece);
Transforming a String into an Array
Let us consider the case of wanting to transform a string into an array
We can do so using the .split() method
var splitOnNothing = "abc".split();
console.log('split with no argument supplied:', splitOnNothing);
var splitOnEmptyString = "abc".split("")
console.log('split on an empty string:', splitOnEmptyString);
var splitOnAString = "a-b-c".split("-");
console.log('split on a string:', splitOnAString);
We can also do so with variables:

var generatedID = 'a1d8b5q9';
var arrayVersionOfId = generatedID.split();
console.log('array with one ID:', arrayVersionOfId);
var word = 'Networking';
var separator = '';
var lettersInWord = word.split(separator);
console.log('letters in word:', lettersInWord);
var sentence = 'Approaching the end of operators and methods';
var separator = ' ';
var wordsInSentence = sentence.split(separator);
console.log('words in sentence:', wordsInSentence);
Using the indexOf Method on an Array
Let us consider the case of wanting to determine where in an array we can find a particular element
We can do so using the .indexOf() method for string
var indexOfElement1 = ['a', 'b', 'c', 'd'].indexOf('c');
console.log('index where element is first found:', indexOfElement1);
If the element is not present, the call to indexOf will return -1:

var indexOfElement2 = ['a', 'b', 'c', 'd'].indexOf('q');
console.log('index if element is not found:', indexOfElement2);
We say "first found" in the last example, because we can also tell our call to indexOf that it should begin searching after a certain index:

var indexOfElement = [1, 2, 3, 1, 5, 9].indexOf(1, 2);
console.log('index where element is found after index 2:', indexOfElement);
We can also do this with variables:

var ingredients = ['butter', 'sugar', 'flour', 'chocolate chips'];
var searchIngredient = 'flour';
var indexOfIngredient = ingredients.indexOf(searchIngredient);
console.log('index where ingredient is found:', indexOfIngredient);

And again, if the element is not present, the call to indexOf will return -1:

var ingredients = ['butter', 'sugar', 'flour', 'chocolate chips'];
var searchIngredient = 'pecans';
var indexOfIngredientNotFound = ingredients.indexOf(searchIngredient);
console.log('index if ingredient is not found:', indexOfIngredientNotFound);
Finally, we can again search for an element beginning after a certain index in an array:

var workOrders = ['installation', 'repair', 'SYSTEM RESET', 'maintenance', 'repair'];
var indexOfSystemReset = workOrders.indexOf('SYSTEM RESET');
var indexOfFirstRepairAfterReset = workOrders.indexOf('repair', indexOfSystemReset + 1);
console.log('index of first repair order after reset:', indexOfFirstRepairAfterReset);
A Quick Refresher on Objects
An object is a collection of properties
A property is an association between a name (key) and a value (some data type)
A property's value can be any of the types we have gone over, as well as being another object, or even a function
In the case where the value of a property is a function, we refer to the property as a method
Creating an Object
Let us consider the case of wanting to create an object
In order to create an object, we can assign a variable to a set of curly braces, which may or may not contain properties (an association between a key and a value), each of which are separated by commas
var obj = {a: 1, b: 2};
var empty = {};

console.log('obj:', obj);
console.log('empty:', empty);
We can also do this with more robustly named variables:

var person = {
  name: 'Nick',
  favoriteLanguage: 'Ruby',
  experienceInYears: 16
};

var personAlternate = {
  'name': 'Nick',
  'favoriteLanguage': 'Ruby',
  'experienceInYears': 16
}

console.log('person:', person);
console.log('personAlternate:', personAlternate);
Accessing a Property in an Object
Let us consider the case of wanting to access the value of a specific property from within an object
Recall that object properties are associations between keys and values
This means that we can access a given property's value using the object's name at a specific key:
var object = {
  a: 1,
  b: 2,
  c: 3
};

var valueAtB_bracket = object['b'];
var valueAtB_dot = object.b;
console.log('value at b, using bracket notation:', valueAtB_bracket);
console.log('value at b, using dot notation:', valueAtB_dot);
We can also do this with variables, which adds one complication:

// notice that one of our keys has spaces in it, and is listed as a string
var records = {
  'choice for breakfast': 'eggs,bacon,pancakes,coffee',
  total: 11,
  paid: true
};

var key = 'total';
var valueAtKey = records[key];
var undefinedValue = records.key; //this won't work
console.log('total spent on breakfast:', valueAtKey);
console.log('undefined because of name of key is not actually "key":', undefinedValue);


var complicatedKey = 'choice for breakfast';
var valueAtComplicatedKey = records[complicatedKey];
// uncomment the line below to see why we must use bracket notation
// var errorCausing = records.choice for breakfast;
console.log('breakfast chosen:', valueAtComplicatedKey);
Reassigning a Property's Value in an Object
Let us consider the case of wanting to reassign a property's value in an object
Objects, like Arrays, are mutable
This means that we can change them once they are created, and is as simple as making an assignment using the = operator:
var object = {
  firstMonth: 'January',
  secondMonth: 'March',
  thirdMonth: 'March'
};
console.log('before reassignment:', object);

object['secondMonth'] = 'February';
console.log('after reassignment:', object);
We can also do this with variables:

var user = {
  id: 12,
  favoriteSuperHero: 'Superman',
  name: 'Jane Whoever'
};
console.log('before reassignment:', user);

var keyToCorrect = 'favoriteSuperHero';
var newFavoriteSuperHero = 'Batman';

user[keyToCorrect] = newFavoriteSuperHero;
console.log('after reassignment:', user);
Removing a Property from an Object
Let us consider the case of wanting to remove a property from an existing object
We can do so using the delete operator:
var object = {
  abs: 1,
  baq: 2,
  cio: 'mistake',
  dec: 3
};

delete object.cio;
console.log('object with property removed:', object);
We can also do this with variables:

var lunchOrders = {
  Jubal: 'Turkey Sandwich',
  Christof: 'Falafel',
  spec1: 'Processor Speed',
  Wali: 'Gyro'
};
var keyOfPropertyToBeRemoved = 'spec1';

delete lunchOrders[keyOfPropertyToBeRemoved];
console.log('list of lunch orders with incorrect property removed:', lunchOrders);
Checking if a Property is present in an Object
Let us consider the case of wanting to determine if a property is present within an object
We can do so by realizing that the value of a property that is not present within an object is always undefined
Thus, we will access an object at the property's key, and check this against undefined
var object = {
  a: 1,
  b: 2,
  c: 3
};

console.log('value for a key that is not present:', object['x']);
console.log('value at "x" is undefined?:', object['x'] === undefined);
console.log('value at "b" is defined?:', object['b'] !== undefined);
We can also do this with variables:

var birthdayPlanForAnIntrovert = {
  activity: 'Watching a TV Marathon',
  food: 'Enough for maybe 1 or 2 people',
  goingOut: false
};

var reservations = birthdayPlanForAnIntrovert.reservations;
console.log('undefined, because they do not need reservations:', reservations);
console.log('reservations are undefined?:', reservations === undefined);
console.log('activity is defined?:', birthdayPlanForAnIntrovert.activity !== undefined);
Determining if a value is an Object
Let us consider the case of wanting to determine if a value is an object
We can do so using the typeof operator, in conjunction with the Array.isArray() method
var obj = {
  a: 1,
  b: 3,
  c: 5
};
console.log('value is an object and not an array:', typeof obj === "object" && !Array.isArray(obj));
We can also do this with variables:

var playground = {
  location: 'city park',
  swings: true,
  hours: '8am - 10pm'
};

var playgroundIsObject = typeof playground === "object";
var playgroundIsNotAnArray = !Array.isArray(playground);
var playgroundIsObjectAndNotAnArray = playgroundIsObject && playgroundIsNotAnArray;
console.log('playground value is an object and not an array:', playgroundIsObjectAndNotAnArray);
Generating an array of all keys in an Object
Let us consider the case where we want to generate an array of all the keys in an object
We can do so using the Object.keys() method
var arrayOfKeys = Object.keys({a:1, b:2, c:3});
console.log('an array containing the keys:', arrayOfKeys);
We can also do this with variables:

var address = {
  number: 123,
  street: 'Fake St.',
  city: 'Springfield',
  state: 'QX',
  zipcode: 99999
};

var keysInAddress = Object.keys(address);
console.log('an array of the address object\'s keys:', keysInAddress);
Generating an array of all values in an Object
Let us consider the case where we want to generate an array of all the values in an object
We can do so using the Object.values() method
var arrayOfValues = Object.values({a:1, b:2, c:3});
console.log('an array containing the values:', arrayOfValues);
We can also do this with variables:

var address = {
  number: 123,
  street: 'Fake St.',
  city: 'Springfield',
  state: 'QX',
  zipcode: 99999
};

var valuesInAddress = Object.values(address);
console.log('an array of the address object\'s values:', valuesInAddress);
Nested Arrays
Let us consider the nested array structure below:
var colors = [['red'], 'orange', ['yellow',['green', ['blue']]], ['indigo', 'violet']];
At first glance, this structure may seem overly complicated, and to be sure, it is
However, we are going to walkthrough how to access all of these colors with the following exercise:
Using the console, or repl.it, write a series of console.log statements that will log the colors in alphabetical order
Nested Objects
Let us consider the nested object structure below:
var user = {
  "id": 3,
  "name": "Clementine Bauch",
  "username": "Samantha",
  "email": "Nathan@yesenia.net",
  "address": {
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geo": {
      "lat": "-68.6102",
      "lng": "-47.0653"
    }
  },
  "phone": "1-463-555-4447",
  "website": "ramiro.info",
  "company": {
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "corporate_tagline": "e-enable strategic applications"
  }
};
Unlike the colors array, this nested object makes a little bit more sense
Similarly, we are going to walkthrough how to access all of the values with the following exercise:
Using the console, or repl.it, write a series of console.log statements that will log all of the values in this object
Method applied to a Nested Array
Let us consider the case of wanting to add an element to the front of an existing array, which is located inside of another array
We can do so using the .unshift() method:
var nestedArray = [ [1, 2, 3], [4, 5, 6], [/*we want 7 here*/8, 9] ];
console.log('inner array accessed:',nestedArray[2]);

nestedArray[2].unshift(7);
console.log('nested array with newly added element:', nestedArray);
We can also do this with variables:

var places = [ ['First', 'Second', 'Third'], [/*we want 'Fourth' here*/'Fifth', 'Sixth'] ];
console.log('inner places array accessed:', places[1]);

var fourthPlace = 'Fourth';
var indexOfNestedArray = 1;
places[indexOfNestedArray].unshift(fourthPlace);
console.log('nested list of places with new place added:', places);
Method applied to an Array within an Object
Once we get the idea of nesting down, the number of combinations are endless
For this example, we will consider an array nested within an object
Let us consider the case of wanting to determine if a value inside of an object is an array
We can do so using the Array.isArray() method:
var object = {
  key1: [0, 3, 4],
  key2: 'Tovio'
};
console.log('accessing the inner array:', object['key1']);

console.log('value is an array:', Array.isArray(object['key1']));
console.log('value is an array:', Array.isArray(object['key2']));
We can also do this with variables:

var holidays = {
  christian: 'Christmas',
  american: ['Memorial Day', 'Labor Day'],
  muslim: 'Ramadan',
  hindu:'Holi'
};

var valueOfAmericanHolidays = holidays.american
console.log('accessing the inner array value:', valueOfAmericanHolidays);

var isAmericanValueAnArray = Array.isArray(valueOfAmericanHolidays);
console.log('american value within holidays is an array:', isAmericanValueAnArray);

var valueOfHinduHoliday = holidays['hindu'];
console.log('accessing the value:', valueOfHinduHoliday);

var isHinduValueAnArray = Array.isArray(valueOfHinduHoliday);
console.log('hindu value within holidays is an array:', isHinduValueAnArray);
Method applied to a Nested Object
Let us consider the case where we want to generate an array of all the keys in an object, nested within another object
We can do so using the Object.keys() method
var nestedObject = { key1: {a:1, b:2, c:3}, key2: {d:4, e:5, f:6} };
var arrayOfKeys = Object.keys(nestedObject['key1']);
console.log('an array containing the keys of nested object:', arrayOfKeys);
We can also do this with variables:

var simpsonsCharacter = {
  name: 'Homer',
  address: {
    number: 123,
    street: 'Fake St.',
    city: 'Springfield',
    state: 'QX',
    zipcode: 99999
  }
};

var key = 'address';
var keysInHomersAddress = Object.keys(simpsonsCharacter[key]);
console.log('an array of the nested address object\'s keys:', keysInHomersAddress);
Operator applied to an Object within an Array
Let us consider the case of wanting to remove a property from an existing object, located within an array
We can do so using the delete operator:
var array = [{
    abs: 1,
    baq: 2,
    cio: 'mistake',
    dec: 3
  },
  {
    jij: 4,
    plw: 5,
    qrt: 6
  }
];

delete array[0].cio;
console.log('array with a nested object\'s property removed:', array);
We can also do this with variables:

var lunchOrders = [
  {
    Jubal: 'Turkey Sandwich',
    Christof: 'Falafel',
    spec1: 'Processor Speed',
    Wali: 'Gyro'
  },
  {
    Teddy: 'General Tso Chicken',
    Freddy: 'Pizza',
    Betty: 'Tuna Salad'
  }
];
var indexOfObjectWithError = 0;
var keyOfPropertyToBeRemoved = 'spec1';

delete lunchOrders[indexOfObjectWithError][keyOfPropertyToBeRemoved];
console.log('list of lunch orders with incorrect nested object\'s property removed:', lunchOrders);
This is simply an Introduction to Nested Structures
We have gone over a few examples, but a core principe should be beginning to emerge
Nothing really changes with regard to what we have done so far
Methods and Operators are applied similarly, provided we access what we want to affect properly
Feel free to practice other methods and operators on nested structures
Conditionals
What are Conditionals?
So far you have learned about several data types
We have also learned about variables to store said data types
Furthermore, we have explored a large number of operators and methods
Now, let's examine the idea of our program's doing, or not doing, something based upon a condition
It is useful to begin with plain english language statements:
1.

If it is raining, you should wear a raincoat.
2.

If Creed will be there, then I will go, otherwise I will stay home.
3.

If Denny's is open, we will dine there, otherwise, if IHop is open,
we will dine there, and finally, if neither diner is open,
we will make pancakes at home.
Relatively simple ideas
Let us look at a "pseudocode" implementations of these statements after introducing pseudocode more formally
What is Pseudocode?
We have seen it before
English language statements that describe what the code will do
Should be structured similarly to the way the eventual code will be (indentation, etc.)
Each line of pseudocode should correspond to one line of actual code
1.

// if it is raining
  // you should wear a raincoat
2.

// if creed is there
  // I will go
// otherwise
  // I will stay home
3.

// if Denny's is open
  // we will dine at denny's
// otherwise if IHop is open
  // we will dine at IHop
// otherwise
  // we will make pancakes at home
What is an IF statement?
A conditional that allows your program to do something, if some condition is true
Consider case (1) from the introduction:
If it is raining, you should wear a raincoat.
Or, in pseudocode:

// if it is raining
  // you should wear a raincoat
Armed with an if statement, this is easily translatable into code:

var isRaining = true;

if (isRaining === true) {
  console.log("you should wear a raincoat");
}
Or, more generally speaking:

if (/*some expression which evaluates to true or false*/) {

  /*some action to be taken in the event
  that the expression above evaluates to true*/

}
IF statement Examples
if statement with undefined
var declared;

if (declared === undefined) {
  console.log('declared is undefined');
}
if statement with numbers
var apples = 6;
var oranges = 7;

if (apples < oranges) {
  console.log('There are fewer apples than oranges');
}
if statement with a string
var password = 'password123';

if (password.length < 15 && password.length > 4) {
  console.log('password is of appropriate length');
}
if statement with an array
var agentList = ['001', '005', '007', '009'];
var agentInQuestion = '007'

if (agentList.indexOf(agentInQuestion) > -1) {
  console.log(agentInQuestion + ' found in agent list');
}
if statement with an object
var reportTotals = {a_team: 12, b_team: 7, c_team: 0};

if (reportTotals['b_team'] > 5) {
  console.log('b_team has surpassed goal with ' + reportTotals['b_team'] + ' reports');
}
What is an IF ELSE statement?
A conditional that allows your program to do something, if some condition is true, and do something else, if that same condition is false
Consider case (2) from the introduction:
If Creed will be there, then I will go, otherwise I will stay home.
Or, in pseudocode:

// if creed is there
  // I will go
// otherwise
  // I will stay home
Armed with an if else statement, this is easily translatable into code:

// change to false to see 'else' option
var creedIsThere = true;

if (creedIsThere) {
  console.log("I will go");
} else {
  console.log("I will stay home");
}
Or, more generally speaking:

if (/*some expression which evaluates to true or false*/) {

  /*some action to be taken in the event
  that the expression above evaluates to true*/

} else {

  /*some action to be taken in the event
  that the expression above evaluates to false*/

}
IF ELSE statement Examples
if else statement with undefined (truthy vs. falsy)
HINT: see "truthy vs. falsy" at end of Booleans Operators and Methods Lesson
// give declared a falsy value to see 'else' condition
var declared = 'something';

if (declared) {
  console.log('declared has a truthy value');
} else {
  console.log('declared has a falsy value');
}
if else statement with numbers
// change values of dogs/cats to see 'else' condition
var dogs = 9;
var cats = 8;

if (dogs > 8 && cats < 9) {
  console.log('number of cats and dogs is acceptable');
} else {
  console.log('number of cats or dogs is not acceptable');
}
if else statement with strings
// change to a shorter password to see 'else' condition
var password = 'pa$$wordIsLongEnough';

if (password.length > 8) {
  console.log('Password is long enough');
} else {
  console.log('Please enter a password of at least 9 characters');
}
if else statement with an array
var ingredientsList = ['flour', 'sugar', 'eggs'];
// change to ingredient not in list to see 'else' condition
var ingredientInQuestion = 'sugar'

if (ingredientsList.indexOf(ingredientInQuestion) > -1 ) {
  console.log(ingredientInQuestion + ' is on the list');
} else {
  console.log(ingredientInQuestion + ' is not on the list');
}
if else statement with an object
// change the values to see 'else' condition
var fruitTotals = {bananas: 4, strawberries: 12};

if (fruitTotals.bananas > 3 && fruitTotals.strawberries > 10) {
  console.log('We have enough fruit, with ' + fruitTotals.bananas + ' bananas, and ' + fruitTotals.strawberries + ' strawberries');
} else {
  console.log('We do not have enough of both fruits');
}
What is an IF ELSE IF statement?
A conditional that allows your program to do something, if some condition(1) is true, and do something else, if that same condition(1) is false and another condition(2) is true, and lastly, to do a third action if both condition(1) and condition(2) are both false
Consider case (3) from the introduction:
If Denny's is open, we will dine there, otherwise, if IHop is open,
we will dine there, and finally, if neither diner is open,
we will make pancakes at home.
Or, in pseudocode:

// if Denny's is open
  // we will dine at denny's
// otherwise if IHop is open
  // we will dine at IHop
// otherwise
  // we will make pancakes at home
Armed with an if else if statement, this is easily translatable into code:

// change to false to see 'else if' option
var dennysIsOpen = true;
// change both to false to see 'else' option
var iHopIsOpen = true;

if (dennysIsOpen) {
  console.log('We will dine at Denny\'s');
} else if (iHopIsOpen) {
  console.log('We will dine at IHop');
} else {
  console.log('We will make pancakes at home');
}
Or, more generally speaking:

if (/*some expression which evaluates to true or false*/) {

  /*some action to be taken in the event
  that the expression above evaluates to true*/

} else if (/*some other expression which evaluates to true or false*/) {

  /*some action to be taken in the event
  that the first expressions evaluates to false
  and the second expression above evaluates to true*/

} else {

  /*some action to be taken in the event
  that the first expressions evaluates to false
  and the second expression above evaluates to false*/

}
IF ELSE IF statement Examples
Guessing rock/paper/scissors choice
// change to 'paper' or 'scissors' to see other choices
var choice = 'rock';

if (choice === 'rock') {
  console.log('Player 1 chose ' + choice);
} else if (choice === 'paper') {
  console.log('Player 1 chose ' + choice);
} else if (choice === 'scissors') {
  console.log('Player 1 chose ' + choice);
} else {
  console.log('Player 1 has chosen poorly!');
}
Finding the right size T-Shirt
var shirtWidth = 25;

if (shirtWidth >= 20 && shirtWidth < 30) {
  console.log('You should select a size S');
} else if (shirtWidth >= 30 && shirtWidth < 40) {
  console.log('You should select a size M');
} else if (shirtWidth >= 40 && shirtWidth < 50) {
  console.log('You should select a size L');
} else {
  console.log('You should select a different shirt');
}
Deciding what you need for a recipe
var recipeMinimums = {
  tomatoes: 3,
  onions: 7
};


var stockTomatoes = 5;
var stockOnions = 8;

var excessTomatoes = stockTomatoes - recipeMinimums.tomatoes;
var excessOnions = stockOnions - recipeMinimums.onions;

if (stockTomatoes < recipeMinimums.tomatoes && stockOnions < recipeMinimums.onions) {
  console.log('We need more tomatoes and more onions.');
} else if (stockTomatoes < recipeMinimums.tomatoes && stockOnions >= recipeMinimums.onions) {
  console.log('We need more tomatoes, but have enough onions.');
} else if (stockTomatoes >= recipeMinimums.tomatoes && stockOnions < recipeMinimums.onions) {
  console.log('We have enough tomatoes, but need more onions.');
} else {
  console.log('We have enough tomatoes and onions. There will be ' + excessTomatoes + ' extra tomato, and ' + excessOnions + ' extra onion.');
}
Loops (and Iteration)
What are Loops?
When it comes to programming, few things are more fundamental than loops
Consider the following scenario: You wish to log the numbers 1 through 5 to the console.
We could of course, write this code:

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
While this does work, it is rather inefficient
Perhaps the idea is not immediately obvious with only 5 lines of code, but consider the case of needing to list something about 13,987 users
One can quickly gather that this makes the above example appear woefully insufficient
Here is a quick look at a for loop doing the same thing:


for (var num = 1; num <= 5; num++) {
  console.log(num);
}
Do not worry about understanding how this works, as we will spend significant time in the upcoming lessons do just that.

Iteration vs. Loops (From Stack Overflow)
Iteration is the number of time(s) a loop can be executed
At the beginning of your coding journey, iterating and looping will be interchangeable
They are not exactly the same idea, but:
We will loop over the array, and
We will iterate over the array,
Both mean essentially the same thing
Infinite Loops
Both while and for loops need a stop condition to stop running
If you fail to account for this, you will create an infinite loop
Do not panic, as this happens to all first-timers
Simply quit your window/browser and come back
What is a While Loop? (From MDN)
The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true
The condition is evaluated before executing the statement
Will often be referred to as a "while loop"
while (/*test condition*/) {
  /* specified statement */
}
Loop over sequence of numbers
Let us consider the case of wanting to look at, or do something, to a range of numbers
We can do so with a specific while loop
var x = 1;
while (x <= 10) {
  console.log(x);
  x++;
}
We can also do this with variables:

var startOfRange = 1;
var endOfRange = 10;

while (startOfRange <= endOfRange) {
  console.log(startOfRange);
  startOfRange++;
}
Loop over an Array
Let us consider the case of wanting to look at, or do something, do the elements of an array
We can do so with a specific while loop
You will often hear this described as "iterating over the array"
var numsArray = [1, 2, 3, 4, 5];
var index = 0;

while ( index < numsArray.length ) {
  console.log('current index:', index);
  console.log('current element:', numsArray[index]);
  console.log('=============='); //gives context for when each iteration of loop ends
  index++;
}
We can also do this with variables:

var restaurants = ['The Salad Bowl', 'The Steak Knife', 'The Ramen Spoon'];
var index = 0;

while (index < restaurants.length) {
  console.log(restaurants[index]);
  index++;
}
Loop over a String
Let us consider the case of wanting to look at, or do something, to the characters in a string
We can do so with a specific while loop
var string = 'I am a String!';
var index = 0;

while (index < string.length) {
  console.log(string[index]);
  index++;
}
We can also do this with variables:

var noteSequence = 'abcdefg';
var index = 0;

while (index < noteSequence.length) {
  console.log(noteSequence[index]);
  index++;
}
What is a For Loop? (From MDN)
The for statement creates a loop that consists of three optional expressions
initialization - An expression or variable declaration that evaluated once before the loop begins
condition - An expression to be evaluated before each loop iteration. If it evaluates to true, statement is executed
final-expression - An expression to be evaluated at the end of each loop iteration
These expressions are enclosed in parentheses and separated by semicolons
They are followed by a statement to be executed in the loop
Will often be referred to as a "for loop"
for (/*initialization*/ ; /*condition*/ ; /*final-expression*/ ) {
  /* statement */
}
Loop over sequence of numbers again
Let us consider the case of wanting to look at, or do something, to a range of numbers
We can do so with a specific for loop
for (var x = 1; x <= 10; x++) {
  console.log(x);
}
We can also do this with variables:

var endOfRange = 10;

for (var startOfRange = 1; startOfRange <= endOfRange; startOfRange++) {
  console.log(startOfRange);
}
Loop over an Array Again
Let us consider the case of wanting to look at, or do something, do the elements of an array
We can do so with a specific for loop
This example has more details, for a more robust demonstration
You will often hear this described as "iterating over the array"
var numsArray = [1, 2, 3, 4, 5];

for (var i = 0; i < numsArray.length; i++) {
  console.log('current index:', i);
  console.log('current element:', numsArray[i]);
  //gives context for when each iteration of loop ends
  console.log('==============');
}
We can also do this with variables:

var restaurants = ['The Taco Shell', 'The Lobster Tail', 'The Vegetable Garden'];

for (var i = 0; i < restaurants.length; i++) {
  console.log(restaurants[i]);
}
Loop over a String Again
Let us consider the case of wanting to look at, or do something, to the characters in a string
We can do so with a specific for loop
var string = 'I am a String!';

for (var i = 0; i < string.length; i++) {
  console.log(string[i]);
}
We can also do this with variables:

var programmingLanguage = 'JavaScript';

for (var i = 0; i < programmingLanguage.length; i++) {
  console.log(programmingLanguage[i]);
}
A Few Things of Which to Take Note
while and for loops can be very similar
Iterating over a string and an array can also be very similar
The concepts below can work with both strings and arrays, and while and for loops
Loop over every other value
Let us consider the case of wanting to look at, or do something, do every other element in an array
We can do so with a specific for loop
var numsArray = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < numsArray.length; i += 2) {
  console.log('current index:', i);
  console.log('current element:', numsArray[i]);
  console.log('=============='); //gives context for when each iteration of loop ends
}
We can also do this with variables:

var restaurantMixedData = ['The Pho King', '555-1834', 'The Cheese Plate', '555-8312'];

for (var i = 0; i < restaurantMixedData.length; i+= 2) {
  console.log(restaurantMixedData[i]);
}
Loop starting somewhere in the middle
Let us consider the case of wanting to look at, or do something, do every other element in an array
We can do so with a specific for loop
var numsArray = [-2, -1, 0, 1, 2, 3];

for (var i = 3; i < numsArray.length; i++) {
  console.log('current index:', i);
  console.log('current element:', numsArray[i]);
  console.log('=============='); //gives context for when each iteration of loop ends
}
We can also do this with variables:

var restaurantsAndBars = ['The Soup Ladle', 'The Steak Knife', 'The Salad Bowl', 'Bars:', 'The Beer Stein', 'The Brandy Snifter', 'The Martini Coupe'];

for (var i = 3; i < restaurantsAndBars.length; i++) {
  console.log(restaurantsAndBars[i]);
}
Loop in "reverse" order
Let us consider the case of wanting to look at, or do something, do every other element in an array
We can do so with a specific for loop
var numsArray = [1, 2, 3, 4, 5];

for (var i = numsArray.length - 1; i > -1; i--) {
  console.log('current index:', i);
  console.log('current element:', numsArray[i]);
  console.log('=============='); //gives context for when each iteration of loop ends
}
We can also do this with variables:

var restaurantPreferences = ['Chinese', 'Vietnamese', 'Thai', 'Japanese', 'Texan'];

for (var i = restaurantPreferences.length - 1; i > -1; i--) {
  console.log(restaurantPreferences[i]);
}
Using continue
Let us consider the case of wanting to move to the next iteration while looping
Which is to say, we do not want to end the loop entirely, but we wish to move to the next iteration of the loop
We can do so with the continue statement
var numsArray = [1, 2, 3, 4, 5];

// stipulation: do not print out element at index 2
for (var i = 0; i < numsArray.length; i++) {
  if (i === 2) {
    console.log('SKIPPED VALUE AT INDEX 2');
    continue; // this tells the loop to go to the next iteration
  }
  console.log('current index:', i);
  console.log('current element:', numsArray[i]);
  console.log('=============='); //gives context for when each iteration of loop ends
}
We can also do this with variables:

var restaurants = ['The BBQ Pit', 'The Sushi Bamboo', 'Error-Error', 'The Pizza Oven'];

for (var i = 0; i < restaurants.length; i++) {
  if (i === 2) {
    continue;
  }
  console.log(restaurants[i]);
}
Using break
Let us consider the case of wanting to stop looping before the described end of a loop
Which is to say, we want the loop to stop immediately, regardless of what the while/for statement says
We can do so with the break statement
var numsArray = [1, 2, 3, 4, 5];

// stipulation: do not print out elements with index value greater than 2
for (var i = 0; i < numsArray.length; i++) {
  if (i > 2) {
    console.log('FOR LOOP BROKEN');
    break; // this tells the loop to end
  } else {
    console.log('current index:', i);
    console.log('current element:', numsArray[i]);
    console.log('=============='); //gives context for when each iteration of loop ends
  }
}
We can also do this with variables:

var restaurantsAndPricePoints = ['The Oyster Pearl', 'The Salmon Plank', 'Price Points:', 'expensive', 'moderate', 'budget-conscious'];

for (var i = 0; i < restaurantsAndPricePoints.length; i++) {
  if (i > 1) {
    break;
  }
  console.log(restaurantsAndPricePoints[i]);
}
What is a For-in Loop?
A for-in statement allows us to loop over the properties in an object
It is not usually a good idea to use this for-in loop syntax on an array or a string
However, it is possible to use for-in loops on arrays and strings
Whatever variable we declare will be assigned to a string value of each key within the object
for ( /*variable*/ in /*object*/ ) {
  /* statement */
}
For-in Loop
Let us consider the case of wanting to look at, or do something, do the properties of an object
We can do so with a for-in loop
This example has more details, for a more robust demonstration
You will often hear this described as "iterating over the object"
var object = {
  a: 1,
  b: 2,
  c: 3
  d: 4
};

for (var key in object) {
  console.log('current key:', key);
  console.log('current value:', object[key]);
  //gives context for when each iteration of loop ends
  console.log('==============');
}
We can also do this with variables:

var iceCream =  {
  flavor: 'Strawberry Cheesecake',
  supportingCast: 'Waffle Cone',
  price: 2.5,
  iScream: true
};;

for (var namedOddlyToMakeAPoint in iceCream) {
  console.log('current key:', namedOddlyToMakeAPoint);
  console.log('current value:', iceCream[namedOddlyToMakeAPoint]);
}
A Quick Note about Iterating over an Object
It is not always necessary to iterate over an object
If we know the name of the key for a property we are searching for, then we DO NOT need to iterate
If, however, we are looking for a value, or want to look at all of an object's properties, then iteration may be the correct way to go
What is a Nested Loop?
Let us consider a few cases related to nested structures and loops
More specifically, the following lesson deals with nested loops
We will start by walking through a few nested structures
var nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
Using the console, or repl.it, write a series of console.log statements that will log the numbers in ascending (small to large) order
var nestedObject = {
  'inner1': {a: 1, b: 2, c: 3},
  'inner2': {d: 4, e: 5, f: 6},
  'inner3': {g: 7, h: 8, i: 9}
};
Again, using the console, or repl.it, write a series of console.log statements that will log the numbers in ascending (small to large) order
var arrayOfObjects = [
  {a: 1, b: 2, c: 3},
  {d: 4, e: 5, f: 6},
  {g: 7, h: 8, i: 9}
];
Again, using the console, or repl.it, write a series of console.log statements that will log the numbers in ascending (small to large) order
var objectOfArrays = {
  'inner1': [1, 2, 3],
  'inner2': [4, 5, 6],
  'inner3': [7, 8, 9]
};
One last time, using the console, or repl.it, write a series of console.log statements that will log the numbers in ascending (small to large) order
Nested For Loop
Let us consider the case of wanting to loop over an array (or more than one), inside of our looping over another array
We can do so using a nested for loop
var nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (var i = 0; i < nestedArray.length; i++) {
  for (var j = 0; j < nestedArray[i].length; j++) {
    console.log(nestedArray[i][j]);
  }
  console.log('end of inner loop');
}
console.log('end of outer loop');
We can also do this with variables:

var addresses = [
  ['1a', '1b', '1c'],
  ['2a', '2b', '2c'],
  ['3a', '3b', '3c']
];

for (var i = 0; i < addresses.length; i++) {
  for (var j = 0; j < addresses[i].length; j++) {
    console.log(addresses[i][j]);
  }
}
Nested For-in Loop
Let us consider the case of wanting to loop over an object (or more than one), inside of our looping over another object
We can so do using a nested for-in loop
var nestedObject = {
  'inner1': {a: 1, b: 2, c: 3},
  'inner2': {d: 4, e: 5, f: 6},
  'inner3': {g: 7, h: 8, i: 9}
};

for (var key in nestedObject) {
  for (var innerKey in nestedObject[key]) {
    console.log(nestedObject[key][innerKey]);
  }
  console.log('end of inner loop');
}
console.log('end of outer loop');
We can also do this with variables:

var salesNumbers = {
  'team1': {amy_jones: 34, davy_jones: 36, crazy_jones: 19},
  'team2': {jonas_ames: 43, joney_davids: 63, joney_craze: 91}
};

for (var teamName in salesNumbers) {
  for (var salesPerson in salesNumbers[teamName]) {
    console.log(salesNumbers[teamName][salesPerson]);
  }
}
Nested Mixed Loop (1)
let us consider the case of wanting to loop over an array (or more than one), inside of our looping over an object
We can so do using a for loop nested inside of a for-in loop
var arrayOfObjects = [
  {a: 1, b: 2, c: 3},
  {d: 4, e: 5, f: 6},
  {g: 7, h: 8, i: 9}
];

for (var i = 0; i < arrayOfObjects.length; i++) {
  for (var key in arrayOfObjects[i]) {
    console.log(arrayOfObjects[i][key]);
  }
}
We can also do this with variables:

var mutants = [
  {name: 'Professor X', ability: 'mind control', favoriteFood: 'Watermelon'},
  {name: 'Wolverine', power: 'healing', favoriteSong: 'Never gonna give you up'},
  {name: 'Storm', power: 'weather stuff', hobby: 'messing with local news weathermen'}
];

for (var i = 0; i < mutants.length; i++) {
  // we can create an 'alias' to more easily name current mutant
  var currentMutant = mutants[i];
  for (var key in currentMutant) {
    console.log(currentMutant[key]);
  }
}
Nested Mixed Loop (2)
let us consider the case of wanting to loop over an object (or more than one), inside of our looping over an array
We can so do using a for-in loop nested inside of a for loop
var objectOfArrays = {
  'inner1': [1, 2, 3],
  'inner2': [4, 5, 6],
  'inner3': [7, 8, 9]
};

for (var key in objectOfArrays) {
  for (var i = 0; i < objectOfArrays[key].length; i++) {
    console.log(objectOfArrays[key][i]);
  }
}
We can also do this with variables:

var winningLottoHistory = {
  '9/5/2018': [1, 27, 63],
  '9/8/2018': [3, 21, 58],
  '9/12/2018': [4, 17, 37]
};

for (var dateOfDrawing in winningLottoHistory) {
  // we can create an 'alias' to more easily name current winning numbers
  var currentWinningNumbers = winningLottoHistory[dateOfDrawing]
  for (var i = 0; i < currentWinningNumbers.length; i++) {
    console.log(currentWinningNumbers[i]);
  }
}
All Combinations using For Loops
Let us consider the case of wanting all of the combinations possible between two arrays
We can do so by using a nest for loop:
var numbers = [1, 2, 3];
var letters = ['a', 'b', 'c'];

for (var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < letters.length; j++) {
    console.log(numbers[i] + ' ' + letters[j]);
  }
}
We can also do this with variables:

var flavors = ['Vanilla', 'Chocolate', 'Strawberry'];
var toppings = ['Sprinkles', 'Caramel', 'Whipped Cream'];

for (var i = 0; i < flavors.length; i++) {
  for (var j = 0; j < toppings.length; j++) {
    console.log("You can have " + flavors[i] + " with " + toppings[j]);
  }
}
Functions
What is a function? (from MDN)
Functions are one of the fundamental building blocks in JS
A function is a JavaScript procedure, which is:
A set of statements that perform a task or calculate a value
A function definition (or declaration) consists of a function keyword, followed by:
The name of the function
A list of parameters to the function, enclosed in parentheses and separated by commas
The JS statements that define the function, enclosed in curly braces { }
// definition
function nameOfFunction(/*list of parameters*/) {
  /*statements that define the function*/
}

//calling the function (test)
var result = nameOfFunction(/*list of arguments*/);
console.log(result);
Other ways to write functions
There are several other ways to write functions
For now, we will not concern ourselves with them
The problem at hand (Accumulator Pattern)
Let us consider the case of wanting to write a function that:
Takes in an array of numbers
Returns a new array containing the even numbers from the input array
Steps to this Pattern
The steps for creating this basic algorithm look like this:

1.

Identify the inputs and write a function definition with those inputs
How many are there?
What are their types?
function filterEvenElements(numbers) {
  // input is (1) array of numbers
}
2.

Identify the output
What will the function return when the input is normal?
When/what will the function return when the input is empty?
function filterEvenElements(numbers) {
  // if input in empty, what do we return? (edge case)
  if (numbers.length === 0) {
    return [];
  }
  // output is new array of even numbers
}
3.

Define the result variable (accumulator) and return it
Initialize it to whatever the output is in the empty case
function filterEvenElements(numbers) {
  // edge case
  if (numbers.length === 0) {
    return [];
  }

  // define result variable
  var evenNumbers = [];

  // return result variable
  return evenNumbers;
}
4.

Determine how to iterate
How many times are you going to iterate?
function filterEvenElements(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  var evenNumbers = [];

  // we will iterate over the entire input array
  for (var i = 0; i < numbers.length; i++) {

  }

  return evenNumbers;
}
5.

Alter the accumulator evenNumbers, using the information from the loop numbers[i]
function filterEvenElements(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  var evenNumbers = [];

  for (var i = 0; i < numbers.length; i++) {
    // check if current number is even
    if (numbers[i] % 2 === 0) {
      // add to evenNumbers array
      evenNumbers.push(numbers[i]);
    }
  }

  return evenNumbers;
}
Where to write my code (global vs. local variables, and scope)
Here is a practical piece of instruction regarding nearly every function you will complete during this course:

// Code here is considered "global", not usually recommended
var Global_Variable = 'I am a global variable';

function THIS_IS_THE_FUNCTION_WE_ASKED_YOU_TO_WRTIE(input_of_some_kind) {

  // variables created inside of a function are called local
  var localVariable = "I am a local variable";

  // I CAN ALSO MAKE USE OF THE PARAMETER(S) OF THE FUNCTION IF ANY
  // I can also make use of the parameter(s) of the function, if any
  input_of_some_kind; // <= THIS IS THE PARAMETER OF THIS FUNCTION
  for (var i = 1; i < 6; i++) {
    // variables created here are created anew each iteration
    var newlyCreatedEachIteration = 0;
  }
  // this statement ends the function
  return localVariable;
  // code below this statement will not run
}

// For now, there is no reason to write any code outside of the function templates provided
There is a difference between code written inside of a function, as opposed to outside of it. To take it a step further, when we create a variable inside of our function, it is called local. When we create a variable outside of a function, it is called global, and we will generally avoid this. This idea stems from the concept of scope. Every function has a scope, and this "local" scope includes the function's parameter(s), as well as any variables we create inside of our function's scope (the code written inside of the function). Let us then get into the solid habit of only writing code that manipulates variables within our function's local scope (i.e. its parameters and locally created variables).

Debugging Coding Challenges
Oftentimes our code will not work as expected
This is okay
The process of undertaking to remove the error or bug, is called "Debugging"
What is Data Modeling?
Let's talk about a few things, and how we might model them into usable JS data structures:

A user on a website
var user = {
  id: 2,
  name: 'Craig Bixby',
  username: 'Craig212',
  email: 'Craig212@gmail.com'
};
A kitchen in a restaurant
var kitchen = {
  hours: '11am - 9pm',
  members: ['Chef', 'Sous Chef', 'Cook', 'Dishwasher'],
  tools: ['Knives', 'Ingredients', 'Spatulas', 'Saucepans']
};
A plane in an airport
var plane = {
  radar: true,
  size: 747,
  id: 'a4b2c8'
};
A book in a library
var book = {
  author: 'Aldous Huxley',
  numberOfPages: 268,
  copyright: 1932,
  checkedOut: true,
  customersAlsoEnjoyed: ['1984', 'A Clockwork Orange', 'The Giver']
};
Using an Object to Count Elements
Let us consider the case of wanting to count several totals at once
We can do so using an object:
// an array of items to count
var arrayOfItemsToCount = ['a', 'b', 'a', 'b', 'c', 'b'];
// an object to store the counts
var objectOfCounts = {};

// we loop over the array of items to count
for (var i = 0; i < arrayOfItemsToCount.length; i++) {
  var currentItem = arrayOfItemsToCount[i];
  // if we have not counted current item
  if (objectOfCounts[currentItem] === undefined) {
    // add it to count object with a value of 1
    objectOfCounts[currentItem] = 1;
  // otherwise (we have counted it at least once)
  } else {
    // increment value in count object by 1
    objectOfCounts[currentItem]++;
  }
}
console.log(objectOfCounts);
We can also do so with variables, and actual code.

var attendingOutput = ['Dr. J', 'Dr. K', 'Dr. J', 'Dr. M', 'Dr. J', 'Dr. K', 'Dr. C'];

var objectOfDoctorsCounts = {};

for (var i = 0; i < attendingOutput.length; i++) {
  var currentDoc = attendingOutput[i];
  // if current doc has not been counted yet
  if (objectOfDoctorsCounts[currentDoc] === undefined) {
    objectOfDoctorsCounts[currentDoc] = 1;
  } else {
    objectOfDoctorsCounts[currentDoc]++;
  }
}
console.log(objectOfDoctorsCounts);
