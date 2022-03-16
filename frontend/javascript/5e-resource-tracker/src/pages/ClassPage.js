import React from "react";

import ClassHeader from "../components/class/ClassHeader";
import ClassToolbar from "../components/class/ClassToolbar";
import ClassLevel from "../components/class/ClassLevel";

import defaultClass from "../data/default";
import { formatAbilitiesByLevel } from "../utils/abilityClassUtils";

function ClassPage() {
  const [classInfo, setClassInfo] = React.useState(defaultClass);
  const [specializationName, setSpecializationName] = React.useState("");
  const [subclasses, setSubclasses] = React.useState([]);
  const [currentLevel, setCurrentLevel] = React.useState(20);
  const [currentSubclass, setCurrentSubclass] = React.useState(undefined);

  function changeSubclass(subclassIndex) {
    const subclass = subclasses[subclassIndex];

    if (currentSubclass === subclass) setCurrentSubclass(undefined);
    else setCurrentSubclass(subclass);
  }

  React.useEffect(() => {
    fetch("http://localhost:3001/classes/?id=0", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setClassInfo(response[0]);
        setSpecializationName(response[0].specializationName);
      })
      .catch((error) => console.log(error));
  }, [classInfo.id]);

  React.useEffect(() => {
    fetch("http://localhost:3001/classes/" + classInfo.id + "/subclasses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setSubclasses(response);
      })
      .catch((error) => console.log(error));
  }, [classInfo.id]);

  const abilitiesByLevel = formatAbilitiesByLevel(
    classInfo.abilities,
    currentSubclass
  );

  return (
    <>
      <ClassHeader></ClassHeader>
      <hr></hr>
      <ClassToolbar
        specializationName={specializationName}
        subclasses={subclasses}
        onChangeSubclass={changeSubclass}
        resourceAmountByLevel={classInfo.resourceAmountByLevelList}
        resourceName={classInfo.resourceName}
        currentLevel={currentLevel}
        onChangeLevel={setCurrentLevel}
      ></ClassToolbar>
      <ul>
        {Object.keys(abilitiesByLevel)
          .filter((abilityLevel) => abilityLevel <= currentLevel)
          .map((abilityLevel) => (
            <ClassLevel
              key={abilityLevel}
              level={abilityLevel}
              abilities={abilitiesByLevel[abilityLevel]}
            ></ClassLevel>
          ))}
      </ul>
    </>
  );
}

export default ClassPage;
