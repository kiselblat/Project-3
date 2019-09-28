const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = new Schema({
  rating: { type: String, required: true },
  date: { type: Date, default: Date.now },
  username: { type: String, required: true }
});

const Day = mongoose.model("Day", daySchema);

module.exports = Day;
