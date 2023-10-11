export class Node<N extends any> {
  private _item: N;

  private _next: Node<N> | null = null;

  constructor(item: N, next: Node<N> | null) {
    this._item = item;
    this._next = next;
  }

  public get item(): N {
    return this._item;
  }

  public set item(value: N) {
    this._item = value;
  }

  public get next() {
    return this._next;
  }
  public set next(value) {
    this._next = value;
  }
}
