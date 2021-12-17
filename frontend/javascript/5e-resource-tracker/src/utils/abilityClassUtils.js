function separateAbilitiesByLevel(classAbilities) {
  let abilitiesByLevel = {};

  classAbilities.forEach((ability) => {
    abilitiesByLevel[ability.unlockedLevel]
      ? abilitiesByLevel[ability.unlockedLevel].push(ability)
      : (abilitiesByLevel[ability.unlockedLevel] = [ability]);
  });

  return abilitiesByLevel;
}

export default separateAbilitiesByLevel;
