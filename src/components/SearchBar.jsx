import React from 'react';

const SearchBar = ({ searchString, searchCallback }) => {
  return (
    <div>
        <label htmlFor="searchBar">Search</label><br />
        <input 
            type="search" 
            name="searchBar" 
            id="searchBar" 
            value={searchString}
            onChange={(e) => searchCallback(e.target.value)}
        />
    </div>
  );
};

export default SearchBar;
