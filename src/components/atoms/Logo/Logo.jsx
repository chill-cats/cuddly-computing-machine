import React from "react";
import PropTypes from "prop-types";
const Logo = ({ children }) => {
  return <h1>{children}</h1>;
};

Logo.propTypes = {
  children: PropTypes.any
};

export default Logo;
