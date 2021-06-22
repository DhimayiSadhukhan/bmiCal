import React, { useState } from "react";
import ReactDom from "react-dom";
import DeleteIcon from "@material-ui/icons/Delete";

function Record(props) {
  return (
    <div className="record">
      <p>Height = {props.height}</p>
      <p>Weight = {props.weight}</p>
      <p>bmi = {Math.round(props.weight / (props.height * props.height))}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Record;
