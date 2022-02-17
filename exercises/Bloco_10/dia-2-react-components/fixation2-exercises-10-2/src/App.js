import React from 'react';
import './App.css';
import Order from './Order';

export default class App extends React.Component {
  render() {

    const headphone = {
      id: 102,
      user: 'cena@gmail.com',
      product: 'Razer Headphone',
      price: {
        value: 99.99,
        currency: 'dollars',
      }
    };

    const energyDring = {
      id: 77,
      user: 'cena@gmail.com',
      product: 'Monster 500ml',
      price: {
        value: 9.99,
        currency: 'dollars',
      }
    };
    return (
      <div className="App" >

        <h1>Orders recently created</h1>

        <Order order={headphone} />
        
        <Order order={energyDring} />
      </div>
    );
  }
}

