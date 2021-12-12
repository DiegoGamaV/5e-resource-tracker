var ClassController = require("./classController");
var CharacterController = require("./characterController");

const classController = new ClassController();
const characterController = new CharacterController(classController);

module.exports = {
  classController: classController,
  characterController: characterController,
};
