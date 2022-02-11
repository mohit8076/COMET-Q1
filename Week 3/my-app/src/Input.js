import React from 'react'

const Input = ({inputType, inputValue, setInputValue}) => (
    <input
    type = {inputType}
    value = {inputValue}
    onChange = {e => setInputValue(e.target.value)}
    />
);
export default Input;