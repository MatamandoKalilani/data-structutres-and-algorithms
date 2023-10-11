class GraphAdjacentList {
  _numberOfNodes: number;
  _adjacentList: Record<string, Array<string>>;

  constructor() {
    this._numberOfNodes = 0;
    this._adjacentList = {};
  }

  addVertex(node: string) {
    this._adjacentList[node] = [];
  }

  addEdge(node1: string, node2: string) {
    if (!this._adjacentList[node1] || !this._adjacentList[node2]) {
      return null;
    }

    this._adjacentList[node1].push(node2);
    this._adjacentList[node2].push(node1);
  }

  showConnections() {
    const allNodes = Object.keys(this._adjacentList);

    for (const node of allNodes) {
      const nodeConnections = this._adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + " ---> " + connections);
    }
  }
}

export { GraphAdjacentList };
