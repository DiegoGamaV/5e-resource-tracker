import React from "react";

import ClassToolbar from "../components/class/detail/ClassToolbar";
import ClassDescription from "../components/class/ClassDescription";

import { defaultClass } from "../data/default";
import NavigationBar from "../components/navigation/NavigationBar";
import { useParams } from "react-router-dom";

function ClassDetailPage() {
  const { id } = useParams();
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
    fetch("http://localhost:3001/classes/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setClassInfo(response);
        setSpecializationName(response.specializationName);
      })
      .catch((error) => console.log(error));
  }, [id]);

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
      <NavigationBar />
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

export default ClassDetailPage;
