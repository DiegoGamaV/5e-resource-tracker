"use strict";

var ClassAbility = require("../models/classAbility");

module.exports = class ClassController {
  constructor() {
    this.classes = [];
    this.idCounter = 0;
  }

  get classes() {
    return this.classes;
  }

  getClassById(id) {
    return this.classes.find((gameClass) => gameClass.id === id);
  }

  updateClassAbility(
    classId,
    abilityId,
    name,
    description,
    cost,
    unlockedLevel,
    tags
  ) {
    gameClass = this.getClassById(classId);

    newClassAbility = ClassAbility(
      this.generateId(),
      name,
      description,
      cost,
      unlockedLevel,
      tags
    );

    gameClass.updateClassAbility(abilityId, newClassAbility);
  }

  generateId() {
    newId = this.idCounter;
    this.idCounter++;

    return newId;
  }
};
