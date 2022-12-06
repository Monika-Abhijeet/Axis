import FunctionCounter from "./components/FunctionCounter/FunctionCounter";
import ClassCounter from "./components/ClassCounter/ClassCounter";
function App() {
  return (
    <div className="App">
      <h1>Hi everyone</h1>
      <FunctionCounter
        name="Function Counter Demo"
        subtitle="hello world"
      ></FunctionCounter>
      <ClassCounter title="class counter"></ClassCounter>
    </div>
  );
}

export default App;
