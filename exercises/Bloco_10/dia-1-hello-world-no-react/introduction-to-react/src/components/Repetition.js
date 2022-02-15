import React from 'react';
import Products from '../data/Products';

// eslint-disable-next-line no-unused-vars
export default (props) => {
  function getProducts() {
    return Products.map((prod) => {
      return (
        <li key={prod.id}>
          {prod.id} - {prod.name} - R$ {prod.price}
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Repetition</h2>
      <ul>{getProducts()}</ul>
    </div>
  );
};
