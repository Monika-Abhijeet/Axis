import { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      name: "Monika",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.state.count}</p>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default ClassCounter;
