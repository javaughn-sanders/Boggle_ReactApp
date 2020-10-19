import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import './Input.css';

function Input({allSolutions, foundSolutions, correctAnswerCallback}) {

  const [labelText, setLabelText] = useState("Make your first guess!");
  const [Input, setInput] = useState("");

  function evaluateInput() {
    if (foundSolutions.includes(Input)) {
      setLabelText(Input + " has already been found!");
    } else if (allSolutions.includes(Input)) {
      correctAnswerCallback(Input);
      setLabelText(Input + " is correct!");
    } else {
      setLabelText(Input + " is incorrect!");
    }
  }

  function keyPress(e) {
    if (e.key === 'Enter') {
      evaluateInput()
    }
  }

  return (
    <div className="Guess-Input">
      <div>
        {labelText}
      </div>
      <TextField onKeyPress={(e) => keyPress(e)} onChange={(event) => setInput(event.target.value)} />
    </div>
  );
}

export default Input;
