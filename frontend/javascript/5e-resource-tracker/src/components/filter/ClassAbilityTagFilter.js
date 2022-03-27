import React from "react";
import { getClassAbilityTags } from "../../utils/abilityClassUtils";

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
      <div className="btn-group" role="group">
        {tags.map((tag) => (
          <button
            key={tag}
            value={tag}
            onClick={(e) => onSelectTag(e.target.value)}
            type="button"
            className={
              selectedTags.includes(tag)
                ? "btn btn-primary"
                : "btn btn-outline-primary"
            }
            data-bs-toggle="button"
            autoComplete="off"
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect02">
          Operação de Filtro
        </label>

        <select
          className="form-select"
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
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={(e) => props.filterByTags(selectedTags, operation)}
        >
          Filtrar
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={(e) => setSelectedTags([])}
        >
          Limpar Filtro
        </button>
      </div>
    </div>
  );
}

export default ClassAbilityTagFilter;
