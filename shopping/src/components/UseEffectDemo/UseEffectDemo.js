import { useState, useEffect } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("use effect called");
  }, [count, count2]);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const incrementCount2 = () => {
    setCount2(count2 + 1);
  };
  return (
    <div>
      <h1>Use effect demo</h1>
      <p>Count1: {count}</p>
      <p>Count2: {count2}</p>

      <button onClick={() => incrementCount()}>Increment</button>
      <button onClick={() => incrementCount2()}>Increment 2</button>
    </div>
  );
}
export default UseEffectDemo;
