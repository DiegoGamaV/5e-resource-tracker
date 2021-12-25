import React from "react";

function ClassToolbar(props) {
  const levelOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="ClassToolbar">
      <span>
        {props.specializationName}
        <span>
          {props.subclasses.map((subclass) => (
            <button>{subclass}</button>
          ))}
        </span>
      </span>
      <span>
        Nível
        <select
          onChange={(e) => props.onChangeLevel(parseInt(e.target.value))}
          value={props.currentLevel}
        >
          {levelOptions.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </span>
      <div>
        {props.resourceName}:{" "}
        {props.resourceAmountByLevel[props.currentLevel - 1]}
      </div>
    </div>
  );
}

export default ClassToolbar;
