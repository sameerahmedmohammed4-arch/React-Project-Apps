import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const [prevCount, setprevCount] = useState(0);
    const isEven = count % 2 === 0;

    const increment = () => {
        setprevCount(count)
        setCount(count + 1);
    } 
    const decrement = () => {
        setprevCount(count)
        setCount(count - 1);
    } 
    const reset = () => {
        setprevCount(count)
        setCount(0);
    }
    
  return (
    <div>
          <h1>React Counter App</h1>
          <div className="container">{count}</div>
          <button id='btn1' onClick={decrement}>-</button>
          <button id='btn2' onClick={reset}>Reset</button>
          <button id='btn3' onClick={increment}>+</button>
          <p >Counter changed from {prevCount} to {count}</p>
          {isEven ? "Even" : "Odd"}

    </div>
  )
}

export default Counter;
