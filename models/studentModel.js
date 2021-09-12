const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    regId: Number,
    name: String,
    course: String,
    section:{
        type: String,
        default: "A"
    },
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;

