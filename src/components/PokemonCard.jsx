import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl  p-4 flex flex-col items-center  ">
      <img src={pokemon.image} alt={pokemon.name} className="h-24 w-24 object-contain cursor-pointer" />
      <h3 className="text-lg font-semibold">{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
