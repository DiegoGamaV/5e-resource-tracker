import React from "react";

import ClassLevel from "./ClassLevel";

import { formatAbilitiesByLevel } from "../../utils/abilityClassUtils";
import ClassAbilityTagFilter from "./filter/ClassAbilityTagFilter";
import ClassAbilitySearchFilter from "./filter/ClassAbilitySearchFilter";

function ClassDescription(props) {
  const [filteredAbilitiesByTags, setFilteredAbilitiesByTags] = React.useState(
    props.classAbilities
  );
  const [filteredAbilitiesByText, setFilteredAbilitiesByText] = React.useState(
    props.classAbilities
  );

  function getFilteredAbilitiesByTags(tags, operation) {
    let filteredAbilities = props.classAbilities;

    if (tags.length) {
      if (operation === "e") {
        filteredAbilities = props.classAbilities.filter((ability) =>
          tags.every((filterTag) => ability.tags.includes(filterTag))
        );
      } else {
        filteredAbilities = props.classAbilities.filter((ability) =>
          tags.some((filterTag) => ability.tags.includes(filterTag))
        );
      }
    }
    console.log(filteredAbilities);
    setFilteredAbilitiesByTags(filteredAbilities);
  }

  function filterAbilitiesBySearch(query) {
    let filteredAbilities = props.classAbilities;

    if (query) {
      filteredAbilities = props.classAbilities.filter(
        (ability) =>
          ability.name.toLowerCase().includes(query.toLowerCase()) ||
          ability.description.toLowerCase().includes(query.toLowerCase())
      );
    }
    setFilteredAbilitiesByText(filteredAbilities);
  }

  function getIntersectionOfFilteredAbilities() {
    if (!filteredAbilitiesByTags.length && !filteredAbilitiesByText.length)
      return props.classAbilities;
    else if (!filteredAbilitiesByTags.length) return filteredAbilitiesByText;
    else if (!filteredAbilitiesByText.length) return filteredAbilitiesByTags;
    else
      return filteredAbilitiesByTags.filter((ability) =>
        filteredAbilitiesByText.includes(ability)
      );
  }

  const abilitiesByLevel = formatAbilitiesByLevel(
    getIntersectionOfFilteredAbilities(),
    props.subclass
  );

  return (
    <>
      <ClassAbilitySearchFilter
        filterByTitle={filterAbilitiesBySearch}
      ></ClassAbilitySearchFilter>
      <br></br>
      <ClassAbilityTagFilter
        classAbilities={props.classAbilities}
        filterByTags={getFilteredAbilitiesByTags}
      ></ClassAbilityTagFilter>
      <ul>
        {Object.keys(abilitiesByLevel)
          .filter((abilityLevel) => abilityLevel <= props.currentLevel)
          .map((abilityLevel) => (
            <ClassLevel
              key={abilityLevel}
              level={abilityLevel}
              abilities={abilitiesByLevel[abilityLevel]}
              useAbility={props.useAbility}
              resourceName={props.resourceName}
            ></ClassLevel>
          ))}
      </ul>
    </>
  );
}

export default ClassDescription;
