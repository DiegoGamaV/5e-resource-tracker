"use strict";

module.exports = class Character {
  constructor(id, name, level, gameClass) {
    if (typeof id === "undefined" || id < 0)
      throw new Error("A character cannot have a negative or undefined id");
    this.id = id;
    this.name = name;
    if (typeof level === "undefined" || level < 1 || level > 20)
      throw new Error(
        "A character must have a valid level within range of 1 and 20"
      );
    this.level = level;
    this.class = gameClass;
    this.resourceAmount = this.class.getResourceAmountByLevel(this.level);
  }

  get id() {
    return this._id;
  }

  set id(id) {
    if (id > 0) this._id = id;
    else throw new Error("A character cannot have a negative or undefined id");
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get level() {
    return this._level;
  }

  set level(level) {
    if (level > 1 && level < 20) this._level = level;
    else {
      throw new Error(
        "A character must have a valid level within range of 1 and 20"
      );
    }
  }

  get class() {
    return this._class;
  }

  set class(gameClass) {
    this._class = gameClass;
  }

  get resourceAmount() {
    return this._resourceAmount;
  }

  set resourceAmount(resourceAmount) {
    this._resourceAmount = resourceAmount;
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

  getResourceAmount() {
    return this.class.getResourceAmountByLevel(this.level);
  }
};
