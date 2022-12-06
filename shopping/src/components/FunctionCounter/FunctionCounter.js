import { useState } from "react";
import "./FunctionCounter.css";

function FunctionCounter(props) {
  // this.state = {
  // count:0
  // }

  const [count, setCount] = useState(0);
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function incrementCount() {
    setCount(count + 1);
  }
  const decrementCount = () => {
    setCount(count - 1);
  };

  function changeName(event) {
    setName(event.target.value);
  }

  function changeFirstName(event) {
    setName({ ...name, firstName: event.target.value });
  }
  function changeLastName(event) {
    setName({ ...name, lastName: event.target.value });
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
      FirstName
      <input
        type="text"
        value={name.firstName}
        onChange={(event) => {
          changeFirstName(event);
        }}
      />
      lastName
      <input
        type="text"
        value={name.lastName}
        onChange={(event) => {
          changeLastName(event);
        }}
      />
      <p>First name is {name.firstName}</p>
      <p>last name is {name.lastName}</p>
    </div>
  );
}

export default FunctionCounter;
