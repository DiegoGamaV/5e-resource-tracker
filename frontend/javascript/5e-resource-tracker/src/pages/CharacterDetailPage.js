import React from "react";

import { useParams } from "react-router-dom";

//import ClassHeader from "../components/class/ClassHeader";
import CharacterToolbar from "../components/character/detail/CharacterToolbar";
import ClassLevel from "../components/class/ClassLevel";

import { defaultCharacter } from "../data/default";
import {
  formatAbilitiesByLevel,
  getLevelOfFirstSubclassAbility,
} from "../utils/abilityClassUtils";

function CharacterDetailPage(props) {
  const { id } = useParams();
  const [character, setCharacter] = React.useState(defaultCharacter);
  const [classList, setClassList] = React.useState([]);
  const [subclassList, setSubclassList] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/characters/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setCharacter(response);
      })
      .catch((error) => console.log(error));
  }, [id]);

  React.useEffect(() => {
    fetch("http://localhost:3001/classes/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setClassList(response);
      })
      .catch((error) => console.log(error));
  }, [id]);

  React.useEffect(() => {
    fetch(
      "http://localhost:3001/classes/" + character.class.id + "/subclasses",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setSubclassList(response);
      })
      .catch((error) => console.log(error));
  }, [character.class.id]);

  function changeName(newName) {
    setCharacter({ ...character, name: newName });
  }

  function changeClass(classIndex) {
    const classInfo = classList[classIndex];

    setCharacter({ ...character, class: classInfo, specialization: undefined });
  }

  function changeLevel(newLevel) {
    const specializationLevel = getLevelOfFirstSubclassAbility(
      character.class.abilities
    );

    if (newLevel >= specializationLevel && !character.specialization) {
      setCharacter({
        ...character,
        level: newLevel,
        resourceAmount: character.class.resourceAmountByLevelList[newLevel - 1],
        specialization: subclassList[0],
      });
    } else if (newLevel < specializationLevel) {
      setCharacter({
        ...character,
        level: newLevel,
        resourceAmount: character.class.resourceAmountByLevelList[newLevel - 1],
        specialization: undefined,
      });
    } else {
      setCharacter({
        ...character,
        level: newLevel,
        resourceAmount: character.class.resourceAmountByLevelList[newLevel - 1],
      });
    }
  }

  function changeSubclass(subclassIndex) {
    const subclass = subclassList[subclassIndex];

    setCharacter({ ...character, specialization: subclass });
  }

  function changeResourceAmount(cost) {
    if (character.resourceAmount < cost)
      alert("Você não tem " + character.class.resourceName + " suficientes");
    else
      setCharacter({
        ...character,
        resourceAmount: character.resourceAmount - cost,
      });
  }

  function updateCharacter(event) {
    const updatedCharacter = {
      name: character.name,
      level: character.level,
      classId: character.class.id,
      specializationId: character.specialization.id,
    };

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCharacter),
    };

    fetch("http://localhost:3001/characters/" + id, requestOptions)
      .then((res) => {
        if (res.ok) alert("Personagem atualizado!");
        else alert("Falha na requisição");
        return res.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert("Ocorreu um erro no envio");
        console.log(error);
      });

    event.preventDefault();
  }

  const abilitiesByLevel = formatAbilitiesByLevel(
    character.class.abilities,
    character.specialization
  );

  return (
    <>
      <CharacterToolbar
        name={character.name}
        onChangeName={changeName}
        class={character.class}
        onChangeClass={changeClass}
        classes={classList}
        level={character.level}
        onChangeLevel={changeLevel}
        subclass={character.specialization}
        onChangeSubclass={changeSubclass}
        subclasses={subclassList}
        resourceName={character.class.resourceName}
        resourceAmount={character.resourceAmount}
        resourceAmountByLevel={character.class.resourceAmountByLevelList}
        onSaveChanges={updateCharacter}
      ></CharacterToolbar>
      <hr></hr>
      <ul>
        {Object.keys(abilitiesByLevel)
          .filter((abilityLevel) => abilityLevel <= character.level)
          .map((abilityLevel) => (
            <ClassLevel
              key={abilityLevel}
              level={abilityLevel}
              abilities={abilitiesByLevel[abilityLevel]}
              useAbility={changeResourceAmount}
              resourceName={character.class.resourceName}
            ></ClassLevel>
          ))}
      </ul>
    </>
  );
}

export default CharacterDetailPage;
