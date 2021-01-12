import React from 'react';

class Pokemons extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    
    return (
      <div className='pokemon'>
        <div>
          <div>{name}</div>
          <div>{type}</div>
          <div>{averageWeight.value} {averageWeight.measurementUnit}</div>
        </div>
        <img src={image} alt={`${name}`}/>
      </div>
    )
  }
}

export default Pokemons;