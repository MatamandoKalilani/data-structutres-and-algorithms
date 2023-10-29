import { testBinarySearchTree } from "./test/binary-search-tree.test";
import { testBreadthFirstSearch } from "./test/breadth-first-search.test";
import { testBubbleSort } from "./test/bubble-sort.test";
import { testFactorial } from "./test/factorial.test";
import { testFibonacci } from "./test/fibonacci.test";
import { testGraphAdjacentList } from "./test/graph-adjacent-list.test";
import { testInsertionSort } from "./test/insertion-sort.test";
import { testMergeSort } from "./test/merge-sort.test";
import { testQueueLinkedList } from "./test/queue-linked-list.test";
import { testQuickSort } from "./test/quick-sort.test";
import { testReverseString } from "./test/reverseString.test";
import { testSelectionSort } from "./test/selection-sort.test";

(() => {
  // testQueueLinkedList();
  //testBinarySearchTree();
  // testGraphAdjacentList();
  // testFactorial(5);
  // testFibonacci(8);
  // testReverseString("Matamando")

  testBubbleSort([1, 2, 40, 39, 10, 60, 3, 5, 70, 7]);
  testSelectionSort([1, 60, 2, 40, 39, 3, 5, 70, 10, 7]);
  testInsertionSort([1, 60, 2, 40, 39, 3, 5, 70, 10, 7]);
  testMergeSort([1, 60, 2, 40, 60, 39, 3, 5, 70, 10, 7]);
  testQuickSort([1, 60, 2, 40, 60, 39, 3, 5, 70, 10, 7]);
  testBreadthFirstSearch();
})();
