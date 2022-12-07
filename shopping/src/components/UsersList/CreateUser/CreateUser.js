import React from "react";
import { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  function setFirstName(e) {
    setUser({ ...user, firstName: e.target.value });
  }

  function postUser(e) {
    e.preventDefault();
    console.log(user);
    axios
      .post("https://jsonplaceholder.typicode.com/users", user)
      .then((response) => {
        console.log(response.data);
      });
  }
  return (
    <div>
      <form>
        <div>
          <label>firstName</label>
          <input
            type="text"
            value={user.firstName}
            onChange={(e) => {
              setFirstName(e);
            }}
            // onChange={(e) => {
            //   setUser({ ...user, firstName: e.target.value });
            // }}
          />
        </div>
        <div>
          <label>lastName</label>
          <input
            type="text"
            value={user.lastName}
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>
        <div>
          <label>phoneNumber</label>
          <input
            type="text"
            value={user.phoneNumber}
            onChange={(e) => {
              setUser({ ...user, phoneNumber: e.target.value });
            }}
          />
        </div>
        <button onClick={(e) => postUser(e)}>Post</button>
      </form>
    </div>
  );
};

export default CreateUser;
