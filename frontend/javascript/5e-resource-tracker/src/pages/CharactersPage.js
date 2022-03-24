import React from "react";

import CharacterCreationToolbar from "../components/character/CharacterCreationToolbar";
import CharacterList from "../components/character/CharacterList";
import NavigationBar from "../components/navigation/NavigationBar";

function CharactersPage() {
  const [characterList, setCharacterList] = React.useState([]);
  const [isCreating, setIsCreating] = React.useState(false);

  React.useEffect(() => {
    fetch("http://localhost:3001/characters/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setCharacterList(response);
      })
      .catch((error) => console.log(error));
  }, [setCharacterList.length]);

  function addCharacter(character) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(character),
    };

    fetch("http://localhost:3001/characters/", requestOptions)
      .then((res) => {
        if (res.ok) alert("Personagem criado!");
        else alert("Falha na requisição");
        console.log(res);
        return res.json();
      })
      .then((response) => {
        console.log(response);
        setCharacterList((characterList) => [...characterList, response]);
      })
      .catch((error) => {
        alert("Ocorreu um erro no envio");
        console.log(error);
      });
  }

  return (
    <>
      <NavigationBar />
      {isCreating ? (
        <>
          <div>
            <CharacterCreationToolbar
              addCharacterHook={addCharacter}
            ></CharacterCreationToolbar>
            <button onClick={() => setIsCreating(false)}>Fechar</button>
          </div>
          <br></br>
        </>
      ) : (
        <button onClick={() => setIsCreating(true)}>Criar Personagem</button>
      )}
      <CharacterList characters={characterList}></CharacterList>
    </>
  );
}

export default CharactersPage;
