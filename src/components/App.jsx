import React, { useState } from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import InputArea from "./InputArea";
import Record from "./Record";
import "../styles.css";

function App() {
  const [list, setList] = useState([]);
  function handleAdd(item) {
    setList((prev) => [...prev, item]);
  }
  function handleDelete(id) {
    setList((prev) => {
      return prev.filter((record, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <InputArea onAdd={handleAdd} />
      {list.map((item, index) => {
        return (
          <Record
            key={index}
            id={index}
            height={item.height}
            weight={item.weight}
            onDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default App;
