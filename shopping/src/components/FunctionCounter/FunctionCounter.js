import { useState } from "react";
import "./FunctionCounter.css";

function FunctionCounter(props) {
  // this.state = {
  // count:0
  // }

  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className="function-counter-wrapper">
      <h1> {props.name}</h1>
      <h3>{props.subtitle}</h3>
      {/* <h3>{this.state.count} */}
      <h3>{count}</h3>

      <button onClick={() => incrementCount()}>Increment</button>
    </div>
  );
}

export default FunctionCounter;
