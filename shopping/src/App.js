import FunctionCounter from "./components/FunctionCounter/FunctionCounter";
import ClassCounter from "./components/ClassCounter/ClassCounter";
import ArrowFuncDemo from "./components/ClassCounter/ArrowFuncDemo/ArrowFuncDemo";
import UseEffectDemo from "./components/UseEffectDemo/UseEffectDemo";
import UserList from "./components/UsersList/UsersList";
import UserDetails from "./components/UsersList/UserDetails/UserDetails";
import Listing from "./components/RoutingDemo/Listing";
import About from "./components/RoutingDemo/About";
import Career from "./components/RoutingDemo/Career";
import Contact from "./components/RoutingDemo/Contact";
import Home from "./components/RoutingDemo/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hi everyone</h1>
      {/* <FunctionCounter
        name="Function Counter Demo"
        subtitle="hello world"
      ></FunctionCounter>
      <ClassCounter title="class counter"></ClassCounter> */}
      {/* <UseEffectDemo></UseEffectDemo> */}
      {/* <UserList></UserList> */}
      {/* <Listing></Listing>
      <Home></Home>
      <About></About>
      <Career></Career>
      <Contact></Contact> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listing />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/arrow" element={<ArrowFuncDemo />}></Route>
          <Route path="/user" element={<UserList />}></Route>
          <Route path="/user/:id" element={<UserDetails />}></Route>

          <Route
            path="/funcCounter"
            element={
              <FunctionCounter
                name="Function Counter Demo"
                subtitle="hello world"
              ></FunctionCounter>
            }
          ></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
