import React from "react";
import { Link } from "react-router-dom";

function CharacterInfoToolbar(props) {
  const redirectLink = "/character/" + props.character.id;

  return (
    <div>
      <span>{props.character.name} - </span>
      <span>
        <span>{props.character.class.name}</span>
        {props.character.specialization ? (
          <span> ({props.character.specialization.name})</span>
        ) : (
          <></>
        )}
      </span>
      <span> - {props.character.level} </span>
      <Link to={redirectLink}>
        <button type="button">Abrir</button>
      </Link>
    </div>
  );
}

export default CharacterInfoToolbar;
