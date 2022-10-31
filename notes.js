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

*/



















































































