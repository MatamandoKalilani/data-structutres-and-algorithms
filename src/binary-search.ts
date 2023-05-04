interface BinarySearchArgs {
  list: Array<number>;
  item: number;
}

const binarySearch = ({ list, item }: BinarySearchArgs) => {
  let beginning = 0;
  let end = list.length - 1;

  while (beginning <= end) {
    const middle = Math.floor((beginning + end) / 2);

    if (list[middle] === item) {
      return list[middle];
    } else if (list[middle] < item) {
      beginning = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return null;
};

export default binarySearch;
