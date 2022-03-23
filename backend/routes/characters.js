var express = require("express");
const factory = require("../controllers/factory");
var router = express.Router();

/* GET characters listing. */
router.get("/", function (req, res, next) {
  res.json(factory.characterController.characters);
});

/* GET specific character. */
router.get("/:id", function (req, res, next) {
  const character = factory.characterController.getCharacterById(
    parseInt(req.params.id)
  );

  if (!character) res.sendStatus(404);
  else res.json(character);
});

router.post("/", function (req, res, next) {
  try {
    const id = factory.characterController.addCharacter(
      req.body.name,
      parseInt(req.body.level),
      parseInt(req.body.classId),
      parseInt(req.body.specializationId)
    );
    const character = factory.characterController.getCharacterById(id);

    res.status(201).json(character);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.put("/:id", function (req, res, next) {
  try {
    factory.characterController.updateCharacter(
      parseInt(req.params.id),
      req.body.name,
      parseInt(req.body.level),
      parseInt(req.body.classId),
      parseInt(req.body.specializationId)
    );
    const character = factory.characterController.getCharacterById(
      parseInt(req.params.id)
    );

    res.status(200).json(character);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

module.exports = router;
