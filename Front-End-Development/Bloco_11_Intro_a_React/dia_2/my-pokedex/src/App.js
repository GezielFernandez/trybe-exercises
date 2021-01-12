import React from 'react';

import Pokedex from './Components/pokedex';
import { pokemons } from './data';

import './App.css';
import './index'

class App extends React.Component {
  render() {
    return (
      <main>
        <Pokedex pokes={pokemons} />
      </main>
    )
  }
}


export default App;
