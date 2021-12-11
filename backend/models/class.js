const ClassAbility = require("./classAbility");

module.exports = class Class {
  #id;
  #name;
  #abilities;
  #resourceNameSingular;
  #resourceNamePlural;
  #resourceAmountByLevelList;
  #abilityIdCounter;

  constructor(
    id,
    name,
    abilities,
    resourceNameSingular,
    resourceNamePlural,
    resourceAmountByLevel
  ) {
    this.#id = id;
    this.#name = name;
    this.#abilities = abilities;
    this.#resourceNameSingular = resourceNameSingular;
    this.#resourceNamePlural = resourceNamePlural;
    this.#resourceAmountByLevelList = resourceAmountByLevel;
    this.#abilityIdCounter = 0;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get abilities() {
    return this.#abilitiesByLevelList;
  }

  get resourceNameSingular() {
    return this.#resourceNameSingular;
  }

  get resourceNamePlural() {
    return this.#resourceNamePlural;
  }

  get resourceAmountByLevelList() {
    return this.#resourceAmountByLevelList;
  }

  getResourceAmountByLevel(level) {
    return this.#resourceAmountByLevelList[level - 1];
  }

  addClassAbility(title, description, minCost, maxCost, unlockedLevel, tags) {
    const classAbility = new ClassAbility(
      this.#generateId(),
      title,
      description,
      minCost,
      maxCost,
      unlockedLevel,
      tags
    );

    const index = this.#getLastAbilityIndexByLevel(unlockedLevel);

    this.#abilities.splice(index + 1, 0, classAbility);
  }

  removeClassAbility(index) {
    this.abilities.splice(index, 1);
  }

  updateAbility(id, modifiedClassAbility) {
    const classAbility = this.#abilities.find((ability) => ability.id == id);
    if (typeof classAbility === "undefined")
      throw new Error("This id does not resolve to a class ability");

    const index = this.#abilities.indexOf(classAbility);

    if (modifiedClassAbility.level != classAbility.level) {
      this.removeClassAbility(index);
      this.addClassAbility(modifiedClassAbility);
    } else {
      this.#abilities[index] = modifiedClassAbility;
    }
  }

  getAbilitiesByTags(tags) {
    res = this.#abilities.filter((ability) => !tags.includes(a));
  }

  #getLastAbilityIndexByLevel(level) {
    index = -1;

    for (var i = this.#abilities.length - 1; i >= 0; i--) {
      if (this.#abilities[i].level == level) {
        index = i;
        break;
      }
    }

    return index;
  }

  #generateId() {
    newId = this.#abilityIdCounter;
    this.#abilityIdCounter++;

    return newId;
  }
};
