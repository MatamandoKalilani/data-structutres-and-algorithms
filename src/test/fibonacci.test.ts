import {
  fibonacciIterative,
  fibonacciRecursive,
} from "../algorithms/recursion/fibonacci";

export const testFibonacci = (value: number) => {
  console.log("Started Fibonacci Test");

  console.log(fibonacciRecursive(value));

  console.log(fibonacciIterative(value));

  console.log("Finished Fibonacci Test");
};
