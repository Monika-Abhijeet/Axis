import { Link } from "react-router-dom";

function Listing() {
  return (
    <div>
      <h1>Listing page</h1>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}

export default Listing;
