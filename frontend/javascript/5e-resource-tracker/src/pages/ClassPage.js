import React from "react";

import ClassList from "../components/class/ClassList";
import NavigationBar from "../components/navigation/NavigationBar";

function ClassPage() {
  const [classList, setClassList] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/classes/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setClassList(response);
      })
      .catch((error) => console.log(error));
  }, [setClassList.length]);

  return (
    <>
      <NavigationBar />
      <ClassList classes={classList}></ClassList>
    </>
  );
}

export default ClassPage;
