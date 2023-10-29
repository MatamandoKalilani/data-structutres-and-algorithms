import { NodeDoublePointer } from "../../common/node-double-pointer";
import { QueueLinkedList } from "../../data-structures/stacks-and-queues/queue-linked-list";

//@ts-ignore
const breadthFirstSearchRecursive = (
  queue: QueueLinkedList<NodeDoublePointer<number> | null>,
  list: number[]
) => {
  if (queue.length === 0) {
    return list;
  }

  const node = queue.dequeue();

  node?.item && list.push(node?.item);

  if (node?.left) {
    queue.enqueue(node.left);
  }

  if (node?.right) {
    queue.enqueue(node.right);
  }

  return breadthFirstSearchRecursive(queue, list);
};

export { breadthFirstSearchRecursive };
