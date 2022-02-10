import React from "react";

import ClassHeader from "./ClassHeader";
import ClassToolbar from "./ClassToolbar";
import ClassLevel from "./ClassLevel";

import defaultClass from "../data/default";
import separateAbilitiesByLevel from "../utils/abilityClassUtils";

function ClassPage() {
  const [classInfo, setClassInfo] = React.useState(defaultClass);

  const [specializationName, setSpecializationName] = React.useState(
    "Tradições Monásticas"
  );

  const [subclasses, setSubclasses] = React.useState([
    "Caminho da Mão Aberta",
    "Caminho das Sombras",
    "Caminho dos Quatro Elementos",
  ]);

  const [currentLevel, setCurrentLevel] = React.useState(20);

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
      })
      .catch((error) => console.log(error));
  }, [classInfo.id]);

  const abilitiesByLevel = separateAbilitiesByLevel(classInfo.abilities);

  return (
    <>
      <ClassHeader></ClassHeader>
      <hr></hr>
      <ClassToolbar
        specializationName={specializationName}
        subclasses={subclasses}
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
