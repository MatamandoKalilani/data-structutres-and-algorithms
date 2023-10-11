import { Node } from "./node";

export class StackLinkedList<N extends any> {
  private first: Node<N> | null = null;

  public isEmpty(): boolean {
    return this.first === null;
  }

  public push(item: N) {
    const currentFirst = this.first;

    this.first = new Node(item, currentFirst);
    return;
  }

  public pop() {
    if (this.first) {
      const currentFirst = this.first;
      this.first = currentFirst.next;

      return currentFirst.item;
    }
    return null;
  }
}
