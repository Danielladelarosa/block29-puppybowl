// TESTED

import React from 'react';

const SearchBar = ({ searchText, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search players..."
        value={searchText}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
