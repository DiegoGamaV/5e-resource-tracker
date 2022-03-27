import React from "react";
import { Link } from "react-router-dom";

function ClassInfoToolbar(props) {
  const redirectLink = "/class/" + props.class.id;

  return (
    <div className="card w-75">
      <div className="card-body">
        <h5 className="card-title">{props.class.name}</h5>
        <p className="card-text">
          {" "}
          Tem {props.class.abilityIdCounter} habilidades relevantes que utilizam
          seus {props.class.resourceName}. Especializa-se em{" "}
          {props.class.specializationName}
        </p>
        <Link to={redirectLink}>
          <button className="btn btn-primary" type="button">
            Abrir
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ClassInfoToolbar;
