import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import SearchBar from ".";

/*  searchValue: PropTypes.string,
  labelInput: PropTypes.string,
  labelSubmit: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
  */

storiesOf("SearchBar", module).add("default", () => (
  <SearchBar
    initialValue={text("Initial Value", "takeout")}
    labelInput={text("Accessible Label (Input)", "Search Wastes")}
    labelSubmit={text("Acessible Label (Button)", "Search")}
    handleSubmit={value => {
      console.log(value);
    }}
  />
));
