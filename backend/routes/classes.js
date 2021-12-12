var express = require("express");
const classController = require("../controllers/classController");
var router = express.Router();

/* GET classes listing. */
router.get("/", function (req, res, next) {
  res.json(classController.classes);
});

/* GET specific class. */
router.get("/:id", function (req, res, next) {
  const gameClass = classController.getClassById(req.params.id);

  if (typeof gameClass === "undefined") res.sendStatus(404);
  else res.json(gameClass);
});

module.exports = router;
