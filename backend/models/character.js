"use strict";

module.exports = class Character {
  constructor(id, name, level, gameClass) {
    if (id === undefined || id < 0)
      throw new Error("A character cannot have a negative or undefined id");
    this.id = id;
    this.name = name;
    if (!level || level < 1 || level > 20)
      throw new Error(
        "A character must have a valid level within range of 1 and 20"
      );
    this.level = level;
    this.class = gameClass;
    this.resourceAmount = this.getResourceAmountByLevel();
  }

  getClassName() {
    return this.class.name;
  }

  getAbilities() {
    return this.class.getAbilitiesByLevel(this.level);
  }

  getResourceName() {
    return this.class.resourceName;
  }

  getResourceAmountByLevel() {
    return this.class.getResourceAmountByLevel(this.level);
  }
};
