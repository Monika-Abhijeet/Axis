import { useEffect, useState } from "react";
import axios from "axios";
function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  function postUserData() {
    let requestBody = {
      name123: "Monika",
      username: "monu",
      email: "monu@gmail.com",
    };
    axios
      .post("https://jsonplaceholder.typicode.com/users", requestBody)
      .then((response) => {
        console.log(response);
      });
  }

  function updateUser(id) {
    let requestBody = {
      name: "Monika",
      username: "monu",
    };
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, requestBody)
      .then((response) => {
        console.log(response);
      });
  }

  function deleteUser(id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <div>
      <h1>Post request</h1>
      <button
        onClick={() => {
          postUserData();
        }}
      >
        Post
      </button>
      <h1>User List</h1>
      {users.map((user) => {
        return (
          <p key={user.id}>
            {user.id} - {user.name} - {user.email}{" "}
            <button onClick={() => updateUser(user.id)}>Update</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </p>
        );
      })}
    
    </div>
  );
}

export default UserList;
