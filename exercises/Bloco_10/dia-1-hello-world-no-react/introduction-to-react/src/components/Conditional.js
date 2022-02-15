import React from 'react';

export default (props) => {
  return (
    <div>
      <h2>The é number is {props.number}</h2>
      {props.number % 2 === 0 ? 'Pair' : 'Odd'}
    </div>
  );
};
