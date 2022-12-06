import FunctionCounter from "./components/FunctionCounter/FunctionCounter";
import ClassCounter from "./components/ClassCounter/ClassCounter";
import ArrowFuncDemo from "./components/ClassCounter/ArrowFuncDemo/ArrowFuncDemo";
function App() {
  return (
    <div className="App">
      <h1>Hi everyone</h1>
      <FunctionCounter
        name="Function Counter Demo"
        subtitle="hello world"
      ></FunctionCounter>
      <ClassCounter title="class counter"></ClassCounter>
      <ArrowFuncDemo></ArrowFuncDemo>
    </div>
  );
}

export default App;
