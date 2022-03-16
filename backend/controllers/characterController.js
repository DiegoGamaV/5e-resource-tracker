"use strict";

var Character = require("../models/character");

module.exports = class CharacterController {
  constructor(classController) {
    this.characters = [];
    this.idCounter = 0;
    this.classController = classController;
  }

  getCharacterById(id) {
    return this.characters.find((character) => character.id === id);
  }

  addCharacter(name, level, gameClassId, specializationId) {
    const gameClass = this.getClassById(gameClassId);
    if (gameClass === undefined)
      throw new Error("The id " + id + " does not resolve to a class");

    const subclass = this.getSubclassById(specializationId);
    if (subclass === undefined)
      throw new Error("The id " + id + " does not resolve to a subclass");

    const newCharacterId = this.generateId();
    const character = new Character(
      newCharacterId,
      name,
      level,
      gameClass,
      subclass
    );

    this.characters.push(character);

    return newCharacterId;
  }

  updateCharacter(id, name, level, gameClassId, specializationId) {
    const character = this.getCharacterById(id);
    if (character === undefined)
      throw new Error("This id " + id + " does not resolve to a character");

    const subclass = this.getSubclassById(specializationId);
    if (subclass === undefined)
      throw new Error("The id " + id + " does not resolve to a subclass");

    const gameClass = this.getClassById(gameClassId);

    character.name = name;
    character.level = level;
    character.gameClass = gameClass;
    character.subclass = subclass;
  }

  getClassById(id) {
    const gameClass = this.classController.getClassById(id);
    if (gameClass === undefined)
      throw new Error("The id " + id + " does not resolve to a class");

    return gameClass;
  }

  getSubclassById(id) {
    const subclass = this.classController.getSubclassById(id);
    if (subclass === undefined)
      throw new Error("The id " + id + " does not resolve to a subclass");

    return subclass;
  }

  generateId() {
    const newId = this.idCounter;
    this.idCounter++;

    return newId;
  }
};
