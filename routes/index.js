const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const mailRoutes = require("./mail");

// API Routes
router.use("/api", apiRoutes);
router.use("/mail", mailRoutes);
router.use("/auth", mailRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;