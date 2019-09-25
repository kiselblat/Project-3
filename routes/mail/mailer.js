const router = require("express").Router();
const mailController = require("../../controllers/mailController");

// Matches with "/mail/send"
router.route("/")
  .post(mailController.sendMail);

// Matches with "/mail/send/:date"
// router
//   .route("/:date")
//   .get(dayController.findByDate)
//   .put(dayController.update)
  // .delete(dayController.remove);

module.exports = router;
