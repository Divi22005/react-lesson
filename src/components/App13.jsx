import React, { useState, useEffect } from 'react';
import './App13.css';

const App13 = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState({
    addition: '__',
    subtraction: '__',
    multiplication: '__',
    division: '__',
  });

  useEffect(() => {
    const number = parseInt(input);

    if (!isNaN(number)) {
      setResults({
        addition: 100 + number,
        subtraction: 100 - number,
        multiplication: 100 * number,
        division: number !== 0 ? (100 / number).toFixed(2) : '∞',
      });
    } else {
      setResults({
        addition: '__',
        subtraction: '__',
        multiplication: '__',
        division: '__',
      });
    }
  }, [input]);

  return (
    <div className="app13-container">
      <h2>App13</h2>
      <h3>Assignment</h3>

      <div className="boxes-container">
        <div className="box">
          <strong>Addition</strong>
          <p>100 + {input || '_'} = {results.addition}</p>
        </div>

        <div className="box">
          <strong>Subtraction</strong>
          <p>100 - {input || '_'} = {results.subtraction}</p>
        </div>

        <div className="center-input">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter number"
          />
        </div>

        <div className="box">
          <strong>Multiplication</strong>
          <p>100 * {input || '_'} = {results.multiplication}</p>
        </div>

        <div className="box">
          <strong>Division</strong>
          <p>100 / {input || '_'} = {results.division}</p>
        </div>
      </div>
    </div>
  );
};

export default App13;