var ClassAbility = require("../models/classAbility");
var Class = require("../models/class");
var Subclass = require("../models/subclass");

module.exports = class ClassController {
  constructor() {
    this.classes = [];
    this.subclasses = [];
    this.idCounter = 0;
  }

  getClassById(id) {
    return this.classes.find((gameClass) => gameClass.id === id);
  }

  getSubclassById(id) {
    return this.subclasses.find((subclass) => subclass.id === id);
  }

  getSubclassByClassId(classId) {
    return this.subclasses.filter((subclass) => subclass.classId === classId);
  }

  addClass(name, resourceName, resourceAmountByLevel, specializationName) {
    const newClassId = this.generateClassId();

    const newClass = new Class(
      newClassId,
      name,
      [],
      resourceName,
      resourceAmountByLevel,
      specializationName
    );

    this.classes.push(newClass);

    return newClassId;
  }

  addSubclass(name, gameClassId) {
    const newSubclassId = this.generateSubclassId();

    const newSubclass = new Subclass(newSubclassId, name, [], gameClassId);

    this.subclasses.push(newSubclass);

    return newSubclassId;
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

  addSubclassAbility(
    id,
    title,
    description,
    minCost,
    maxCost,
    unlockedLevel,
    tags,
    isOptional = false
  ) {
    const subclass = this.getSubclassById(id);

    subclass.addSubclassAbility(
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

  generateClassId() {
    const newId = this.idCounter;
    this.idCounter++;

    return newId;
  }

  generateSubclassId() {
    const newId = this.idCounter;
    this.idCounter++;

    return newId;
  }
};
