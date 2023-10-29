import { BinarySearchTree } from "../../data-structures/tree/binary-search-tree";

const breadthFirstSearch = (tree: BinarySearchTree<number>, item: number) => {
  let queue: (typeof tree.root)[] = [];
  queue.push(tree.root);
  let list: number[] = [];
  let found = null;
  let position = 0;
  while (position < queue.length) {
    const current = queue[position];
    current?.item && list.push(current.item);
    if (current?.item === item) {
      found = queue[position];
    }

    if (current?.left) {
      queue.push(current.left);
    }
    if (current?.right) {
      queue.push(current.right);
    }
    position++;
  }

  return [found, list];
};

export { breadthFirstSearch };
