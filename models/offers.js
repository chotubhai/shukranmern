const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true,
    },
    validto : {
        type: String,
        required: true,
    },
    headerImg: {
        type:Array,
        required: true
    },
    offerImg: {
        type:Array,
        required: true
    },
    tnc: {
        type:String,
    },
    lang: {
        type: String,
        enum: ["en", "ar"],
        required: true,
        default:"en"
      },
    ref: { //ref to en lang entry
        id: mongoose.SchemaTypes.ObjectId
    }
})


exports.offermodal = mongoose.model("offermodal",offerSchema);
