const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  yesno: {
    type: String,
  },
  day: {
    type: String,
  },
  location: {
    type: String,
  },
  venue: {
    type: String,
  },
});

module.exports = mongoose.model("Response", ResponseSchema);
