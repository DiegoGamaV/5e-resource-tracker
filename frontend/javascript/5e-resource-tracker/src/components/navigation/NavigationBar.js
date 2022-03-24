import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="Header">
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      <Link to="/character">
        <button type="button">Personagens</button>
      </Link>
      <Link to="/class">
        <button type="button">Classes</button>
      </Link>
      <hr />
    </div>
  );
}

export default NavigationBar;
