import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter</h1>

      <h2 className="counter-value">{count}</h2>

      <button className="counter-button" onClick={decrease}>
        -
      </button>

      <button className="counter-button" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default Counter;