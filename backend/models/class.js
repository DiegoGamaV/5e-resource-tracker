const ClassAbility = require("./classAbility");

module.exports = class Class {
  constructor(id, name, abilities, resourceName, resourceAmountByLevel) {
    this.id = id;
    this.name = name;
    this.abilities = abilities;
    this.resourceName = resourceName;
    this.resourceAmountByLevelList = resourceAmountByLevel;
  }

  get id() {
    return this.id;
  }

  get name() {
    return this.name;
  }

  get abilities() {
    return this.abilitiesByLevelList;
  }

  get resourceName() {
    return this.resourceName;
  }

  get resourceAmountByLevelList() {
    return this.resourceAmountByLevelList;
  }

  getResourceAmountByLevel(level) {
    return this.resourceAmountByLevelList[level - 1];
  }

  getLastAbilityIndexByLevel(level) {
    index = -1;

    for (var i = this.abilities.length - 1; i >= 0; i--) {
      if (this.abilities[i].level == level) {
        index = i;
        break;
      }
    }

    return index;
  }

  addClassAbility(classAbility) {
    level = classAbility.level;
    index = this.getLastAbilityIndexByLevel(level);

    this.abilities.splice(index + 1, 0, classAbility);
  }

  removeClassAbility(index) {
    this.abilities.splice(index, 1);
  }

  updateAbility(id, modifiedClassAbility) {
    classAbility = this.abilities.find((ability) => ability.id == id);

    index = this.abilities.indexOf(classAbility);

    if (modifiedClassAbility.level != classAbility.level) {
      this.removeClassAbility(index);
      this.addClassAbility(modifiedClassAbility);
    } else {
      this.abilities[index] = modifiedClassAbility;
    }
  }

  getAbilitiesByTags(tags) {
    res = this.abilities.filter((ability) => !tags.includes(a));
  }
};
