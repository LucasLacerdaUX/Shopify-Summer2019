import React from "react";

const SearchBar = props => {
  const { searchValue, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div role="search">
        <label class="search-label" for="search" />
        <input
          id="search"
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search wastes"
          required
        />
        <input class="button" type="button" value="Search" />
      </div>
    </form>
  );
};

export default SearchBar;
