import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as StarIcon } from "./Star.svg";
import "./WasteItem.scss";

const WasteItem = props => {
  const { id, title, body, favourited, favoriteItem } = props;
  return (
    <tr>
      <td className="star">
        <button
          className={favourited ? "favButton favourited" : "favButton"}
          onClick={() => favoriteItem(id)}
          aria-pressed={favourited}
          aria-label={
            favourited ? "Remove from Favourites" : "Add to Favourites"
          }
        >
          <StarIcon />
        </button>
      </td>
      <td className="title">{title}</td>
      <td className="body" dangerouslySetInnerHTML={{ __html: body }} />
    </tr>
  );
};

WasteItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  favourited: PropTypes.bool,
  favoriteItem: PropTypes.func
};

WasteItem.defaultProps = {
  id: 0,
  title: "",
  body: "",
  favourited: false,
  favoriteItem: null
};
export default WasteItem;
