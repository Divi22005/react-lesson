import React from 'react';

const Fruit = ({ name }) => {
  return (
    <div style={{
        border: '2px solid gray',
        borderRadius: '10px',
        padding: '20px 40px',
        fontWeight: 'bold',
        textAlign: 'center',
        minWidth: '100px',
        backgroundColor: '#f9f9f9',
    }}>
      {name}
    </div>
  );
};

export default Fruit;
