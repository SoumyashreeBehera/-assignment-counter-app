import React, { useState } from "react";

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  function handleButton(e) {
    setCount(count + e);
  }
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => handleButton(1)}>Add 1</button>
      <button onClick={() => handleButton(-1)}>Decrease 1</button>
      <button onClick={() => handleButton(count)}>Make it Double</button>
    </div>
  );
}

export default Counter;
