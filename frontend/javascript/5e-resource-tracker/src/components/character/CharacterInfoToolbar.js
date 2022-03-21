import React from "react";

function CharacterInfoToolbar(props) {
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
      <button onClick="">Abrir</button>
    </div>
  );
}

export default CharacterInfoToolbar;
