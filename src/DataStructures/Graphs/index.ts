export class Graph {
  adjacencyList: any;
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: any) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1: any, v2: any) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

}