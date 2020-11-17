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
})


exports.offermodal = mongoose.model("offermodal",offerSchema);
