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
        <label htmlFor="nameSearch">Pesquisar Por Nome</label>
        <input
          type="text"
          id="nameSearch"
          name="nameSearch"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        ></input>{" "}
      </div>
      <ul>
        {filteredClasses.map((classInfo) => (
          <li id={classInfo.id} key={classInfo.id}>
            <ClassInfoToolbar class={classInfo}></ClassInfoToolbar>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClassList;
