const router = require("express").Router();
const dayController = require("../../controllers/dayController");

// Matches with "/api/days"
router.route("/")
  .get(dayController.findAll)
  .post(dayController.create);

// Matches with "/api/days/:date"
router
  .route("/:date")
  .get(booksController.findByDate)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
