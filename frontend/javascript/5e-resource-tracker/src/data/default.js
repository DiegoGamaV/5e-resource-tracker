const defaultClass = {
  id: -1,
  name: "...",
  abilities: [],
  resourceName: "...",
  resourceAmountByLevelList: [],
  abilityIdCounter: 0,
};

const defaultCharacter = {
  id: -1,
  name: "...",
  level: 1,
  class: defaultClass,
  resourceAmount: 0,
};

export { defaultClass, defaultCharacter };
