const mongoose = require("mongoose");
const Logger = require("./logger");
const Constants = require("./constant");

const __logger = new Logger();
mongoose.set("strictQuery", false);
mongoose
  .connect(Constants.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    __logger.info("Database connected successfully!");
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error(err);
    __logger.error("Failed to connect Database!");
  });
