const User = require("../models/user.model");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { checkDuplicate } = require("../utils/error");
const {
  userRegisterSuccess,
  userLoginSuccess,
  userLoginError,
  userLoginAuthError,
} = require("../../config/user-messges");

exports.register = async (req, res, next) => {
  try {
    const payload = req.body;

    // register user
    const user = await User.create(payload);
    return res.json({ success: true, message: userRegisterSuccess, user });
  } catch (error) {
    const { code: errCode } = error;
    if (errCode === 11000) return checkDuplicate(error, res, "User");

    return next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    passport.use(
      new LocalStrategy(
        { usernameField: "email" },
        async (username, password, done) => {
          const user = await User.findOne({ email: username });

          switch (true) {
            case !user || !user?.verifyPassword(password): {
              return done(null, false, {
                success: false,
                message: userLoginError,
              });
            }
            default:
              return done(null, user);
          }
        },
      ),
    );

    // call for passport authentication
    passport.authenticate("local", async (err, user, info) => {
      if (err)
        return res.status(400).send({
          err,
          success: false,
          message: userLoginAuthError,
        });
      // registered user
      else if (user) {
        const accessToken = await user.token();

        await User.updateOne(
          { _id: user._id },
          { $set: { accessToken } },
          { upsert: true },
        );

        return res.json({
          success: true,
          message: userLoginSuccess,
          accessToken,
          data: user,
        });
      }
      // unknown user or wrong password
      else
        return res.status(400).send({ success: false, message: info.message });
    })(req, res);
  } catch (error) {
    return next(error);
  }
};
