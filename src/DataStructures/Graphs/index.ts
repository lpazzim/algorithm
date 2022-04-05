import { neighborhood } from "../../Challenges";

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

  removeEdge(vertex1: any, vertex2: any) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v: any) => v !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v: any) => v !== vertex1
    );
  }

  removeVertex(vertex: any) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex]
  }

  depthFirstRecursive(start: any) {
    const result: any = [];
    const visited: any = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex: any) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor: any | null) => {
        if (!visited[neighbor]) return dfs(neighbor)
      });
    })(start)
    return result
  }

  depthFirstIterative(start: any) {
    const stack: any = [start];
    const result: any = [];
    const visited: any = {};
    let currentVertex: any;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor: any) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })

    }
    return result;
  }
}