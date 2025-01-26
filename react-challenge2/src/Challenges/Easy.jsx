import React, { useState } from "react";

import "../App.css";
//import "../App.jsx";

export default function counter() {
  const [count, setCounter] = useState(0);

  const increment = () => {
    let sum = count + 1;
    setCounter(sum);
  };

  const decrement = () => {
    let sum = count - 1;
    setCounter(sum);
  };

  return (
    <div>
      <button className="button-box" onClick={increment}>Add</button>

      <h1>{count}</h1>

      <button className="button-box" onClick={decrement}>Subtract</button>
    </div>
  );
}

// export default counter;
