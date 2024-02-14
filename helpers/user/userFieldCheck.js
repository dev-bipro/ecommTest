const useField = (name = "", email = "", pass = "") => {
  console.log(name, email, pass);
  const error = {};

  if (!name) {
    error.name = "enter your name";
  }
  if (!email) {
    error.email = "enter your email";
  }
  if (!pass) {
    error.pass = "enter your password";
  }

  return error;
};
module.exports = useField;
