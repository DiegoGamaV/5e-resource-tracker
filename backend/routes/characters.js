var express = require("express");
const factory = require("../controllers/factory");
var router = express.Router();

/* GET characters listing. */
router.get("/", function (req, res, next) {
  res.json(factory.characterController.characters);
});

/* GET specific character. */
router.get("/:id", function (req, res, next) {
  const character = factory.characterController.getCharacterById(req.params.id);

  if (!character) res.sendStatus(404);
  else res.json(character);
});

router.post("/", function (req, res, next) {
  try {
    const id = factory.characterController.addCharacter(
      req.body.name,
      req.body.level,
      req.body.classId
    );
    const character = factory.characterController.getCharacterById(id);
    console.log(character.resourceAmount);

    res.status(201).json(character);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

module.exports = router;
