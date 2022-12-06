import { useState } from "react";
import "./FunctionCounter.css";

function FunctionCounter(props) {
  // this.state = {
  // count:0
  // }

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  function incrementCount() {
    setCount(count + 1);
  }
  const decrementCount = () => {
    setCount(count - 1);
  };

  function changeName(event) {
    setName(event.target.value);
  }
  return (
    <div className="function-counter-wrapper">
      <h1> {props.name}</h1>
      <h3>{props.subtitle}</h3>
      {/* <h3>{this.state.count} */}
      <h3>{count}</h3>
      <button onClick={() => incrementCount()}>Increment</button>
      {/* <button onClick={() => decrementCount()}>Decrement</button> */}
      <button onClick={decrementCount}>Decrement</button>

      <input
        type="text"
        value={name}
        onChange={(event) => {
          changeName(event);
        }}
      />
      <p>Name is {name}</p>
    </div>
  );
}

export default FunctionCounter;
