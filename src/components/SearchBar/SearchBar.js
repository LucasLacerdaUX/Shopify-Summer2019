import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchBar.scss";
import { ReactComponent as SearchIcon } from "./Search.svg";

const SearchBar = props => {
  const { labelInput, labelSubmit, initialValue, handleSubmit } = props;
  const [searchValue, setSearchValue] = useState(initialValue);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        handleSubmit(searchValue);
      }}
      className="searchForm"
      role="search"
    >
      <input
        id="searchInput"
        className="searchInput"
        type="text"
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
        placeholder="Search wastes"
        aria-label={labelInput}
        maxLength="100"
        autoFocus
      />
      <button
        className="searchButton"
        type="submit"
        aria-label={labelSubmit}
        value="Search"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  initialValue: PropTypes.string,
  labelInput: PropTypes.string,
  labelSubmit: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
  initialValue: "takeout",
  labelInput: "Search Wastes",
  labelSubmit: "Search"
};

export default SearchBar;
