const mergeSort = (list: Array<number>): Array<number> => {
  if (list.length === 1) {
    return list;
  }

  const middle = Math.floor(list.length / 2);
  let left: Array<number> = list.slice(0, middle);
  let right: Array<number> = list.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left: Array<number>, right: Array<number>): Array<number> => {
  const merged: Array<number> = [];

  let leftIndex = 0;
  let rightIndex = 0;

  let leftIsFinished = false;
  let rightIsFinished = false;

  while (!leftIsFinished || !rightIsFinished) {
    if (leftIsFinished && !rightIsFinished) {
      merged.push(right[rightIndex]);
      rightIndex++;
    } else if (rightIsFinished && !leftIsFinished) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      if (left[leftIndex] > right[rightIndex]) {
        merged.push(right[rightIndex]);
        rightIndex++;
      } else {
        merged.push(left[leftIndex]);
        leftIndex++;
      }
    }

    leftIsFinished = leftIndex >= left.length;
    rightIsFinished = rightIndex >= right.length;
  }

  return merged;
};

export { mergeSort };

// O(n log n) - Time Complexity
// O(n) - Space Complexity
