import React from "react";

import defaultClass from "../../data/default";
import { getLevelOfFirstSubclassAbility } from "../../utils/abilityClassUtils";

function CharacterCreationToolbar() {
  const levelOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const [classList, setClassList] = React.useState([]);
  const [subclassList, setSubclassList] = React.useState([]);

  const [name, setName] = React.useState("");
  const [currentClass, setCurrentClass] = React.useState(defaultClass);
  const [currentSubclass, setCurrentSubclass] = React.useState(undefined);
  const [currentLevel, setCurrentLevel] = React.useState(1);

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
        if (response) setCurrentClass(response[0]);
      })
      .catch((error) => console.log(error));
  }, [classList.length]);

  React.useEffect(() => {
    fetch("http://localhost:3001/classes/subclasses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setSubclassList(
          response.map((subclass) => ({
            id: subclass.id,
            name: subclass.name,
            classId: subclass.classId,
          }))
        );
      })
      .catch((error) => console.log(error));
  }, [classList.length]);

  function handleOnSelectClass(selectedClassId) {
    const selectedClass = classList.find(
      (classInfo) => classInfo.selectedClassId
    );

    setCurrentClass(selectedClass);
  }

  function handleOnSelectSubclass(selectedSubclassId) {
    const selectedSubclass = subclassList.find(
      (subclass) => subclass.selectedSubclassId
    );

    setCurrentSubclass(selectedSubclass);
  }

  function handleOnSelectLevel(newLevel) {
    setCurrentLevel(newLevel);

    if (newLevel >= getLevelOfFirstSubclassAbility(currentClass.abilities))
      setCurrentSubclass(subclassList[0]);
  }

  function IsItTimeToSpecialize() {
    const specializationLevel = getLevelOfFirstSubclassAbility(
      currentClass.abilities
    );

    if (specializationLevel >= 1) return currentLevel >= specializationLevel;
    else return false;
  }

  function createCharacter(event) {
    if (!name) alert("Nome precisa estar preenchido");
    else {
      const character = {
        name: name,
        level: currentLevel,
        classId: currentClass.id,
      };

      if (currentSubclass) character.specializationId = currentSubclass.id;

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(character),
      };

      fetch("http://localhost:3001/characters/", requestOptions)
        .then((response) => {
          if (response.ok) alert("Personagem criado!");
          else alert("Falha na requisição");
        })
        .catch((error) => {
          alert("Ocorreu um erro no envio");
          console.log(error);
        });
    }

    event.preventDefault();
  }

  return (
    <>
      <div>
        <form onSubmit={createCharacter}>
          <span>
            <label for="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </span>
          <span>
            <label for="classes">Classe</label>
            <select
              name="classes"
              id="classes"
              onChange={(e) => handleOnSelectClass(parseInt(e.target.value))}
            >
              {classList.map((classInfo) => {
                return (
                  <option key={classInfo.id} value={classInfo.id}>
                    {classInfo.name}
                  </option>
                );
              })}
            </select>
          </span>
          <span>
            <label for="level">Nível</label>
            <select
              name="level"
              id="level"
              onChange={(e) => handleOnSelectLevel(parseInt(e.target.value))}
            >
              {levelOptions.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </span>
          {IsItTimeToSpecialize() ? (
            <span>
              <label for="subclasses">
                {currentClass.specializationName
                  ? currentClass.specializationName
                  : "Subclasse"}
              </label>
              <select
                name="subclasses"
                id="subclasses"
                onChange={(e) =>
                  handleOnSelectSubclass(parseInt(e.target.value))
                }
              >
                {subclassList.map((subclass) => {
                  return (
                    <option key={subclass.id} value={subclass.id}>
                      {subclass.name}
                    </option>
                  );
                })}
              </select>
            </span>
          ) : (
            <></>
          )}
          <span>
            <input id="createCharacter" type="submit" value="Criar"></input>
          </span>
        </form>
      </div>
    </>
  );
}

export default CharacterCreationToolbar;
