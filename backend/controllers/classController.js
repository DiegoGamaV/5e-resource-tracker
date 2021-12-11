"use strict";

var ClassAbility = require("../models/classAbility");
var Class = require("../models/class");

class ClassController {
  #classes;
  #idCounter;

  constructor() {
    this.#classes = [];
    this.#idCounter = 0;
  }

  get classes() {
    return this.#classes;
  }

  getClassById(id) {
    return this.#classes.find((gameClass) => gameClass.id === id);
  }

  addClass(
    name,
    resourceNameSingular,
    resourceNamePlural,
    resourceAmountByLevel
  ) {
    const newClassId = this.#generateId();

    const newClass = new Class(
      newClassId,
      name,
      [],
      resourceNameSingular,
      resourceNamePlural,
      resourceAmountByLevel
    );

    this.#classes.push(newClass);

    return newClassId;
  }

  addClassAbility(
    id,
    title,
    description,
    minCost,
    maxCost,
    unlockedLevel,
    tags,
    isOptional = false
  ) {
    const gameClass = this.getClassById(id);

    gameClass.addClassAbility(
      title,
      description,
      minCost,
      maxCost,
      unlockedLevel,
      tags,
      isOptional
    );
  }

  updateClassAbility(
    classId,
    abilityId,
    title,
    description,
    minCost,
    maxCost,
    unlockedLevel,
    tags
  ) {
    gameClass = this.getClassById(classId);
    const classAbility = this.#abilities.find((ability) => ability.id == id);
    if (typeof classAbility === "undefined")
      throw new Error("This id does not resolve to a class ability");

    newClassAbility = ClassAbility(
      abilityId,
      title,
      description,
      minCost,
      maxCost,
      unlockedLevel,
      tags
    );

    gameClass.updateClassAbility(abilityId, newClassAbility);
  }

  #generateId() {
    newId = this.#idCounter;
    this.#idCounter++;

    return newId;
  }
}

const classControllerInstance = new ClassController();

module.exports = classControllerInstance;
