import { useState } from 'react';
import './App.css';

function App() {
const[count,setCount] = useState(0);

// const handleAdd = () => {
//   setCount(count+1);
// }
const handleSub = () => {
  setCount(prevState => prevState - 1);
  setCount(count-1);
}


  return (
    <div className="App">
      <button onClick={handleSub}>Click me</button>
      <h1>{count}</h1>
     <button onClick={() => setCount(prevState => prevState + 1)}>Click me</button>
    </div>
  );
}

export default App;
