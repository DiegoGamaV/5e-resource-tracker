import React from "react";
import { Link } from "react-router-dom";

function ClassInfoToolbar(props) {
  const redirectLink = "/class/" + props.class.id;

  return (
    <div>
      <span>{props.class.name}</span>
      <span> - {props.class.abilityIdCounter} habilidades </span>
      <span> - Usa {props.class.resourceName} </span>
      <span> - Especializa-se em {props.class.specializationName} </span>
      <Link to={redirectLink}>
        <button type="button">Abrir</button>
      </Link>
    </div>
  );
}

export default ClassInfoToolbar;
