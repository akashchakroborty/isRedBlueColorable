import React, { ChangeEvent, useEffect, useState } from 'react';
import { Graph, GraphType, Vertex } from '../../class';
import FormComponent from '../../components/form';
import {
  getSanitizedTextForGraph,
  getAdjacentGraphList,
  isConnected,
  isBipartite,
} from '../../utility';

let graphVertexes: Map<string, { value: string; adjacents: Vertex[] }> = new Map();

const RedBlueColorable = () => {
  const [text, setText] = useState('');
  const [graphStatus, setGraphStatus] = useState({ isGraphConnected: '', isRedBlueColorable: '' });
  const { isGraphConnected, isRedBlueColorable } = graphStatus;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const textList = getSanitizedTextForGraph(text);
    const graph = new Graph(GraphType.UNDIRECTED);
    graphVertexes = getAdjacentGraphList(textList, graph);
    setGraphStatus((prevStatus) => {
      return {
        ...prevStatus,
        isGraphConnected: isConnected(graphVertexes.size, graphVertexes),
      };
    });
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(() => e.target.value);
  };

  // A better approach to check for 'isRedBlueColorable' only if its a connected graph.
  useEffect(() => {
    if (isGraphConnected === 'Yes') {
      setGraphStatus((prevStatus) => {
        return {
          ...prevStatus,
          isRedBlueColorable: isBipartite(graphVertexes.size, graphVertexes),
        };
      });
    }
  }, [isGraphConnected, graphVertexes]);

  return (
    <>
      <FormComponent value={text} handleChange={handleChange} handleSubmit={handleSubmit} />
      {isGraphConnected === 'Yes' && isRedBlueColorable === 'Yes' && (
        <p>Is a connected and red-blue colorable graph</p>
      )}
      {isGraphConnected === 'No' && <p>Is not a connected graph</p>}
      {isGraphConnected === 'Yes' && isRedBlueColorable === 'No' && (
        <p>Is a connected graph, but not red blue colorable.</p>
      )}
    </>
  );
};

export default RedBlueColorable;
