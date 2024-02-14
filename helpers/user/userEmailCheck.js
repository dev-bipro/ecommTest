const userModel = require("../../model/userModel");
const userEmailChekRegex = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  return emailRegex.test(email);
};
const isEmailOnDb = async (email) => {
  let data = await userModel.findOne({ email: email }).exec();
  //   data = await data;
  //   return data;
  if (data) {
    return true;
  } else {
    return false;
  }
  // console.log(data);
};
module.exports = { userEmailChekRegex, isEmailOnDb };
