const findFactorialRecursive = (value: number): number => {
  if (value <= 1) {
    return value;
  }

  return findFactorialRecursive(value - 1) * value;
};

const findFactorialIterative = (value: number): number => {
  let output = value;
  for (let i = value - 1; i > 0; i--) {
    output = output * i;
  }
  return output;
};

export { findFactorialIterative, findFactorialRecursive };
