const ClassAbility = require("./classAbility");

module.exports = class Subclass {
  constructor(id, name, abilities, gameClassId) {
    if (id === undefined || id < 0)
      throw new Error("A class cannot have a negative or undefined id");
    this.id = id;
    this.name = name;
    if (!abilities)
      throw new Error("A class must have a valid Array of abilities");
    this.abilities = abilities;
    this.abilityIdCounter = 0;
    this.classId = gameClassId;
  }

  addSubclassAbility(
    title,
    description,
    minCost,
    maxCost,
    unlockedLevel,
    tags
  ) {
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

  removeSubclassAbility(index) {
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
