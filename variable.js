function example() {
    var localVar = 'Local variable';  // Function-scoped variable
    if (true) {
      let blockVar = 'Block variable'; // Block-scoped variable
      console.log(localVar);  // Accessible within the function
      console.log(blockVar);  // Accessible within the block
    }
    console.log(localVar);    // Accessible within the function
    console.log(blockVar);    // ReferenceError: blockVar is not defined
  }
example()
  