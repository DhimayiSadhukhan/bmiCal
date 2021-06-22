import React, { useState } from "react";
import ReactDom from "react-dom";

function InputArea(props) {
  const [input, setInput] = useState({
    height: "",
    weight: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function handleClick() {
    props.onAdd(input);
    setInput({
      height: "",
      weight: ""
    });
  }
  return (
    <div className="inputbox">
      <input
        name="height"
        value={input.height}
        placeholder="enter height in cm"
        onChange={handleChange}
      />
      <br />
      <input
        name="weight"
        value={input.weight}
        placeholder="enter weight in kg"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleClick}>Click to know BMI</button>
    </div>
  );
}

export default InputArea;
