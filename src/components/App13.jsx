import React, { useState } from 'react';
import './App13.css';

const App13 = () => {
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const inputNumber = parseFloat(number);
  const isValid = !isNaN(inputNumber);

  return (
    <div className="app13-container">
      <h2>App13</h2>
      <h3>Assignment</h3>

      <div className="boxes-container">
        <div className="box">
          <strong>Addition</strong>
          <p>100 + {isValid ? inputNumber : '_'} = {isValid ? 100 + inputNumber : '__'}</p>
        </div>

        <div className="box">
          <strong>Subtraction</strong>
          <p>100 - {isValid ? inputNumber : '_'} = {isValid ? 100 - inputNumber : '__'}</p>
        </div>

        <div className="center-input">
          <input
            type="number"
            value={number}
            onChange={handleChange}
            placeholder="Enter number"
          />
        </div>

        <div className="box">
          <strong>Multiplication</strong>
          <p>100 * {isValid ? inputNumber : '_'} = {isValid ? 100 * inputNumber : '__'}</p>
        </div>

        <div className="box">
          <strong>Division</strong>
          <p>100 / {isValid ? inputNumber : '_'} = {isValid && inputNumber !== 0 ? (100 / inputNumber).toFixed(2) : '__'}</p>
        </div>
      </div>
    </div>
  );
};

export default App13;
