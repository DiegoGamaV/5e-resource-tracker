import React from "react";

function ClassToolbar(props) {
  const levelOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="ClassToolbar">
      <span data-testid="specializationName">
        {props.specializationName}
        <span>
          {props.subclasses.map((subclass) => (
            <button
              data-testid="subclassButton"
              key={subclass.id}
              value={subclass.id}
              onClick={(e) =>
                props.onChangeSubclass(parseInt(e.target.value) - 1)
              }
            >
              {subclass.name}
            </button>
          ))}
        </span>
      </span>
      <span>
        Nível
        <select
          onChange={(e) => props.onChangeLevel(parseInt(e.target.value))}
          value={props.currentLevel}
          data-testid="levelSelect"
        >
          {levelOptions.map((level) => (
            <option data-testid="levelOption" key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </span>
      <div data-testid="classResource">
        {props.resourceName}:{" "}
        {props.resourceAmountByLevel[props.currentLevel - 1]}
      </div>
    </div>
  );
}

export default ClassToolbar;
