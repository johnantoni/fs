const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthday: Date,
  house: String, // if we were building this out, this should be an ObjectID
  married: Boolean,
  titles: Array,
  height: Number
})

module.exports = mongoose.model('Student', studentSchema)
