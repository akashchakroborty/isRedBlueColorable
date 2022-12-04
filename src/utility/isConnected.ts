import { Vertex } from '../class';

// DFS function
function depthFirstSearch(
  vertex: string,
  graph: Map<string, { value: string; adjacents: Vertex[] }>,
  graphVertexesList: string[],
  visited: boolean[],
) {
  const vertexIndex = graphVertexesList.indexOf(vertex);
  visited[vertexIndex] = true;
  const adjacents: Vertex[] = graph.get(vertex)?.adjacents || [];
  // looping through the adjacents
  for (let i = 0; i < adjacents.length; i += 1) {
    const adjacent = adjacents[i];
    const adjacentIndex = graphVertexesList.indexOf(adjacent.value);
    if (!visited[adjacentIndex]) {
      // make recursive call from neighbor
      depthFirstSearch(adjacent.value, graph, graphVertexesList, visited);
    }
  }
}

function isConnected(
  noOfVertexes: number,
  graph: Map<string, { value: string; adjacents: Vertex[] }>,
) {
  const graphVertexesList = Array.from(graph.keys());
  const visited: boolean[] = new Array(noOfVertexes);

  visited.fill(false);
  // initiate the DFS with first vertex.
  depthFirstSearch(graphVertexesList[0], graph, graphVertexesList, visited);

  for (let i = 0; i < visited.length; i += 1) {
    // If any vertex it not visited then graph is not connected
    if (!visited[i]) {
      return 'No';
    }
  }

  // If graph is connected
  return 'Yes';
}

export default isConnected;
