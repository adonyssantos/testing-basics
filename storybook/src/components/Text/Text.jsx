import React from "react";
import styles from "./styles";

export default function Text({
  children: text,
  color = "#213547",
  element = "p",
  ...rest
}) {
  const Element = React.createElement(
    element,
    {
      style: {
        ...styles[element],
        fontFamily: "Roboto, sans-serif",
        color,
      },
      ...rest,
    },
    text
  );

  return Element;
}
