import React, { useState } from "react";

function App() {
  const [toList, setToList] = useState("")
  const [item, setItem] = useState([]);
  function AddList(e) {
    // console.log("added")
    const todo = e.target.value;
    console.log(todo)
    // console.log(setToList())
    // console.log(toList)

    setToList(todo)

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

          {item.map((item) => <li>{item}</li>)}

        </ul>
      </div>
    </div>
  );
}

export default App;
