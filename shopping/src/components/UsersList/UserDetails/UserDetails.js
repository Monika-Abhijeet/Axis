import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function UserDetails() {
  // initialisation of params
  const params = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
  }, []);
  return (
    <div>
      <h1>User details of {params.id}</h1>
      <p>Name : {user.name}</p>
      <p>email : {user.email}</p>
      <p>Phone : {user.phone}</p>
      <p>Username : {user.username}</p>
      <p>website : {user.website}</p>
      <p>City : {user.address && user.address.city}</p>
    </div>
  );
}
export default UserDetails;
