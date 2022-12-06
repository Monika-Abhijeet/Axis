import FunctionCounter from "./components/FunctionCounter/FunctionCounter";
import ClassCounter from "./components/ClassCounter/ClassCounter";
import ArrowFuncDemo from "./components/ClassCounter/ArrowFuncDemo/ArrowFuncDemo";
import UseEffectDemo from "./components/UseEffectDemo/UseEffectDemo";
import UserList from "./components/UsersList/UsersList";
function App() {
  return (
    <div className="App">
      <h1>Hi everyone</h1>
      <FunctionCounter
        name="Function Counter Demo"
        subtitle="hello world"
      ></FunctionCounter>
      {/* <ClassCounter title="class counter"></ClassCounter> */}
      {/* <ArrowFuncDemo></ArrowFuncDemo>
      <UseEffectDemo></UseEffectDemo> */}
      <UserList></UserList>
    </div>
  );
}

export default App;
