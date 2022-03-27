import React from "react";

function ClassToolbar(props) {
  const levelOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="row gy-1 gx-3 align-items-center">
      <div data-testid="specializationName" className="col-auto">
        <div className="input-group">
          <span className="input-group-text">{props.specializationName}</span>
          <span className="btn-group" role="group">
            {props.subclasses.map((subclass) => (
              <button
                data-testid="subclassButton"
                key={subclass.id}
                value={subclass.id}
                className="btn btn-outline-primary"
                onClick={(e) =>
                  props.onChangeSubclass(parseInt(e.target.value) - 1)
                }
              >
                {subclass.name}
              </button>
            ))}
          </span>
        </div>
      </div>
      <div className="col-auto">
        <div className="input-group">
          <span className="input-group-text">Nível</span>
          <select
            onChange={(e) => props.onChangeLevel(parseInt(e.target.value))}
            value={props.currentLevel}
            data-testid="levelSelect"
            className="form-select"
          >
            {levelOptions.map((level) => (
              <option data-testid="levelOption" key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          <span className="input-group-text">
            {props.resourceName}:{" "}
            {props.resourceAmountByLevel[props.currentLevel - 1]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ClassToolbar;
