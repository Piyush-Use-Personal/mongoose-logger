const mongoose = require("mongoose");

const ErrorLogsSchema = new mongoose.Schema(
  {},
  { timestamps: true, strict: false, collection: "errorLogs" }
);

const ErrorLogs = mongoose.model("ErrorLogs", ErrorLogsSchema);

module.exports = ErrorLogs;
