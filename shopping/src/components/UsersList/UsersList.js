import { useEffect, useState } from "react";
import axios from "axios";
function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  function postUserData() {
    let requestBody = {
      name: "Monika",
      username: "monu",
      email: "monu@gmail.com",
    };
    axios
      .post("https://jsonplaceholder.typicode.com/users", requestBody)
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
          <p>
            {user.name} - {user.email}
          </p>
        );
      })}
    </div>
  );
}

export default UserList;
