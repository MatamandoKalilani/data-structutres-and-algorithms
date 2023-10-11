import verbalize from "./verbalizer";
import binarySearch from "./binary-search";
import { StackLinkedList } from "./stack-linked-list";
import { StackArray } from "./stack-array";
import { QueueLinkedList } from "./queue-linked-list";

(() => {
  console.log("Starting");

  // verbalize({
  //   func: binarySearch,
  //   args: [{ list: [2, 4, 6, 8, 12, 14, 56,  80, 90], item: 80 }],
  // });

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

  console.log("Finished");
})();
