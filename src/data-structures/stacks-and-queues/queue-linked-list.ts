import { NodeSinglePointer } from "../../common/node-single-pointer";

export class QueueLinkedList<N extends any> {
  private first: NodeSinglePointer<N> | null = null;
  private last: NodeSinglePointer<N> | null = null;
  public length: number = 0;

  public isEmpty(): boolean {
    return this.first === null;
  }

  public enqueue(item: N) {
    const newNode = new NodeSinglePointer<N>(item, null);

    if (!this.last) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.length++;
  }

  public dequeue() {
    if (this.first) {
      const currentFirst = this.first;
      this.first = this.first.next;

      if (!this.first) {
        this.last = null;
      }
      this.length--;
      return currentFirst.item;
    }
    return null;
  }
}
