const mongoose = require("mongoose");
const Cookies = new mongoose.Schema({
  cookies: {
    type: String,
    required: true
  }
}, {
    timestamps: true
});

module.exports = mongoose.model("Cookie", Cookies);
