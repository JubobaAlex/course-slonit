function calculateSum(numbers) {
    let sum = 0;
    numbers.forEach(number => {
      sum += number;
    });
    return sum;
  }
  
  let amounts = [10000, 20000, 30000];
  console.log(calculateSum(amounts));