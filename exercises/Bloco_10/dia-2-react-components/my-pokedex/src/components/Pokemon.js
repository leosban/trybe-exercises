import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

export default class Pokemon extends React.Component {
  render() {
    return (
      <div className='Pokemon'>
        <div>
          <p>{this.props.pokemon.name}</p>
          <p>{this.props.pokemon.type}</p>
          <p>
            {`Average Weight:
            ${this.props.pokemon.averageWeight.value}
            ${this.props.pokemon.averageWeight.measurementUnit}`}
          </p>
        </div>
        <Image source={this.props.pokemon.image} alt='Pokemon Avatar' />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};
