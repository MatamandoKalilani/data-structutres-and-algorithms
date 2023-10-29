import { breadthFirstSearch } from "../algorithms/search/breadth-first-search";
import { breadthFirstSearchRecursive } from "../algorithms/search/breadth-first-search-recursive";
import { NodeDoublePointer } from "../common/node-double-pointer";
import { QueueLinkedList } from "../data-structures/stacks-and-queues/queue-linked-list";
import { BinarySearchTree } from "../data-structures/tree/binary-search-tree";

export const testBreadthFirstSearch = () => {
  console.log("Started Breadth First Search Test");
  const tree = new BinarySearchTree<number>();

  tree.insert(9);
  tree.insert(4);
  tree.insert(6);
  tree.insert(20);
  tree.insert(170);
  tree.insert(15);
  tree.insert(1);
  tree.insert(8);

  const queue = new QueueLinkedList<NodeDoublePointer<number> | null>();
  queue.enqueue(tree.root);
  console.log(breadthFirstSearch(tree, 8));
  console.log(breadthFirstSearchRecursive(queue, []));

  console.log("Finished Breadth First Search Test");
};
