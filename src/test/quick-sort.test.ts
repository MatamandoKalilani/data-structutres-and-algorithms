import { quickSort } from "../algorithms/sorting/divide-and-conquer/quick-sort.dirty";

export const testQuickSort = (value: Array<number>) => {
  console.log("Started Quick Sort Test");

  console.log(quickSort(value));

  console.log("Finished Quick Sort Test");
};
