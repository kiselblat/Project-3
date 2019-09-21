const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

const mongoConfig = require("../config/keys").mongoURI;

mongoose.connect(
  mongoConfig,
  { useNewUrlParser: true }
);

const daySeed = [
  {
    rating: "",
    date: new Date("2019-08-30")
  },
  {
    rating: "2",
    date: new Date("2019-09-05")
  },
  {
    rating: "4",
    date: new Date("2019-09-10")
  },
  {
    rating: "3",
    date: new Date("2019-09-14")
  },
  {
    rating: "3",
    date: new Date("2019-09-15")
  },
  {
    rating: "2",
    date: new Date("2019-09-16")
  },
  {
    rating: "",
    date: new Date("2019-09-17")
  },
  {
    rating: "4",
    date: new Date("2019-09-18")
  },
  {
    rating: "1",
    date: new Date("2019-09-19")
  },
  {
    rating: "3",
    date: new Date("2019-09-20")
  }
];

db.Day
  .remove({})
  .then(() => db.Day.collection.insertMany(daySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
