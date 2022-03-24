import React from "react";

import ClassHeader from "../components/class/ClassHeader";
import ClassToolbar from "../components/class/ClassToolbar";
import ClassDescription from "../components/class/ClassDescription";

import { defaultClass } from "../data/default";

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
      <ClassDescription
        currentLevel={currentLevel}
        classAbilities={classInfo.abilities}
        currentSubclass={currentSubclass}
      ></ClassDescription>
    </>
  );
}

export default ClassPage;
