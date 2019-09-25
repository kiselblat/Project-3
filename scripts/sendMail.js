var axios = require('axios');
var transporter = require("../config/transporter")

var address = process.argv[2];
var body = process.argv.slice(3).join("%20");

var newMail = {
  from: "little.mailer.mailer@gmail.com",
  to: address,
  subject: "Little Mailer Script Test",
  html: `<p>${body}</p>`,
  attachments: [
    {
      filename: "attachment.txt",
      content: "This is an attachment."
    }
  ]
};

console.log(address, body);

transporter.sendMail(newMail, function (err, info) {
  if(err) {
    console.log(err);
  } else {
    console.log(info);
  }
  console.log("Post finished");
});