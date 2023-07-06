// for loop
console.log("For Loop:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
console.log("While Loop:");
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// do...while loop
console.log("Do...While Loop:");
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// for...in loop
console.log("For...In Loop:");
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let key in person) {
  console.log(key + ': ' + person[key]);
}

// for...of loop
console.log("For...Of Loop:");
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}

// break statement
console.log("Break Statement:");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue statement
console.log("Continue Statement:");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
