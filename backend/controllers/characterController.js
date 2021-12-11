"use strict";

var Character = require("../models/character");
const classController = require("./classController");

module.exports = class CharacterController {
  #characters;
  #idCounter;
  #classController;

  constructor() {
    this.#characters = [];
    this.#idCounter = 0;
    this.#classController = classController;
  }

  get characters() {
    return this.#characters;
  }

  getCharacterById(id) {
    return this.#characters.find((character) => character.id === id);
  }

  addCharacter(name, level, gameClassId) {
    const gameClass = this.#getClassById(gameClassId);
    const newCharacterId = this.#generateId();
    const character = new Character(newCharacterId, name, level, gameClass);

    this.#characters.push(character);

    return newCharacterId;
  }

  updateCharacter(id, name, level, gameClassId) {
    const character = this.getCharacterById(id);
    if (typeof character === "undefined")
      throw new Error("This id does not resolve to a character");

    const gameClass = this.#getClassById(gameClassId);

    character.name = name;
    character.level = level;
    character.gameClass = gameClass;
  }

  #getClassById(id) {
    gameClass = this.#classController.getClassById(id);

    if (typeof gameClass === "undefined")
      throw new Error("This id does not resolve to a class");

    return gameClass;
  }

  #generateId() {
    newId = this.#idCounter;
    this.#idCounter++;

    return newId;
  }
};
