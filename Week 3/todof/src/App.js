import React, {useEffect, useState} from 'react';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

function App() {
  const initialState = {text:'',key:''}
  const[todo,setTodo] = useState([])
  const[current,setCurrent] = useState(initialState);
  // const[update,setUpdate] = useState([]);

  const addItem = (e) =>{
    e.preventDefault();
    const newItem = current;
    if(newItem.text ==="")
      return;
    setTodo(prevState => [...prevState,newItem] )
    setCurrent(initialState)
  }
  console.log(todo,"-----todo");
  const handleInput = (e) =>{
    setCurrent({
      text: e.target.value,
      key : Date.now()
    })
  }
  console.log(current);

  
  const deleteItem = (key) =>{
    const items = todo;
    const filteredItems= items.filter(item =>
      item.key!==key);
    setTodo(
     filteredItems
    )
  }
  return (
    <div className="App">
      <header>
        <form id="to-do" onSubmit={addItem}>
          <input type="text" placeholder="Enter task" value = {current.text} onChange={handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{todo.text}</p>
        
          <ListItems items={todo} deleteItem={deleteItem} />
          {/* <ListItems items={todo} setUpdate={setUpdate}/> */}
          {/* <ListItems items={todo} /> */}
        
      </header>
    </div>
  );
}


export default App;