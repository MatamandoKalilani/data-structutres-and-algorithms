import { selectionSort } from "../algorithms/sorting/elementary-n^2/selection-sort";

export const testSelectionSort = (value: Array<number>) => {
  console.log("Started Selection Sort Test");

  console.log(selectionSort(value));

  console.log("Finished Selection Sort Test");
};
