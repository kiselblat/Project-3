const axios = require('axios');
const transporter = require("../config/transporter");

const Mailer = (recipient, message) => {

  this.newMail = {
    from: "little.mailer.mailer@gmail.com",
    to: recipient,
    subject: "Little Mailer Script Test",
    html: `<p>${message}</p>`,
    attachments: [
      {
        filename: "attachment.txt",
        content: "This is an attachment."
      }
    ]
  };

  transporter.sendMail(this.newMail, function (err, info) {
    if(err) {
      console.log(err);
    } else {
      console.log(info);
    }
    console.log("Post finished");
  });

}

module.exports = Mailer;