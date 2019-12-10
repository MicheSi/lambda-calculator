import React from "react";

const NumberButton = (props) => {
  const {number} = props;
  return (
    <div>
    <button className={number}>{number}</button>
    </div>
  );
};

export default NumberButton;
