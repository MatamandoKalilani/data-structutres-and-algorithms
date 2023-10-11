import { QueueLinkedList } from "../data-structures/stacks-and-queues/queue-linked-list";

export const testQueueLinkedList = () => {
  const numberStack = new QueueLinkedList<number>();

  console.log(`Start - Is Empty: ${numberStack.isEmpty()}`);

  for (
    let i = 2;
    i < 10000000000000000000000000000000000000000000000000000000000;
    i *= i
  ) {
    console.log(`Queueing: ${i}`);
    numberStack.enqueue(i);
  }
  console.log(`Running Dequeue on Queue`);

  while (!numberStack.isEmpty()) {
    const x = numberStack.dequeue();
    console.log(`Popped: ${x}`);
  }

  console.log(`Again`);

  for (let x = 2; x < 604040404040404; x = x * 2) {
    console.log(`Queueing: ${x}`);
    numberStack.enqueue(x);
  }
  console.log(`Running Dequeue on Queue`);

  while (!numberStack.isEmpty()) {
    const d = numberStack.dequeue();
    console.log(`Popped: ${d}`);
  }
};
