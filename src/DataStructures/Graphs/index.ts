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

  removeEdge(vertex1: any, vertex2: any){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v:any) => v !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v:any) => v !== vertex1
    );
  }

  removeVertex(vertex:any){
    while(this.adjacencyList[vertex].length){
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex]
  }

}