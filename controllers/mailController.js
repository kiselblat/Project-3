require("dotenv").config();
var transporter = require("../config/transporter");

module.exports = {

  sendMail: function(req, res) {
    var destinationAddress = req.body.to;
    // var destinationAddress = "tsechrist@outlook.com";
    var messageBody = req.body.html;
    // var messageBody = "This is a test of the Mood Tracker emailer";

    var newMail = {
      to: destinationAddress,
      subject: "Mood Tracker Test Email",
      from: process.env.GMAIL_USER,
      html: messageBody,
      // attachments: [
      //   {
      //     filename: "item-report.csv",
      //     content: csvContent
      //   }
      // ]
    };

    transporter.sendMail(newMail, function (err, info) {
      if(err) {
        console.log(err);
      } else {
        console.log(info);
      }
      res.end("Post happened");
    });
  }

}