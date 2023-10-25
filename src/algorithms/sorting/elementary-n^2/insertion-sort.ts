const insertionSort = (list: Array<number>): Array<number> => {
  for (let i = 0; i < list.length; i++) {
    let valueInQuestionIndex = i;
    for (let x = i; x >= 0; x--) {
      if (list[valueInQuestionIndex] <= list[x]) {
        const hold = list[x];
        list[x] = list[valueInQuestionIndex];
        list[valueInQuestionIndex] = hold;
        valueInQuestionIndex = x;
      } else {
        break;
      }
    }
  }
  return list;
};

export { insertionSort };

// O(N^2)
