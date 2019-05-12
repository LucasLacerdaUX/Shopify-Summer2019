import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = props => {
  const { title } = props;
  return (
    <header className="header" role="banner">
      <h1>{title}</h1>
    </header>
  );
};

Header.propTypes = {
  /** The title displayed as an h1 tag inside the header component. */
  title: PropTypes.string
};

Header.defaultProps = {
  title: "Toronto Waste Lookup"
};

export default Header;
