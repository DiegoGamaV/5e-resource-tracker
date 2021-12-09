"use strict";

module.exports = class Character {
  constructor(id, name, level, gameClass) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.class = gameClass;
    this.resourceAmount = this.class.getResourceAmountByLevel(this.level);
  }

  get id() {
    return this.id;
  }

  set id(id) {
    this.id = id;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }

  get level() {
    return this.level;
  }

  set level(level) {
    this.level = level;
  }

  get class() {
    return this.class;
  }

  set class(gameClass) {
    this.class = gameClass;
  }

  get resourceAmount() {
    return this.resourceAmount;
  }

  set resourceAmount(resourceAmount) {
    this.resourceAmount = resourceAmount;
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
