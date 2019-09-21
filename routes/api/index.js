const path = require("path");
const router = require("express").Router();
const dayRoutes = require("./days");

// Book routes
router.use("/days", dayRoutes);

// Additional Routes
// router.use("/newRoute", newRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
