import React from "react";
import PropTypes from "prop-types";
import "./SearchBar.scss";
import { ReactComponent as SearchIcon } from "./Search.svg";

const SearchBar = props => {
  const {
    searchValue,
    labelInput,
    labelSubmit,
    handleChange,
    handleSubmit
  } = props;
  return (
    <form onSubmit={handleSubmit} className="searchForm" role="search">
      <input
        id="searchInput"
        className="searchInput"
        type="text"
        value={searchValue}
        onChange={handleChange}
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
  searchValue: PropTypes.string,
  labelInput: PropTypes.string,
  labelSubmit: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
  searchValue: "",
  labelInput: "Search Wastes",
  labelSubmit: "Search"
};

export default SearchBar;
