const quickSort = (list: Array<number>): Array<number> => {
  if (list.length <= 1) {
    return list;
  }

  // Pick Random Pivot
  let pivotIndex = Math.floor(Math.random() * list.length);

  // Place Pivot at the end
  const holdPivot = list[pivotIndex];
  list[pivotIndex] = list[list.length - 1];
  list[list.length - 1] = holdPivot;
  pivotIndex = list.length - 1;

  // Sort all numbers smaller to the left and bigger to the right

  let itemFromLeftIndex = 0;
  let itemFromRightIndex = list.length - 2;

  while (itemFromLeftIndex <= itemFromRightIndex) {
    if (
      list[itemFromLeftIndex] >= list[pivotIndex] &&
      list[itemFromRightIndex] > list[pivotIndex]
    ) {
      itemFromRightIndex = itemFromRightIndex - 1;

      continue;
    }

    if (
      list[itemFromRightIndex] < list[pivotIndex] &&
      list[itemFromLeftIndex] < list[pivotIndex]
    ) {
      itemFromLeftIndex = itemFromRightIndex + 1;

      continue;
    }

    if (
      list[itemFromLeftIndex] > list[pivotIndex] &&
      list[itemFromRightIndex] < list[pivotIndex]
    ) {
      const holdSwap = list[itemFromLeftIndex];
      list[itemFromLeftIndex] = list[itemFromRightIndex];
      list[itemFromRightIndex] = holdSwap;
    }
    itemFromRightIndex--;
    itemFromLeftIndex++;
  }

  const hold = list[pivotIndex];
  list[pivotIndex] = list[itemFromLeftIndex];
  list[itemFromLeftIndex] = hold;
  pivotIndex = itemFromLeftIndex;

  // Break Down List
  let left: Array<number> = pivotIndex !== 0 ? list.slice(0, pivotIndex) : [];
  let right: Array<number> =
    typeof list[pivotIndex + 1] !== "undefined"
      ? list.slice(pivotIndex + 1)
      : [];

  return combine(quickSort(left), quickSort(right), list[pivotIndex]);
};

const combine = (
  left: Array<number>,
  right: Array<number>,
  pivot: number
): Array<number> => {
  const combined: Array<number> = [];

  for (const i of left) {
    combined.push(i);
  }

  combined.push(pivot);

  for (const x of right) {
    combined.push(x);
  }

  return combined;
};

export { quickSort };

// O(n log n) - Time Complexity
// O(n) - Space Complexity
