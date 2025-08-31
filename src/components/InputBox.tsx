import React from 'react'

export default function InputBox() {

const [inputValue, setInputValue] = React.useState('')
const inputBox = React.useRef('7777');

  return (
    <>
    <p>{inputValue}</p>
    <input type='text'  placeholder='enter your name' value={inputValue} onChange={(e) => setInputValue(e.target.value)} ></input>
    <br />
    <button onClick={()=> setInputValue("")}>clear value</button>

    <p>--------------------------------------</p>
      <p>{inputBox.current}</p>
    <input type='text'  placeholder='enter your phone' value={inputBox.current} onChange={(e) => inputBox.current=(e.target.value)} ></input>
  {console.log(inputBox.current)}
    <br />
    <button onClick={()=> {console.log(inputBox.current);inputBox.current=("");}}>clear phone
   
    </button>
    </>
  )
}
