import React from "react";

function CharacterToolbar(props) {
  const levelOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="CharacterToolbar">
      <form onSubmit={props.onSaveChanges}>
        <span>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={props.name}
            onChange={(e) => props.onChangeName(e.target.value)}
          ></input>
        </span>
        <span>
          <label htmlFor="classes">Classe</label>
          <select
            name="classes"
            id="classes"
            value={props.class.id}
            onChange={(e) => props.onChangeClass(parseInt(e.target.value))}
          >
            {props.classes.map((classInfo) => {
              return (
                <option key={classInfo.id} value={classInfo.id}>
                  {classInfo.name}
                </option>
              );
            })}
          </select>
        </span>
        <span>
          Nível
          <select
            onChange={(e) => props.onChangeLevel(parseInt(e.target.value))}
            value={props.level}
            data-testid="levelSelect"
          >
            {levelOptions.map((level) => (
              <option data-testid="levelOption" key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </span>
        {props.subclass ? (
          <span data-testid="specialization">
            Subclasse
            <select
              onChange={(e) =>
                props.onChangeSubclass(parseInt(e.target.value) - 1)
              }
              value={props.subclass.id}
              data-testid="levelSelect"
            >
              {props.subclasses.map((subclass) => (
                <option key={subclass.id} value={subclass.id}>
                  {subclass.name}
                </option>
              ))}
            </select>
          </span>
        ) : (
          <></>
        )}
        <span>
          <input id="updateCharacter" type="submit" value="Salvar"></input>
        </span>

        <div>
          <span data-testid="classResource">
            {props.resourceName}:{props.resourceAmount} /
            {props.resourceAmountByLevel[props.level - 1]}
          </span>
        </div>
      </form>
    </div>
  );
}

export default CharacterToolbar;
