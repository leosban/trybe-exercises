import React from 'react';
import pokemons from './data/Pokemons';
import Pokedex from './components/Pokedex';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <>
        <header className='Header'>
          <h1>POKEDEX</h1>
        </header>
        <div className='App'>
          <Pokedex pokemons={pokemons} />
        </div>
      </>
    );
  }
}
