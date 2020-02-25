// @flow
import React from "react";

type Props = {
  content: String
};
const Logo = (props: Props) => {
  return <h1>{props.content}</h1>;
};

export default Logo;
