var ClassAbility = require("../models/classAbility");
var Class = require("../models/class");

module.exports = class ClassController {
  constructor() {
    this.classes = [];
    this.idCounter = 0;
  }

  getClassById(id) {
    return this.classes.find((gameClass) => gameClass.id === id);
  }

  addClass(name, resourceName, resourceAmountByLevel) {
    const newClassId = this.generateId();

    const newClass = new Class(
      newClassId,
      name,
      [],
      resourceName,
      resourceAmountByLevel
    );

    this.classes.push(newClass);

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
    const classAbility = this.abilities.find((ability) => ability.id == id);
    if (typeof classAbility === "undefined")
      throw new Error("This id " + id + " does not resolve to a class ability");

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

  generateId() {
    const newId = this.idCounter;
    this.idCounter++;

    return newId;
  }
};
