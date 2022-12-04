import { Vertex, VertexAndColorPair } from '../class';

const isBipartite = (
  noOfVertexes: number,
  graph: Map<string, { value: string; adjacents: Vertex[] }>,
) => {
  const graphVertexesList: string[] = Array.from(graph.keys());
  // List to store colour of vertex, initially assigning all to -1 i.e. uncoloured.
  // colours will be either 0 or 1 for understanding we will take 0 as red and 1 as blue.
  const colourList: number[] = new Array(noOfVertexes);
  for (let i = 0; i < noOfVertexes; i += 1) {
    colourList[i] = -1;
  }

  // queue for BFS storing {vertex , vertexColor}
  const queue = [];

  // looping till number of Vertex
  for (let i = 0; i < noOfVertexes; i += 1) {
    // if not coloured
    if (colourList[i] === -1) {
      // colouring with 0 i.e. red
      queue.push(new VertexAndColorPair(graphVertexesList[i], 0));
      colourList[i] = 0;
      while (queue.length !== 0) {
        const current = queue[0];
        queue.shift();

        const currentVertex = current.vertex;
        const currentVertexColor = current.vertexColor;
        const adjacents: Vertex[] = graph.get(currentVertex)?.adjacents || [];
        // traversing adjacents connected to current vertex
        for (let i = 0; i < adjacents.length; i += 1) {
          const adjacent = adjacents[i];
          const adjacentIndex = graphVertexesList.indexOf(adjacent.value);

          // if already coloured with parent vertex color
          // then bipartite graph is not possible
          if (colourList[adjacentIndex] === currentVertexColor) return 'No';

          // if uncoloured
          if (colourList[adjacentIndex] === -1) {
            // colouring with opposite color to that of parent
            colourList[adjacentIndex] = currentVertexColor === 1 ? 0 : 1;
            queue.push(
              new VertexAndColorPair(graphVertexesList[adjacentIndex], colourList[adjacentIndex]),
            );
          }
        }
      }
    }
  }

  // if all vertexes are coloured such that no two connected vertex have same colours
  return 'Yes';
};

export default isBipartite;
