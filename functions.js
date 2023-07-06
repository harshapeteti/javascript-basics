// Function Declaration
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("John");
  
  // Function Expression
  const multiply = function(a, b) {
    return a * b;
  };
  
  let result = multiply(5, 2);
  console.log(result);
  
  // Arrow Function
  const square = (num) => num * num;
  
  let squaredNumber = square(5);
  console.log(squaredNumber);
  
  // Function Parameters
  function add(a, b) {
    return a + b;
  }
  
  let sum = add(3, 5);
  console.log(sum);

  
  // Function Invocation
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Alice");
  