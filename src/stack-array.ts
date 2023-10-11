export class StackArray<N extends any> {
  private stack: N[] = [];

  public isEmpty(): boolean {
    return this.stack.length === 0;
  }

  public push(item: N) {
    return this.stack.push(item);
  }

  public pop() {
    return this.stack.pop();
  }
}
