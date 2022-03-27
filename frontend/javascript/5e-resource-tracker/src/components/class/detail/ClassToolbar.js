import React from "react";

function ClassToolbar(props) {
  const levelOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="ClassToolbar" class="row gy-1 gx-3 align-items-center">
      <div data-testid="specializationName" class="col-auto">
        <div class="input-group">
          <span class="input-group-text">{props.specializationName}</span>
          <span class="btn-group" role="group">
            {props.subclasses.map((subclass) => (
              <button
                data-testid="subclassButton"
                key={subclass.id}
                value={subclass.id}
                class="btn btn-outline-primary"
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
      <div class="col-auto">
        <div class="input-group">
          <span class="input-group-text">Nível</span>
          <select
            onChange={(e) => props.onChangeLevel(parseInt(e.target.value))}
            value={props.currentLevel}
            data-testid="levelSelect"
            class="form-select"
          >
            {levelOptions.map((level) => (
              <option data-testid="levelOption" key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          <span class="input-group-text">
            {" "}
            {props.resourceName}:{" "}
            {props.resourceAmountByLevel[props.currentLevel - 1]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ClassToolbar;
