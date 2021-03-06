import axios from "axios";

export default {
  // Gets all days
  getAll: function() {
    return axios.get("/api/days/");
  },
  getAllFromUser: function(username) {
    return axios.get("/api/days/" + username);
  },
  // Gets the day with the given date
  getDay: function(date) {
    return axios.get("/api/days/" + date);
  },
  // Deletes the day with the given date
  // deleteDay: function(date) {
  //   return axios.delete("/api/days/" + date);
  // },
  // Saves a day to the database
  saveDay: function(rating) {
    return axios.post("/api/days/", rating);
  },
  updateDay: function(rating, date) {
    return axios.put("/api/days/" + date, rating)
  },
  sendMail: function(mail) {
    return axios.post("/mail/send/", mail);
  }
};
