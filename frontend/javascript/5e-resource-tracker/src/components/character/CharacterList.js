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
        <label htmlFor="nameSearch">Pesquisar Por Nome</label>
        <input
          type="text"
          id="nameSearch"
          name="nameSearch"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        ></input>{" "}
      </div>
      <ul>
        {filteredCharacters.map((character) => (
          <li id={character.id} key={character.id}>
            <CharacterInfoToolbar character={character}></CharacterInfoToolbar>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
