const router = require("express").Router();
const dayController = require("../../controllers/dayController");

// Matches with "/api/days"
router
  .route("/")
  .get(dayController.findAll)
  .post(dayController.create);

// Matches with "/api/days/:username"
router
  .route("/:username")
  .get(dayController.findByUser)

// Matches with "/api/days/:date"
router
  .route("/:date")
  .get(dayController.findByDate)
  .put(dayController.update)
  // .delete(dayController.remove);

module.exports = router;
