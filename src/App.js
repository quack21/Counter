import './index.scss';
import React from 'react';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={(event) => setCount(count - 1)} className="minus">
          - Минус
        </button>
        <button onClick={(event) => setCount(count + 1)} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
