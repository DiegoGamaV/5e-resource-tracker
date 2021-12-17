import ClassHeader from "./components/ClassHeader";
import ClassToolbar from "./components/ClassToolbar";
import ClassLevel from "./components/ClassLevel";

import monkClass from "./data/monk";
import separateAbilitiesByLevel from "./utils/abilityClassUtils";

const abilitiesByLevel = separateAbilitiesByLevel(monkClass.abilities);
const levelRange = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const specializationName = "Tradições Monásticas";
const subclasses = [
  "Caminho da Mão Aberta",
  "Caminho das Sombras",
  "Caminho dos Quatro Elementos",
];

function App() {
  return (
    <div className="App">
      <ClassHeader></ClassHeader>
      <hr></hr>
      <ClassToolbar
        specializationName={specializationName}
        subclasses={subclasses}
        levels={levelRange}
      ></ClassToolbar>
      <ul>
        {Object.keys(abilitiesByLevel).map((abilityLevel) => (
          <ClassLevel
            level={abilityLevel}
            abilities={abilitiesByLevel[abilityLevel]}
          ></ClassLevel>
        ))}
      </ul>
    </div>
  );
}

export default App;
