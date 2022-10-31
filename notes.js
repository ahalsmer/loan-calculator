/* 
Explicit type coercion happens when the programmer intentionally uses one of the many built-in functions
to coerce one type of value into another. Like the calculator program from your previous lesson, you used the 
the Number function to voncert strings to numbers before we could perform arithmetic.
*/

let one = Number('1');
console.log(one);
typeof one;

/*
Both parseInt and parseFloat also coerce strings into numbers: parseInt converts strings into integers, 
while parseFloat coerces strings to floating point numbers.

The unary + operator attempts to coerce a value to a number, It works like the Number function, but is
more succinct: 
 */
+""
// 0
+"1"
// 1
+'2.3'
// 2.3
+'abc'
// NaN

/* 
You can use the toString method on all JavaScript data types except ull and undefined. Using the String 
method can accomplish the same as the toString method, while also working on null and undefined.
*/ 

let number = 42;
number.toString();
// '42'

String(42);
// '42'
String([1, 2, 3]);
// '1,2,3'
String(null);
// 'null'





/*
The time you spent working on a bug or issue in your code
will, in turn, burn the lesson into your long-term memory.
With this in mind, remember the value of sticking with a 
problem until you figure it out. The longer you stay with
it, the better you will be able to handle similar problems 
in the future. The only way to retain this kind of information
is to pay with time.

To make your code readable for other programmers, always make 
an effort to give your variables descriptive names that make it 
clear what they contain. This skill becomes essential in 
managing larger programs, even if it's importance is lost on
smaller programs.

Try to avoid magic numbers, numbers that appear in your program
without any information that describes what that number represents.
For example:
*/

const NUMBER_CARDS_IN_HAND = 5;

function dealHand() {
  let hand = [];
  for (let cardNumber = 0; cardNumber < NUMBER_CARDS_IN_HAND; ++cardNumber) {
    hand.push(dealCard());
  }

  return hand;
}

/*
These magic number constants are typically declared at the top level
of a program.

On another not, constants are often regarded as variable that cannot 
be changed. On the contrary, constants can be mutated although they 
cannot be reassigned. For example:
*/

const CARDS = [1, 2, 3];

CARDS.push(4);
console.log(CARDS); // [1, 2, 3, 4]

CARDS[1] = 'changed';
console.log(CARDS); // [1, 'changed', 3, 4]

CARDS.shift();
console.log(CARDS); // ['changed', 3, 4]

CARDS = [5, 6, 7] // TypeError: Assignmment to constant variable

/* 
You can also use Object.freeze to freeze an object so that its value
can not be changed in any way. For example:
*/

const CARDS2 = Object.freeze([1, 2, 3]);
CARDS2.push(4); // TypeError: Cannot add property 3, object is not extensible

/*
Function Guidelines:

The instinct to extract code to a function is good, however make sure that your
function does one thing and that its responsibility is limited. If your function 
is more than 15 lines long, consider splitting it into 2 or more functions.

A functionis said to have side effects if it does any of the following:

1. It reassigns any non-local variable. Reassigning a variable in the outer scope
would be a side effect

2. It mutates the value of any object referenced by a non-local variable. Mutating 
an array or object argument, for instance, would be a side effect.

3. It reads or writes to a file, network connection, browser, or the system hardware.
Side effects like this include writing to the console log and reading input from the terminal.

4. It raises an exception without handling it.

5. It calls another function that has side efects.

The following functions have side effects:
*/

// side effect: logs output to the console
// returns undefined

function displayTotal(num1, num2) {
  console.log(num1 + num2);
}

// side effect: mutates the passed-in array
// returns: updated array

function append(targetArr, valueToAppend) {
  targetArr.push(valueToAppend);
  return targetArr;
}

// Here's an example of a function with no side effects:

// side effects: none
// returns: a new number

function computeTotal(num1, num2) {
  return num1 + num2;
}

/* 
Most functions should return a useful value or they should 
have a side effect, but not both.

Functions should be at the same level of abstraction:

This guideline is a little hard in the beginning since you have 
develop a feel for it over time. Usually, functions take some input
and return an output. When working with a function, you should 
mentally extract the function from the program and work with it in 
isolation. You should be able to feed it inputs and expect it to 
produce some outputs. When you have a function like that, you can use 
it without thinking about the implementation.

For example, given the four functions below, which one stands out?

- deal()
- hit()
- stay()
- iterateThroughCards()

The last one, iterateThroughCards, is not at the same level of 
abstraction as your other functions. The other functions are in the 
language of the game -- verbs that are used only for this game. They
all specify "what" to do, but leave the implementation details to 
the actual function. The last function is a programmer concern --
iterating through cards. It's "how" you perform the task.


Function names should reflect what they do. For example, when we see a 
function called updateTotal, we assume that it mutatessomething -- 
perhaps one of the arguments or something else in the 
program.

Your goal should be to build small functions that are like LEGO blocks:
they should be stand-alone pieces of functionality that you can use to 
piece together together larger structures.

Some functions are convoluted since the logic is complex. It's a sign 
that you don't quite understand the problem well enough to break it
down into well-compartmentalized pieces. However, your understanding 
should grow as you dig deeper into the code. When it does, refactor your
code to reflect the increased clarity.

This process is similar to writing. Your first draft is almost exploratory,
dumping out ideas all over the place. As your narrative comes into focus,
the structure of your piece becomes more organized and clean.
*/

// V A R I A B L E   S C O P E

/* 
In JavaScript, we have two different types of scope: global and local.
Very small programs with no functions or blocks exist entirely within a
single scope, the global scope.
 
Local scope comes in two forms: function scope and block scope.

Function Scope:

Functions define a new scope for local variables. You can think of the 
scope defined by a function as an inner scope. Nested functions define 
nested scopes. A variable's scope is determined by where it is declared.

Outer scope varaiables can be accessed by the inner scope, but inner
scope variables cannot be accessed in the outer scope.cd
*/





















































































