const fibonacciRecursive = (value: number): number => {
  //O(2^N)
  if (value <= 1) {
    return value;
  }

  return fibonacciRecursive(value - 2) + fibonacciRecursive(value - 1);
};

const fibonacciIterative = (value: number): number => {
  //O(N^2)
  let window = [0, 1];
  let i = 0;
  while (i != value) {
    const prevValue = window[1];
    const nexValue = window[0] + window[1];
    window[0] = prevValue;
    window[1] = nexValue;
    i++;
  }

  return window[0];
};

export { fibonacciIterative, fibonacciRecursive };
