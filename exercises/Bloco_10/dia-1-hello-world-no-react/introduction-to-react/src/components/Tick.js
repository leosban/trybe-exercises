import React from 'react';

export default () => {
  return (
    <div>
      <h3>It is {new Date().toLocaleDateString('pt-br', { hour12: true })}</h3>
    </div>
  );
};
