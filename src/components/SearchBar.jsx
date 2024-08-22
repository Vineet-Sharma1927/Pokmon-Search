import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      value={searchTerm}
      onChange={onSearchChange}
      className="p-2 rounded border border-gray-300 mb-4 w-[100%] mx-auto flex justify-center"
    />
  );
};

export default SearchBar;
