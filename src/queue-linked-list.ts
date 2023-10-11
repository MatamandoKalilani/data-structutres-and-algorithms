import { Node } from "./node";

export class QueueLinkedList<N extends any> {
  private first: Node<N> | null = null;
  private last: Node<N> | null = null;

  public isEmpty(): boolean {
    return this.first === null;
  }

  public enqueue(item: N) {
    const newNode = new Node<N>(item, null);

    if (!this.last) {
      this.first = newNode;
      this.last = newNode;
      return;
    }

    this.last.next = newNode;
    this.last = newNode;
  }

  public dequeue() {
    if (this.first) {
      const currentFirst = this.first;
      this.first = this.first.next;

      if (!this.first) {
        this.last = null;
      }
      return currentFirst.item;
    }
    return null;
  }
}
