const mongoose = require("mongoose");
const { mongo, env } = require("./var");

// exit application on error
mongoose.connection.on("error", (err) => {
  if (err) process.exit(-1);
});

// print mongoose logs in dev env
if (env === "development") {
  mongoose.set("debug", true);
}

// connect to mongo db
exports.connect = () => {
  mongoose.connect(mongo.uri);
  return mongoose.connection;
};
