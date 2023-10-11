export class NodeDoublePointer<N extends any> {
  private _item: N;

  private _left: NodeDoublePointer<N> | null = null;
  private _right: NodeDoublePointer<N> | null = null;

  constructor(
    item: N,
    left: NodeDoublePointer<N> | null,
    right: NodeDoublePointer<N> | null
  ) {
    this._item = item;
    this._left = left;
    this._right = right;
  }

  public get item(): N {
    return this._item;
  }

  public set item(value: N) {
    this._item = value;
  }

  public get left() {
    return this._left;
  }
  public set left(value) {
    this._left = value;
  }

  public get right() {
    return this._right;
  }

  public set right(value) {
    this._right = value;
  }
}
