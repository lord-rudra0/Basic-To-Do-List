import React, { useState } from "react";
import ToDoList from "./ToDoList";
import InputArea from "./InputArea";

function App() {
  const [toList, setToList] = useState("")
  const [item, setItem] = useState([]);
  function AddList(e) {
    const todo = e.target.value;
    setToList(todo)
  }

  function deleteItem(id) {
    // console.log(id);
    setItem((prev) => {
      return prev.filter((item, index) => {
        return index !== id
      })
    })
  }

  function ItemInsert() {
    setItem((prev) => {
      return [...prev, toList]
    }
    );
    setToList("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" name="todo"
          value={toList} onChange={AddList} />
        <button type="submit"
          onClick={ItemInsert}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItem, index) => (
            <ToDoList id={index} text={todoItem} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
