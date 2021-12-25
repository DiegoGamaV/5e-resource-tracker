import React from "react";

import ClassHeader from "./ClassHeader";
import ClassToolbar from "./ClassToolbar";
import ClassLevel from "./ClassLevel";

import monkClass from "../data/monk";
import separateAbilitiesByLevel from "../utils/abilityClassUtils";

const levelRange = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const specializationName = "Tradições Monásticas";
const subclasses = [
  "Caminho da Mão Aberta",
  "Caminho das Sombras",
  "Caminho dos Quatro Elementos",
];

function ClassPage() {
  const [classInfo, setClassInfo] = React.useState({
    class: monkClass,
    specializationName: specializationName,
    subclasses: subclasses,
    currentLevel: levelRange[levelRange.length - 1],
  });

  const changeCurrentLevel = (newLevel) => {
    setClassInfo({ ...classInfo, ...{ currentLevel: newLevel } });
  };

  const abilitiesByLevel = separateAbilitiesByLevel(classInfo.class.abilities);

  return (
    <>
      <ClassHeader></ClassHeader>
      <hr></hr>
      <ClassToolbar
        specializationName={classInfo.specializationName}
        subclasses={classInfo.subclasses}
        resourceAmountByLevel={classInfo.class.resourceAmountByLevelList}
        resourceName={classInfo.class.resourceName}
        currentLevel={classInfo.currentLevel}
        onChangeLevel={changeCurrentLevel}
      ></ClassToolbar>
      <ul>
        {Object.keys(abilitiesByLevel)
          .filter((abilityLevel) => abilityLevel <= classInfo.currentLevel)
          .map((abilityLevel) => (
            <ClassLevel
              level={abilityLevel}
              abilities={abilitiesByLevel[abilityLevel]}
            ></ClassLevel>
          ))}
      </ul>
    </>
  );
}

export default ClassPage;
