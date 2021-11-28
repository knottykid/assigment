import React from "react";

const Greet = (name) => {
  if (!name) {
    return "Hello, my friend";
  }
  if (name === name.toUpperCase()) {
    return `Hello ${name}`.toUpperCase();
  }
  return `Hello, ${name}`;
};

export default Greet;
