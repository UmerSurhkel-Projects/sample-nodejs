const User = require("../models/user.model");
const { bypassedRoutes } = require("../../config/var");
const { userAuthTokenError } = require("../../config/user-messges");

exports.authenticate = async (req, res, next) => {
  const { headers, originalUrl } = req;

  // this bypasses public routes (e.g. register and login etc.) here
  if (bypassedRoutes.includes(originalUrl.split("/")?.pop()?.toLowerCase()))
    return next();
  else if (headers?.authorization) {
    // check if user access token is valid or not
    const accessToken = headers?.authorization.split(" ").pop();
    const user = await User.findOne({ accessToken }, "_id");
    if (user) {
      req.userId = user._id;
      return next();
    }
  }

  return res.status(403).send({ success: false, message: userAuthTokenError });
};
