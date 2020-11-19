const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  validto: {
    type: Date,
    required: true,
  },
  headerImg: {
    type: Array,
    required: true,
  },
  offerImg: {
    type: Array,
    required: true,
  },
  tnc: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    enum: ["en", "ar"],
    required: true,
  },
});

exports.eventsmodal = mongoose.model("eventsmodal", eventsSchema);
