import React from "react";

const SearchBar = props => {
  const { searchValue, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div role="search">
        <label className="search-label" htmlFor="search" />
        <input
          id="search"
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search wastes"
          required
        />
        <input className="button" type="button" value="Search" />
      </div>
    </form>
  );
};

export default SearchBar;
