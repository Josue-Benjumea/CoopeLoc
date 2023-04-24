const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    cc: { type: Number, required: true },
    firtsName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    numberPhone: { type: Number, required: true },
    query: { type: String, required: true },
  },
  {
    versionKey: false,
    timeseries: true,
  }
);

module.exports = mongoose.model("user", userSchema);
