import React, { Profiler } from 'react';
import RedBlueColorable from '../pages/RedBlueColorable';

const App: React.FC = () => {
  function onRenderCallback(
    id: string, // the "id" prop of the Profiler tree that has just committed
    phase: string, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration: number, // time spent rendering the committed update
    baseDuration: number, // estimated time to render the entire subtree without memoization
  ) {
    // Aggregate or log render timings...
    console.table({ id, phase, actualDuration, baseDuration });
  }
  return (
    <main id="content">
      <Profiler id="RedBlueColorable" onRender={onRenderCallback}>
        <RedBlueColorable />
      </Profiler>
    </main>
  );
};

export default App;
