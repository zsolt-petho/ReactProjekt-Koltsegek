import React from "react";

const Értesítés = ({ type, text }) => {
  return <div className={`alert alert-${type}`}>{text}</div>;
};

export default Értesítés;
