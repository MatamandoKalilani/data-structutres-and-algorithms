import { NodeDoublePointer } from "../common/node-double-pointer";
import { BinarySearchTree } from "../data-structures/tree/binary-search-tree";

export const testBinarySearchTree = () => {
  console.log("Started Binary Search Tree Test");
  const tree = new BinarySearchTree<number>();

  tree.insert(9);
  tree.insert(4);
  tree.insert(6);
  tree.insert(20);
  tree.insert(170);
  tree.insert(15);
  tree.insert(1);

  const traverse = (node: NodeDoublePointer<number>) => {
    const tree: NodeDoublePointer<number> = node;
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  };

  console.log(JSON.stringify(traverse(tree.root!)));

  console.log(tree.lookUp(9));

  console.log("Finished Binary Search Tree Test");
};
