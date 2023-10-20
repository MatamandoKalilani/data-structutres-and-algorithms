import { bubbleSort } from "../algorithms/sorting/bubble-sort";

export const testBubbleSort = (value: Array<number>) => {
  console.log("Started Bubble Sort Test");

  console.log(bubbleSort(value));

  console.log("Finished Bubble Sort Test");
};
