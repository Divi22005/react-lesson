import React, { useState, useEffect } from 'react';

export default function App19() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [message, setMessage] = useState('');

  const maxWickets = 10;

  useEffect(() => {
    if (wickets >= maxWickets) {
      setMessage('Game Over!');
    }
  }, [wickets]);

  const handleRun = () => {
    if (wickets >= maxWickets) return;
    setRuns(prev => prev + 1);
    setMessage('Well Done!');
  };

  const handleWicket = () => {
    if (wickets >= maxWickets) return;
    setWickets(prev => prev + 1);
    setMessage('Better Luck Next Time!');
  };

  return (
    <div>
      <h1>App19</h1>
      <h2>Assignment</h2>

      <div>
        <h2>Cricket Scoreboard</h2>
      </div>

      <div>
        <div>
          <h3>Runs: {runs}</h3>
          <button onClick={handleRun}>Run</button>
          <h3>Wickets: {wickets}</h3>
          <button onClick={handleWicket}>Wicket</button>
        </div>

        <div>
          {message && <h2>{message}</h2>}
        </div>
      </div>
    </div>
  );
}
