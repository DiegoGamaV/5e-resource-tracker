import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      className="Header"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          5e Resource Tracker
        </a>
        <div class="btn-group" role="group">
          <Link to="/">
            <button class="btn btn-outline-primary" type="button">
              Home
            </button>
          </Link>
          <Link to="/character">
            <button class="btn btn-outline-primary" type="button">
              Personagens
            </button>
          </Link>
          <Link to="/class">
            <button class="btn btn-outline-primary" type="button">
              Classes
            </button>
          </Link>
        </div>
        <hr />
      </div>
    </nav>
  );
}

export default NavigationBar;
