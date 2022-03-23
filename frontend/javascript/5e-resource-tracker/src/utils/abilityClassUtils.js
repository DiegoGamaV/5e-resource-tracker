function separateAbilitiesByLevel(abilities) {
  let abilitiesByLevel = {};

  abilities.forEach((ability) => {
    abilitiesByLevel[ability.unlockedLevel]
      ? abilitiesByLevel[ability.unlockedLevel].push(ability)
      : (abilitiesByLevel[ability.unlockedLevel] = [ability]);
  });

  return abilitiesByLevel;
}

function formatAbilitiesByLevel(classAbilities, subclass) {
  const classAbilitiesByLevel = separateAbilitiesByLevel(classAbilities);

  if (subclass && subclass.abilities) {
    const subclassAbilitiesByLevel = separateAbilitiesByLevel(
      subclass.abilities
    );

    Object.keys(subclassAbilitiesByLevel).forEach((level) => {
      const subclassProgressionIndex = getSubclassAbilityIndex(
        classAbilitiesByLevel[level]
      );

      if (subclassProgressionIndex >= 0) {
        classAbilitiesByLevel[level].splice(subclassProgressionIndex, 1);

        subclassAbilitiesByLevel[level].forEach((subclassAbility) => {
          classAbilitiesByLevel[level].unshift(subclassAbility);
        });
      }
    });
  }

  return classAbilitiesByLevel;
}

function getSubclassAbilityIndex(abilities) {
  let subclassAbilityIndex = -1;

  const subclassAbility = abilities.find(
    (ability) => ability.name === "Habilidade de Subclasse"
  );
  subclassAbilityIndex = abilities.indexOf(subclassAbility);

  return subclassAbilityIndex;
}

function getLevelOfFirstSubclassAbility(abilities) {
  const subclassAbility = abilities.find(
    (ability) => ability.name === "Habilidade de Subclasse"
  );

  return subclassAbility ? subclassAbility.unlockedLevel : 0;
}

export { formatAbilitiesByLevel, getLevelOfFirstSubclassAbility };
