import React from "react";
import { getClassAbilityTags } from "../../../utils/abilityClassUtils";

function ClassAbilityTagFilter(props) {
  const [operation, setOperation] = React.useState("ou");
  const [selectedTags, setSelectedTags] = React.useState([]);

  const tags = getClassAbilityTags(props.classAbilities);

  function onSelectTag(tag) {
    if (!selectedTags.includes(tag))
      setSelectedTags((selectedTags) => [...selectedTags, tag]);
    else {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    }
  }

  return (
    <div>
      <span>
        {tags.map((tag) => (
          <button
            key={tag}
            value={tag}
            onClick={(e) => onSelectTag(e.target.value)}
          >
            {tag}
          </button>
        ))}
      </span>
      <div>
        Operação de Filtro
        <select
          onChange={(e) => setOperation(e.target.value)}
          value={operation}
        >
          <option key="e" value="e">
            Todas as Tags
          </option>
          <option key="ou" value="ou">
            Alguma das Tags
          </option>
        </select>
        <button onClick={(e) => props.filterByTags(selectedTags, operation)}>
          Filtrar
        </button>
        <button onClick={(e) => setSelectedTags([])}>Limpar Filtro</button>
        {selectedTags
          .reduce(
            (query, selectedTag) => query + selectedTag + " " + operation + " ",
            ""
          )
          .slice(0, -3)
          .trim()}
      </div>
    </div>
  );
}

export default ClassAbilityTagFilter;
