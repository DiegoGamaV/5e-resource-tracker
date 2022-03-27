import React from "react";
import ClassInfoToolbar from "./ClassInfoToolbar";

function ClassList(props) {
  const [nameFilter, setNameFilter] = React.useState("");

  const filteredClasses = props.classes.filter((classInfo) => {
    if (nameFilter) return classInfo.name.includes(nameFilter);
    else return true;
  });

  return (
    <div>
      <div>
        <input
          type="search"
          id="nameSearch"
          name="nameSearch"
          className="form-control"
          placeholder="Buscar por nome"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        ></input>{" "}
      </div>
      <ul className="list-group">
        {filteredClasses.map((classInfo) => (
          <li
            id={classInfo.id}
            key={classInfo.id}
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <ClassInfoToolbar class={classInfo}></ClassInfoToolbar>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClassList;
