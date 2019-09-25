require("dotenv").config();
const express = require("express");
const path = require("path");
const cron = require('node-cron');
const app = express();

const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const db = process.env.MONGO_URI;

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

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});