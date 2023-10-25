const selectionSort = (list: Array<number>): Array<number> => {
  for (let i = 0; i < list.length; i++) {
    let smallestNumberIndex = i;
    for (let x = i; x < list.length; x++) {
      if (list[smallestNumberIndex] > list[x]) {
        smallestNumberIndex = x;
      }
    }
    const hold = list[i];
    list[i] = list[smallestNumberIndex];
    list[smallestNumberIndex] = hold;
  }

  return list;
};

export { selectionSort };

// O(N^2)
