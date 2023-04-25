const mongoose = require("mongoose");
const Response = require("../models/Response.js");
const responseSeeds = require("./responseSeeds.json");
require("dotenv").config();
console.log("MONGO URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.once("open", async () => {
  try {
    await Response.deleteMany({});
    await Response.create(responseSeeds);
    console.log("All done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

db.on("error", (err) => {
  console.error(err);
  process.exit(1);
});
