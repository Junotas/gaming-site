import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to the Game Library</h1>
      <div className="button-grid">
        <Link to="/game1">
          <button>Game 1</button>
        </Link>
        <Link to="/game2">
          <button>Game 2</button>
        </Link>
        <Link to="/game3">
          <button>Game 3</button>
        </Link>
        {/* Add more buttons as needed */}
      </div>
    </div>
  );
};

export default Home;
