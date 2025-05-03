import React from 'react';
import { Pokemon } from '../../types';

interface CardProps {
  pokemon: Pokemon[];
  loading: boolean;
  infoPokemon: (pokemon: Pokemon) => void;
}

const Card = ({ pokemon, loading, infoPokemon }: CardProps) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <div
              className='card'
              key={item.id}
              onClick={() => infoPokemon(item)}>
              <h2>{item.id}</h2>
              <img
                src={item.sprites?.front_default}
                alt={item.name}
              />
              <h2>{item.name}</h2>
            </div>
          );
        })
      )}
    </>
  );
};

export default Card;
