import React from 'react';
import Pokemons from './pokemons';

class Pokedex extends React.Component {
  render() {
    const { pokes } = this.props;

    return (
      <section className='pokedex'>
        {pokes.map(poke => <Pokemons pokemon={poke} />)}
      </section>
    );
  }
}

export default Pokedex; 