require("dotenv").config();
const NODE_ENV = process.env.NODE_ENV ?? "development";
const DATABASE_URL = process.env.DATABASE_URL

module.exports = {
    NODE_ENV,
    DATABASE_URL
}