var express = require("express");
const factory = require("../controllers/factory");
var router = express.Router();
const initializeMonk = require("../utils/classInitializer");

// Initializes class list with Monk class
initializeMonk();

/* GET classes listing. */
router.get("/", function (req, res, next) {
  console.log(factory.classController);
  res.json(factory.classController.classes);
});

/* GET specific class. */
router.get("/:id", function (req, res, next) {
  const gameClass = factory.classController.getClassById(req.params.id);

  if (!gameClass) res.sendStatus(404);
  else res.json(gameClass);
});

module.exports = router;
