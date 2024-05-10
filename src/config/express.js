const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const bearerToken = require("express-bearer-token");
const auth = require("../api/middlewares/auth");
const routes = require("../api/routes/v1/index");
const error = require("../api/utils/error");
const {
  port,
  apiRateLimit,
  apiMaxRateLimit,
  corsOptions,
  bodyParserSettings,
  version,
} = require("../config/var");

const app = express();
const http = require("http").createServer(app);

const apiRequestLimiterAll = rateLimit({
  windowMs: apiRateLimit,
  max: apiMaxRateLimit,
});

app.use(bodyParser.json({ limit: bodyParserSettings.limit }));
app.use(bodyParser.urlencoded(bodyParserSettings));

app.use(bearerToken());

app.use(`${version}/`, apiRequestLimiterAll);

app.use(cors(corsOptions));

// compress all responses
app.use(compression());

// authentication middleware to get token
app.use(auth.authenticate);

// mount API v1 routes
app.use(version, routes);

// if error is not an instance of API error, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

http.listen(port);

module.exports = app;
