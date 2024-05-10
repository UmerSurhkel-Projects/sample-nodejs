require("dotenv").config();

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongo: {
    uri: process.env.MONGO_URI,
  },
  baseUrl: process.env.BASE_URL,
  bypassedRoutes: ["register", "login"],
  passwordEncryptionKey: process.env.PASSWORD_ENCRYPTION_KEY,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  apiRateLimit: 15 * 60 * 1000, // 15 minutes
  apiMaxRateLimit: 90000,
  corsOptions: {
    origin: "*", // allow only the specific domains like, localhost, your staging and productions domains
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  },
  bodyParserSettings: {
    limit: "5000mb",
    extended: true,
    parameterLimit: 50000,
  },
  version: "/v1",
};
