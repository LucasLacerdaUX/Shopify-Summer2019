import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as StarIcon } from "./Star.svg";
import "./WasteItem.scss";

const WasteItem = props => {
  const { id, title, body, favourited, favoriteItem } = props;
  const ariaLabel = favourited ? "Remove from Favourites" : "Add to Favourites";
  const classNames = favourited ? "favButton favourited" : "favButton";
  return (
    <tr>
      <td className="star">
        <button
          className={classNames}
          onClick={() => favoriteItem(id)}
          aria-pressed={favourited}
          aria-label={ariaLabel}
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
  /** Unique id to identify the waste item. It's used as an argument for the favoriteItem function. */
  id: PropTypes.number,
  /** Title of the waste item. */
  title: PropTypes.string,
  /** Body of the waste item (HTML allowed). Usually contains instructions on how to discard the item. */
  body: PropTypes.string,
  /** Is the item in the favourite list? */
  favourited: PropTypes.bool,
  /** Function to handle the favourite action of any WasteItem inside this table. Usually passed through WasteTable.  */
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
