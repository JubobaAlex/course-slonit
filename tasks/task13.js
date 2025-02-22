function calculate(a, b, operation) {
    return operation(a, b);
  }
  
  const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
  
  
  // Пример использования:
  const selectedOperation = "multiply";
  console.log(calculate(6, 3, operations[selectedOperation])); // 18
  
  const selectedOperation2 = "add";
  console.log(calculate(6, 3, operations[selectedOperation2])); // 9
  
  const selectedOperation3 = "subtract";
  console.log(calculate(6, 3, operations[selectedOperation3])); // 3
  
  const selectedOperation4 = "divide";
  console.log(calculate(6, 3, operations[selectedOperation4])); // 2
  