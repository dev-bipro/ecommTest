const userHead = async (req, res, next) => {
  //   res.send(req.headers.authorization);
  if (req.headers.authorization != "passThikAche") {
    res.send({ status: 404, error: "invalid user" });
  } else {
    next();
  }
};
module.exports = userHead;
