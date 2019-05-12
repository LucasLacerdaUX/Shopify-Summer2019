import React from "react";
import PropTypes from "prop-types";
import WasteItem from "./WasteItem";
import "./WasteTable.scss";

const WasteTable = props => {
  const { items, caption, favoriteItem } = props;
  const results = [];
  items.forEach(item => {
    results.push(
      <WasteItem
        key={item.id}
        id={item.id}
        title={item.title}
        body={item.body}
        favourited={item.favourited}
        favoriteItem={favoriteItem}
      />
    );
  });
  return (
    <table>
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th scope="col">Favourite</th>
          <th scope="col">Waste</th>
          <th scope="col">Instructions</th>
        </tr>
      </thead>
      <tbody>{results}</tbody>
    </table>
  );
};

WasteTable.propTypes = {
  /** The list of waste items inside the table. */
  items: PropTypes.array.isRequired,
  /** A descriptive label for the table (for accessibility purposes). Visually hidden. */
  caption: PropTypes.string,
  /** Function to handle the favourite action of any WasteItem inside this table. */
  favoriteItem: PropTypes.func
};

WasteTable.defaultProps = {
  caption: "Search Results",
  favoriteItem: null
};

export default WasteTable;
