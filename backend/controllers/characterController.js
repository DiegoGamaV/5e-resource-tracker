"use strict";

var Character = require("../models/character");

module.exports = class CharacterController {
  constructor() {
    this.characters = [];
    this.idCounter = 0;
  }

  get characters() {
    return this.characters;
  }

  getCharacterById(id) {
    return this.characters.find((character) => character.id === id);
  }

  addCharacter(name, level, gameClass) {
    const character = new Character(this.generateId(), name, level, gameClass);

    this.characters.push(character);
  }

  updateCharacter(name, level, gameClass, id) {
    const character = this.getCharacterById(id);

    character.name = name;
    character.level = level;
    character.gameClass = gameClass;
  }

  generateId() {
    newId = this.idCounter;
    this.idCounter++;

    return newId;
  }
};
