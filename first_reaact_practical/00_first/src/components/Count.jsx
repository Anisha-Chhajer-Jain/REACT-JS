import React from 'react'
import { useState} from 'react';
import "./count.css"

function Count() {
    var[count,setCount] = useState(0);
      var[msg,setMsg]=useState("Before Click me btn is hitted");
    
      function handleClick() {
        setCount(++count);
        setMsg("After btn hitted msg got change")
      }
  return (
    <div>
      <p>Count: {count}</p>
      <p>{msg}</p>
      <button type="button" onClick={handleClick}>Click me</button>
    </div>
  )
}
export default Count