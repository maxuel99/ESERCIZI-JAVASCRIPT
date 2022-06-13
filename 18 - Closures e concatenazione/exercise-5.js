function memoize(fn) {
  let cache = {};
  return function(number) {
    if (number in cache) {
      console.log('Fetching from cache', number);
      return cache[number];
    } else {
      console.log('Calculating result for', number);
      let result = fn(number);
      cache[number] = result;
      return result;
    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));