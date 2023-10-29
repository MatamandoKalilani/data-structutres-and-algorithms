import { mergeSort } from "../algorithms/sorting/divide-and-conquer/merge-sort";

export const testMergeSort = (value: Array<number>) => {
  console.log("Started Merge Sort Test");

  console.log(mergeSort(value));

  console.log("Finished Merge Sort Test");
};
