import { testBinarySearchTree } from "./test/binary-search-tree.test";
import { testBubbleSort } from "./test/bubble-sort.test";
import { testFactorial } from "./test/factorial.test";
import { testFibonacci } from "./test/fibonacci.test";
import { testGraphAdjacentList } from "./test/graph-adjacent-list.test";
import { testQueueLinkedList } from "./test/queue-linked-list.test";
import { testReverseString } from "./test/reverseString.test";

(() => {
  // testQueueLinkedList();
  //testBinarySearchTree();
  // testGraphAdjacentList();
  // testFactorial(5);
  // testFibonacci(8);
  // testReverseString("Matamando")
  testBubbleSort([1, 2, 40, 39, 3, 5, 70, 7]);
})();
