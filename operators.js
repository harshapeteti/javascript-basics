let a = 10;
let b = 5;

// Arithmetic Operators
let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let remainder = a % b;
let exponentiation = a ** b;

console.log(addition);         // Output: 15
console.log(subtraction);      // Output: 5
console.log(multiplication);   // Output: 50
console.log(division);         // Output: 2
console.log(remainder);        // Output: 0
console.log(exponentiation);   // Output: 100000

// Assignment Operators
let x = 20;
x += 5;    // Equivalent to: x = x + 5
console.log(x);   // Output: 25

// Comparison Operators
console.log(a == b);    // Output: false
console.log(a !== b);   // Output: true
console.log(a > b);     // Output: true
console.log(a <= b);    // Output: false

// Logical Operators
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse);   // Output: false
console.log(isTrue || isFalse);   // Output: true
console.log(!isTrue);             // Output: false

// Unary Operators
let num = 5;

console.log(+num);    // Output: 5
console.log(-num);    // Output: -5
console.log(++num);   // Output: 6
console.log(--num);   // Output: 5

// Ternary Operator
let age = 18;
let isAdult = age >= 18 ? 'Adult' : 'Minor';
console.log(isAdult);   // Output: 'Adult'

// String Operators
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log(fullName);   // Output: 'John Doe'

// Type Operators
console.log(typeof a);                    // Output: 'number'
console.log(a instanceof Number);         // Output: false
console.log(fullName instanceof String);   // Output: false
