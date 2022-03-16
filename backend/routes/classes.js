var express = require("express");
const factory = require("../controllers/factory");
var router = express.Router();
const initializeMonk = require("../utils/classInitializer");

// Initializes class list with Monk class
initializeMonk();

/* GET classes listing. */
router.get("/", function (req, res, next) {
  res.json(factory.classController.classes);
});

/* GET subclasses listing. */
router.get("/subclasses", function (req, res, next) {
  res.json(factory.classController.subclasses);
});

/* GET specific class. */
router.get("/:id", function (req, res, next) {
  const gameClass = factory.classController.getClassById(
    parseInt(req.params.id)
  );

  if (!gameClass) res.sendStatus(404);
  else res.json(gameClass);
});

/* GET subclasses listing for a specific class. */
router.get("/:id/subclasses", function (req, res, next) {
  const subclasses = factory.classController.getSubclassByClassId(
    parseInt(req.params.id)
  );

  if (!subclasses) res.sendStatus(404);
  else res.json(subclasses);
});

module.exports = router;
