interface BinarySearchArgs {
  list: Array<number>;
  item: number;
}

const binarySearchOnArray = ({ list, item }: BinarySearchArgs) => {
  let windowStart = 0;
  let windowEnd = list.length - 1;

  while (windowStart <= windowEnd) {
    const windowMiddle = Math.floor((windowStart + windowEnd) / 2);

    if (list[windowMiddle] === item) {
      return `${list[windowMiddle]} Found at Index ${windowMiddle}`;
    } else if (list[windowMiddle] < item) {
      windowStart = windowMiddle + 1;
    } else {
      windowEnd = windowMiddle - 1;
    }
  }
  return `${item} Not Found`;
};

export default binarySearchOnArray;
