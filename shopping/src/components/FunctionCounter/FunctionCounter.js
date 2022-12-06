import { useState } from "react";

function FunctionCounter(props) {
  const [count, setCount] = useState(100);
  return (
    <div>
      <h1> {props.name}</h1>
      <h3>{props.subtitle}</h3>
      <h3>{count}</h3>
    </div>
  );
}

export default FunctionCounter;
