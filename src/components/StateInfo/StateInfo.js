import React from "react";
import PropTypes from "prop-types";
import "./StateInfo.scss";

const StateInfo = props => {
  const { title, children, icon } = props;
  return (
    <div className="EmptyLoading" role="region" aria-live="polite">
      {icon}
      <h3>{title}</h3>
      {children}
    </div>
  );
};

StateInfo.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node
};

StateInfo.defaultProps = {
  icon: null,
  title: "",
  children: null
};

export default StateInfo;
