const {
  userEmailChekRegex,
  isEmailOnDb,
} = require("../helpers/user/userEmailCheck");

const useField = require("../helpers/user/userFieldCheck");
const bcrypt = require("bcrypt");
const userModel = require("../model/userModel");

const createIdControllers = async (req, res) => {
  const { name, email, password } = req.body;
  //   useField(name, email, password);
  const isInpData = useField(name, email, password);
  // console.log(useField(name, email, password));
  // console.log(isInpData.pass);

  if (isInpData.name || isInpData.email || isInpData.pass) {
    res.send(isInpData);
  } else {
    if (userEmailChekRegex(email)) {
      // res.send("ok mama");
      // userEmailCheck(email);
      const isAccount = await isEmailOnDb(email);
      console.log(isAccount);
      if (!isAccount) {
        bcrypt.hash(password, 10, async (err, hash) => {
          // Store hash in your password DB.
          console.log(hash);
          // bcrypt.compare(password, hash, function (err, result) {
          //   // result == true
          //   console.log(result);
          // });

          let data = new userModel({ name, email, password: hash });
          data.save();
          res.send(data);
        });
      } else {
        res.send("you have allready an account");
      }
    } else {
      res.send("invalid email");
    }
  }
};

module.exports = { createIdControllers };
