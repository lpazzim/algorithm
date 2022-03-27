export class Graph {
  adjacencyList: any;
  constructor() {
    this.adjacencyList = {};
  }


  addVertex(vertex: any) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}