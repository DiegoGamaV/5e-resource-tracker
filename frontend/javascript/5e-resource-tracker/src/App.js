import ClassPage from "./components/ClassPage";

function App() {
  return <ClassPage></ClassPage>;

  // return (
  //   <div className="App">
  //     <ClassHeader></ClassHeader>
  //     <hr></hr>
  //     <ClassToolbar
  //       specializationName={specializationName}
  //       subclasses={subclasses}
  //       levels={levelRange}
  //     ></ClassToolbar>
  //     <ul>
  //       {Object.keys(abilitiesByLevel).map((abilityLevel) => (
  //         <ClassLevel
  //           level={abilityLevel}
  //           abilities={abilitiesByLevel[abilityLevel]}
  //         ></ClassLevel>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default App;
