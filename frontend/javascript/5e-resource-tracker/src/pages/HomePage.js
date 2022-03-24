import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <span>
        <Link to="/character">
          <button type="button">Personagens</button>
        </Link>
        <Link to="/class">
          <button type="button">Classes</button>
        </Link>
      </span>
    </div>
  );
}

export default HomePage;
