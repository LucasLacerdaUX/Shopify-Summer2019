import React from "react";

const WasteItem = props => {
  const { id, title, body, favourited, favoriteItem } = props;
  return (
    <tr>
      <td>
        <button
          onClick={() => favoriteItem(id)}
          style={{ backgroundColor: favourited ? "green" : "red" }}
        >
          Favourite
        </button>
      </td>
      <td>{title}</td>
      <td dangerouslySetInnerHTML={{ __html: body }} />
    </tr>
  );
};

export default WasteItem;
