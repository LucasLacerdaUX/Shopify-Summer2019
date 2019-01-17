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
    <form onSubmit={handleSubmit}>
      <div className="searchForm" role="search">
        <label id="searchLabel" className="searchLabel" htmlFor="search">
          {labelInput}
        </label>
        <input
          id="search"
          className="searchInput"
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search wastes"
          aria-labelledby="searchLabel"
          autoFocus
          required
        />
        <button className="searchButton" type="submit" value="Search">
          <span className="visually-hidden">{labelSubmit}</span>
          <SearchIcon />
        </button>
      </div>
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
