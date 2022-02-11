import React, {useState} from 'react';
import Input from './Input';
import './style.css';

function App() {
   const [firstInput , setFirstInput] = useState('');
   const [secondInput , setSecondInput] = useState('');
   const [thirdInput , setThirdInput] = useState('');
   const [forthInput , setForthInput] = useState('');

   return (
      <div className='App'>
         <Input
         setInputValue = {setFirstInput}
         inputValue = {firstInput}
         inputType = "text"
         />
         <Input
         setInputValue = {setSecondInput}
         inputValue = {secondInput}
         inputType = "number"
         />
         <Input
         setInputValue = {setThirdInput}
         inputValue = {thirdInput}
         inputType = "password"
         />
         <Input
         setInputValue = {setForthInput}
         inputValue = {forthInput}
         inputType = "range"
         />
         <div>
            <p>First input : {firstInput}</p>
            <p>Second input : {secondInput}</p>
            <p>Third input : {thirdInput}</p>
            <p>Forth input : {forthInput}</p>
         </div>
      </div>
      
   )
}

export default App;