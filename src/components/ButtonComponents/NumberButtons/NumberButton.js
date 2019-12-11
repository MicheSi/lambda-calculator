import React from "react";

const NumberButton = (props) => {
  const {number, showNumber} = props;
  

  return (
    <div>
    <button className='button numberBtn'
    onClick={() => showNumber(number)}>{number}</button>
    </div>
  );
};


export default NumberButton;
