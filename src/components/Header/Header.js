import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = props => {
  const { title } = props;
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: "Toronto Waste Lookup"
};

export default Header;
