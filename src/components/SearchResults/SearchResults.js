import React from "react";
import WasteItem from "../WasteItem/WasteItem";

const Search_Results = props => {
  const { items, favoriteItem } = props;
  const results = [];
  if (items) {
    Object.keys(items).forEach(element => {
      const item = items[element];
      results.push(
        <WasteItem
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
      <caption>Search Results</caption>
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

export default Search_Results;
