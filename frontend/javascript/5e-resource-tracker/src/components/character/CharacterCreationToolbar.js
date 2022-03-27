import React from "react";

import { defaultClass } from "../../data/default";
import { getLevelOfFirstSubclassAbility } from "../../utils/abilityClassUtils";

function CharacterCreationToolbar(props) {
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
      (subclass) => subclass.id === selectedSubclassId
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

      props.addCharacterHook(character);
    }

    event.preventDefault();
  }

  return (
    <>
      <div>
        <form
          onSubmit={createCharacter}
          className="row gx-3 gy-2 align-items-center"
        >
          <div className="col-auto">
            <div className="input-group">
              <div className="input-group-text">Nome</div>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="col-auto">
            <div className="input-group">
              <label className="input-group-text">Classe</label>
              <select
                name="classes"
                id="classes"
                onChange={(e) => handleOnSelectClass(parseInt(e.target.value))}
                className="form-select"
              >
                {classList.map((classInfo) => {
                  return (
                    <option key={classInfo.id} value={classInfo.id}>
                      {classInfo.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="col-auto">
            <div className="input-group">
              <label className="input-group-text">Nível</label>
              <select
                name="level"
                id="level"
                onChange={(e) => handleOnSelectLevel(parseInt(e.target.value))}
                className="form-select"
              >
                {levelOptions.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {IsItTimeToSpecialize() ? (
            <div className="col-auto">
              <div className="input-group">
                <label className="input-group-text">
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
                  className="form-select"
                >
                  {subclassList.map((subclass) => {
                    return (
                      <option key={subclass.id} value={subclass.id}>
                        {subclass.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="col-auto">
            <input
              id="createCharacter"
              type="submit"
              value="Criar"
              className="btn btn-primary"
            ></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default CharacterCreationToolbar;
