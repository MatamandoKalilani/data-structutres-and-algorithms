const bubbleSort = (list: Array<number>): Array<number> => {
  for (let i = 0; i < list.length; i++) {
    for (let x = 0; x < list.length - 1; x++) {
      if (list[x] > list[x + 1]) {
        const hold = list[x + 1];
        list[x + 1] = list[x];
        list[x] = hold;
      }
    }
  }
  return list;
};

export { bubbleSort };

// O(N^2)
