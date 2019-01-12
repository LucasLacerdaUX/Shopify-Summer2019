import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = props => {
  const { title } = props;
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: "Toronto Waste Lookup"
};

export default Header;
