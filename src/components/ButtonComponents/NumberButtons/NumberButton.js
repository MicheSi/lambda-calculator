import React from "react";

const NumberButton = (props) => {
  return (
    <button className="number_button">
      {props.button.value}
    </button>
  );
};

export default NumberButton;
