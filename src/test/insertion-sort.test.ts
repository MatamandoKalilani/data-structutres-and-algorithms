import { insertionSort } from "../algorithms/sorting/elementary-n^2/insertion-sort";

export const testInsertionSort = (value: Array<number>) => {
  console.log("Started Insertion Sort Test");

  console.log(insertionSort(value));

  console.log("Finished Insertion Sort Test");
};
