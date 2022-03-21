import React from "react";
import { useParams } from "react-router-dom";

//import ClassHeader from "../components/class/ClassHeader";
//import ClassToolbar from "../components/class/ClassToolbar";
import ClassLevel from "../components/class/ClassLevel";

import { defaultCharacter } from "../data/default";
import { formatAbilitiesByLevel } from "../utils/abilityClassUtils";

function CharacterDetailPage(props) {
  const { id } = useParams();
  const [character, setCharacter] = React.useState(defaultCharacter);

  React.useEffect(() => {
    fetch("http://localhost:3001/characters/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setCharacter(response);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const abilitiesByLevel = formatAbilitiesByLevel(
    character.class.abilities,
    character.specialization
  );

  console.log(character);

  return (
    <>
      {/* <ClassHeader></ClassHeader> */}
      <hr></hr>
      {/* <ClassToolbar
        specializationName={specializationName}
        subclasses={subclasses}
        onChangeSubclass={changeSubclass}
        resourceAmountByLevel={classInfo.resourceAmountByLevelList}
        resourceName={classInfo.resourceName}
        currentLevel={currentLevel}
        onChangeLevel={setCurrentLevel}
      ></ClassToolbar> */}
      Work in Progress
      <ul>
        {Object.keys(abilitiesByLevel)
          .filter((abilityLevel) => abilityLevel <= character.level)
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

export default CharacterDetailPage;
