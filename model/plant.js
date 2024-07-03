const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const plantSchema = new Schema({
  common_name: String,
  scientific_name: String,
  family: String,
  description: String,
});
module.exports = mongoose.model("plant", plantSchema);
