const ClassAbility = require("./classAbility");

module.exports = class Class {
  constructor(id, name, abilities, resourceName, resourceAmountByLevel) {
    if (id === undefined || id < 0)
      throw new Error("A class cannot have a negative or undefined id");
    this.id = id;
    this.name = name;
    if (!abilities)
      throw new Error("A class must have a valid Array of abilities");
    this.abilities = abilities;
    if (!resourceName || resourceName.length === 0)
      throw new Error("A class must have a resource name");
    this.resourceName = resourceName;
    if (!resourceAmountByLevel || resourceAmountByLevel.length !== 20)
      throw new Error(
        "A class must have resource amount by level progression list " +
          "for all 20 levels"
      );
    this.resourceAmountByLevelList = resourceAmountByLevel;
    this.abilityIdCounter = 0;
  }

  getResourceAmountByLevel(level) {
    return this.resourceAmountByLevelList[level - 1];
  }

  addClassAbility(title, description, minCost, maxCost, unlockedLevel, tags) {
    const classAbility = new ClassAbility(
      this.generateId(),
      title,
      description,
      minCost,
      maxCost,
      unlockedLevel,
      tags
    );

    const index = this.getLastAbilityIndexByLevel(unlockedLevel);
    this.abilities.splice(index + 1, 0, classAbility);
  }

  removeClassAbility(index) {
    this.abilities.splice(index, 1);
  }

  updateAbility(id, modifiedClassAbility) {
    const classAbility = this.abilities.find((ability) => ability.id == id);
    if (!classAbility)
      throw new Error("This id does not resolve to a class ability");

    const index = this.abilities.indexOf(classAbility);

    if (modifiedClassAbility.level != classAbility.level) {
      this.removeClassAbility(index);
      this.addClassAbility(modifiedClassAbility);
    } else {
      this.abilities[index] = modifiedClassAbility;
    }
  }

  getAbilitiesByTags(tags) {
    return this.abilities.filter((ability) => !tags.includes(a));
  }

  getLastAbilityIndexByLevel(level) {
    let index = -1;

    for (var i = this.abilities.length - 1; i >= 0; i--) {
      if (this.abilities[i].unlockedLevel <= level) {
        index = i;
        break;
      }
    }

    return index;
  }

  generateId() {
    const newId = this.abilityIdCounter;
    this.abilityIdCounter++;

    return newId;
  }
};
