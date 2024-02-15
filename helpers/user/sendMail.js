const nodemailer = require("nodemailer");
module.exports = async (email, otp, template) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "roh17ra@gmail.com",
      pass: "iehg ujwq ewyv hthb",
    },
  });
  const info = await transporter.sendMail({
    from: "roh17ra@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Please Verify", // Subject line
    html: template(otp), // html body
  });
};
