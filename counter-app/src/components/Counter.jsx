import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const [prevCount, setprevCount] = useState(0);
    const isEven = count % 2 === 0;

    //code for increasing numbers
    const increment = () => {
        setprevCount(count)
        setCount(count + 1);
    } 
    //code for decreasing numbers
    const decrement = () => {
        setprevCount(count)
        setCount(count - 1);
    } 
    //code to reset to 0
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

        {/*code to check either even or odd*/}
          {isEven ? "Even" : "Odd"}

    </div>
  )
}

export default Counter;
