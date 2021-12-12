var express = require("express");
const characterController = require("../controllers/characterController");
var router = express.Router();

/* GET characters listing. */
router.get("/", function (req, res, next) {
  res.json(characterController.characters);
});

/* GET specific character. */
router.get("/:id", function (req, res, next) {
  const character = characterController.getCharacterById(req.params.id);

  if (typeof character === "undefined") res.sendStatus(404);
  else res.json(character);
});

router.post("/", function (req, res, next) {
  try {
    const id = characterController.addCharacter(
      req.body.name,
      req.body.level,
      req.body.classId
    );
    const character = characterController.getCharacterById(id);

    res.status(201).json(character);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

module.exports = router;
