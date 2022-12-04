class Vertex {
  value: string;

  adjacents: Vertex[];

  constructor(value: string) {
    this.value = value;
    // graph adjacency list
    this.adjacents = [];
  }

  addAdjacent(vertex: Vertex) {
    this.adjacents.push(vertex);
  }
}

export default Vertex;
