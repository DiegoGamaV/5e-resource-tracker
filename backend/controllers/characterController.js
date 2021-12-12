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

  addCharacter(name, level, gameClassId) {
    const gameClass = this.getClassById(gameClassId);
    if (gameClass === undefined)
      throw new Error("The id " + id + " does not resolve to a class");

    const newCharacterId = this.generateId();
    const character = new Character(newCharacterId, name, level, gameClass);

    this.characters.push(character);

    return newCharacterId;
  }

  updateCharacter(id, name, level, gameClassId) {
    const character = this.getCharacterById(id);
    if (character === undefined)
      throw new Error("This id " + id + " does not resolve to a character");

    const gameClass = this.getClassById(gameClassId);

    character.name = name;
    character.level = level;
    character.gameClass = gameClass;
  }

  getClassById(id) {
    const gameClass = this.classController.getClassById(id);
    if (gameClass === undefined)
      throw new Error("The id " + id + " does not resolve to a class");

    return gameClass;
  }

  generateId() {
    const newId = this.idCounter;
    this.idCounter++;

    return newId;
  }
};
