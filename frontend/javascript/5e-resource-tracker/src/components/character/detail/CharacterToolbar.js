import React from "react";

function CharacterToolbar(props) {
  const levelOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div>
      <form
        className="row gx-3 gy-2 align-items-center"
        onSubmit={props.onSaveChanges}
      >
        <div className="col-auto">
          <div className="input-group">
            <div className="input-group-text">Nome</div>
            <input
              type="text"
              id="name"
              name="name"
              value={props.name}
              onChange={(e) => props.onChangeName(e.target.value)}
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
              value={props.class.id}
              onChange={(e) => props.onChangeClass(parseInt(e.target.value))}
              className="form-select"
            >
              {props.classes.map((classInfo) => {
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
              onChange={(e) => props.onChangeLevel(parseInt(e.target.value))}
              value={props.level}
              data-testid="levelSelect"
              className="form-select"
            >
              {levelOptions.map((level) => (
                <option data-testid="levelOption" key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>
        {props.subclass ? (
          <div className="col-auto" data-testid="specialization">
            <div className="input-group">
              <label className="input-group-text">Subclasse</label>
              <select
                onChange={(e) =>
                  props.onChangeSubclass(parseInt(e.target.value) - 1)
                }
                value={props.subclass.id}
                data-testid="levelSelect"
                className="form-select"
              >
                {props.subclasses.map((subclass) => (
                  <option key={subclass.id} value={subclass.id}>
                    {subclass.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="col-auto">
          <input
            id="updateCharacter"
            type="submit"
            className="btn btn-primary"
            value="Salvar"
          ></input>
        </div>

        <div>
          <h4>
            <span data-testid="classResource" className="badge bg-secondary">
              {props.resourceName}: {props.resourceAmount} /
              {props.resourceAmountByLevel[props.level - 1]}
            </span>
          </h4>
        </div>
      </form>
    </div>
  );
}

export default CharacterToolbar;
