import { bubbleSort } from "../algorithms/sorting/elementary-n^2/bubble-sort";

export const testBubbleSort = (value: Array<number>) => {
  console.log("Started Bubble Sort Test");

  console.log(bubbleSort(value));

  console.log("Finished Bubble Sort Test");
};
