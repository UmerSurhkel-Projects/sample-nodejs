const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const moment = require("moment-timezone");
const jwt = require("jwt-simple");
const {
  jwtExpirationInterval,
  passwordEncryptionKey,
} = require("../../config/var");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true },
    accessToken: { type: String },
  },
  { timestamps: true },
);

User.method({
  verifyPassword(password) {
    return bcrypt.compareSync(password, this.password);
  },
  token() {
    const payload = {
      exp: moment().add(jwtExpirationInterval, "minutes").unix(),
      iat: moment().unix(),
      sub: this._id,
    };
    return jwt.encode(payload, passwordEncryptionKey);
  },
});

User.pre("save", async function save(next) {
  try {
    if (!this.isModified("password")) return next();
    const rounds = passwordEncryptionKey ? Number(passwordEncryptionKey) : 10;
    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;
    return next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model("User", User);
