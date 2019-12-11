import React from "react";

const NumberButton = (props) => {
  const {number} = props;

  return (
    <div>
    <button className='button numberBtn'
    onClick={props.showNumber}>{number}</button>
    </div>
  );
};

export default NumberButton;
