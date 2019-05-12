import React from "react";
import PropTypes from "prop-types";
import "./StateInfo.scss";

const StateInfo = props => {
  const { title, children, icon } = props;
  return (
    <div className="StateInfo" role="region" aria-live="polite">
      {icon}
      <h2>{title}</h2>
      {children}
    </div>
  );
};

StateInfo.propTypes = {
  /** Add an icon component or any other component to visually describe the state. Shown before the title. */
  icon: PropTypes.node,
  /** Title of the state component. */
  title: PropTypes.string,
  /** Add text explaining the current state or any other component/HTML code. Shown after the title. */
  children: PropTypes.node
};

StateInfo.defaultProps = {
  icon: null,
  title: "",
  children: null
};

export default StateInfo;
