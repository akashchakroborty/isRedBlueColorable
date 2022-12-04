import { Graph } from '../class';

const getAdjacentGraphList = (
  textList: string[],
  graph: Graph,
) => {
  // looping through text to form the graph.
  for (let i = 0; i < textList.length; i += 1) {
    if (textList[i] === '-') {
      if (textList[i + 1] !== ',' || textList[i - 1] !== ',') {
        graph.addEdge(textList[i - 1], textList[i + 1]);
      }
    }
  }
  return graph.vertexes;
};

export default getAdjacentGraphList;
