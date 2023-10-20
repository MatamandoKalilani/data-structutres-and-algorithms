import {
  reverseStringIterative,
  reverseStringRecursive,
} from "../algorithms/recursion/reverseString";

export const testReverseString = (word: string) => {
  console.log("Started Reverse String Test");

  console.log(reverseStringRecursive(word));

  console.log(reverseStringIterative(word));

  console.log("Finished Reverse String Test");
};
