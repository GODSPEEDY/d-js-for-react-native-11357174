function processArray(numbers) {
  const result = [];
  for (const number of numbers) {
      if (number % 2 === 0) {
          result.push(number * number);
      } else {
          result.push(number * 3); 
      }
  }
  return result;
}


