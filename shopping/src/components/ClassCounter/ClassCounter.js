import { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      name: "Monika",
    };
  }

  componentDidMount() {
    console.log("page loaded");
  }
  shouldComponentUpdate() {
    console.log("should component update called");
    return false;
  }
  componentDidUpdate() {
    console.log("component updated");
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.state.count}</p>
        <p>{this.state.name}</p>
        <p>First name is {}</p>
        <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}

export default ClassCounter;
