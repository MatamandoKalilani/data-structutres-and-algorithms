import {
  findFactorialIterative,
  findFactorialRecursive,
} from "../algorithms/recursion/factorial";

export const testFactorial = (value: number) => {
  console.log("Started Factorial Test");

  console.log(findFactorialRecursive(value));

  console.log(findFactorialIterative(value));

  console.log("Finished Factorial Test");
};
