import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <div>
      <span>Count = {count}</span>
      <button type="button" onClick={handleClick}>
        Increase Count
      </button>
    </div>
  );
};

export default Counter;
