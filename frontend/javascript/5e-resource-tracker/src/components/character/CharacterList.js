import React from "react";

import CharacterInfoToolbar from "./CharacterInfoToolbar";

function CharacterList(props) {
  const [nameFilter, setNameFilter] = React.useState("");

  const filteredCharacters = props.characters.filter((character) => {
    if (nameFilter) return character.name.includes(nameFilter);
    else return true;
  });

  return (
    <div>
      <div>
        <input
          type="search"
          id="nameSearch"
          name="nameSearch"
          className="form-control"
          placeholder="Buscar por nome"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        ></input>{" "}
      </div>
      <ul className="list-group">
        {filteredCharacters.map((character) => (
          <li
            id={character.id}
            key={character.id}
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <CharacterInfoToolbar character={character}></CharacterInfoToolbar>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
