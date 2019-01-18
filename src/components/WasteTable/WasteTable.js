import React from "react";
import PropTypes from "prop-types";
import WasteItem from "./WasteItem";
import "./WasteTable.scss";

const WasteTable = props => {
  const { items, caption, favoriteItem } = props;
  const results = [];
  if (items) {
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
  }
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
  items: PropTypes.array.isRequired,
  caption: PropTypes.string,
  favoriteItem: PropTypes.func
};

WasteTable.defaultProps = {
  caption: "Search Results",
  favoriteItem: null
};

export default WasteTable;
