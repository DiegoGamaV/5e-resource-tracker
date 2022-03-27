import React from "react";
import { Link } from "react-router-dom";

function ClassInfoToolbar(props) {
  const redirectLink = "/class/" + props.class.id;

  return (
    <div class="card w-75">
      <div class="card-body">
        <h5 class="card-title">{props.class.name}</h5>
        <p class="card-text">
          {" "}
          Tem {props.class.abilityIdCounter} habilidades relevantes que utilizam
          seus {props.class.resourceName}. Especializa-se em{" "}
          {props.class.specializationName}
        </p>
        <Link to={redirectLink}>
          <button class="btn btn-primary" type="button">
            Abrir
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ClassInfoToolbar;
