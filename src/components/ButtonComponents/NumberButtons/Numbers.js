import React, {useState} from "react";
//import any components needed
import NumberButton from './NumberButton';
import {numbers} from '../../../data';

// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div className="numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberState.map((number, index) => (
         <NumberButton key={index} number={number} showNumber={props.showNumber} />
       ))}
    </div>
  );
};

export default Numbers;
