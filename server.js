require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const path = require("path");
const cron = require('node-cron');
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3001;
const mail = require("./lib/Mailer")
const routes = require("./routes");

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const db = process.env.MONGODB_URI || "mongodb://localhost/dayrater";

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

cron.schedule('0 10 * * *', () => {
  console.log('running a task at 10am,');
  mail("kiselblat@gmail.com", "This test email should appear at 10am in herokuland")
});