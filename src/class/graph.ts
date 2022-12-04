import Vertex from './vertex';

export enum GraphType {
  DIRECTED = 'Directed Graph',
  UNDIRECTED = 'Undirected Graph',
}

class Graph {
  vertexes: Map<string, Vertex>;

  direction: GraphType;

  constructor(direction = GraphType.DIRECTED) {
    this.vertexes = new Map();
    this.direction = direction;
  }

  addEdge(start: string, end: string) {
    const startVertex = this.addVertex(start);
    const endVertex = this.addVertex(end);

    startVertex.addAdjacent(endVertex);
    if (this.direction === GraphType.UNDIRECTED) {
      endVertex.addAdjacent(startVertex);
    }

    return [startVertex, endVertex];
  }

  addVertex(value: string): Vertex {
    // Check if the vertex already exsist in the vertexes hash map, if so return.
    if (this.vertexes.has(value)) {
      return this.vertexes.get(value)!;
    }
    // If it's a new vertex then add it to the vertexes hash map and then return.
    const vertex = new Vertex(value);
    this.vertexes.set(value, vertex);
    return vertex;
  }
}

export default Graph;
