import React from "react";
import { Link } from "react-router-dom";

function CharacterInfoToolbar(props) {
  const redirectLink = "/character/" + props.character.id;

  return (
    <div className="card w-75">
      <div className="card-body">
        <h5 className="card-title">{props.character.name}</h5>
        <p className="card-text">
          <b>{props.character.class.name}</b> de{" "}
          <b>nível {props.character.level} </b>
          {props.character.specialization ? (
            <span>
              {" "}
              especializado(a) em <b>{props.character.specialization.name}</b>
            </span>
          ) : (
            <></>
          )}
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

export default CharacterInfoToolbar;
