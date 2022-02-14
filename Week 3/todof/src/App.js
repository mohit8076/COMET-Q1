import React from "react";
import "./App.css";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

function App() {
  const initialState = { text: "", key: "" };
  const [todo, setTodo] = React.useState([]);
  const [current, setCurrent] = React.useState(initialState);

  const addItem = (e) => {
    e.preventDefault();
    const newItem = current;
    if (newItem.text === "") return;
    setTodo((prevState) => [newItem, ...prevState]);
    setCurrent(initialState);
  };
  const handleInput = (e) => {
    setCurrent({
      text: e.target.value,
      key: Date.now(),
    });
  };

  const deleteItem = (key) => {
    const items = todo;
    const filteredItems = items.filter((item) => item.key !== key);
    setTodo(filteredItems);
  };

  const setUpdate = (text, key) => {
    const updatedTodo = [...todo];
    const item = updatedTodo.find((item) => item.key === key);
    item.text = text;
    setTodo(updatedTodo);
  };

  console.log("Todo state: ", todo);
  return (
    <div className="App">
      <header>
        <form id="to-do" onSubmit={addItem}>
          <input
            type="text"
            placeholder="Enter task"
            value={current.text}
            onChange={handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{todo.text}</p>
        <ListItems
          items={todo}
          deleteItem={deleteItem}
          updateItem={setUpdate}
        />
      </header>
    </div>
  );
}

export default App;
