import React from 'react';
import Fruit from './Fruit';

const App6 = () => {
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Fruits</h1>
    <div   style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          justifyItems: 'center',
          maxWidth: '400px',
          margin: '0 auto',
          marginTop: '30px',
        }}>
      <Fruit name="Apple" />
      <Fruit name="Mango" />
      <Fruit name="Orange" />
      <Fruit name="Banana" />
      </div>
    </div>
  );
};

export default App6;
