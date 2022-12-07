import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function UserDetails() {
  // initialisation of params
  const params = useParams();
  const [user, setUser] = useState({});
  const [person, setPerson] = useState({ name: "", email: "", age: "" });
  console.log(params.id);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
  }, [params.id]);

  function sendDetails(e) {
    e.preventDefault();
    console.log(person);
  }
  return (
    <div>
      <h1>User details of {params.id}</h1>
      <p>Name : {user.name}</p>
      <p>email : {user.email}</p>
      <p>Phone : {user.phone}</p>
      <p>Username : {user.username}</p>
      <p>website : {user.website}</p>
      <p>City : {user.address && user.address.city}</p>
      <form>
        <input
          type="text"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
        />
        <input
          type="text"
          value={person.email}
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
        />
        <input
          type="text"
          value={person.age}
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
        />
        <button onClick={sendDetails}>Send</button>
      </form>
    </div>
  );
}
export default UserDetails;
