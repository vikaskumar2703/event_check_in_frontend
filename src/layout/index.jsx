import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Event Check In</h1>
      <p>Select Role:</p>
      <Link to="volunteer">
        <button>Volunteer</button>
      </Link>
      <br />
      <br />
      <Link to="admin-auth">
        <button>Admin</button>
      </Link>
    </div>
  );
}

export default Home;
