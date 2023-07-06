// if statement
let x = 5;
if (x > 0) {
  console.log("x is positive");
} else {
  console.log("x is non-positive");
}

// if...else if...else statement
let num = 10;
if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

// switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Today is another day");
}

// try...catch statement
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("An error occurred: " + error.message);
}

// throw statement
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log("An error occurred: " + error.message);
}

// return statement
function multiply(a, b) {
  return a * b;
}

let result = multiply(5, 2);
console.log(result);
