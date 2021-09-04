const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    regId: Number,
    name: String,
    course: String,
    address: String,
    section:{
        type: String,
        default: "A"
    },
    subjects: [String]
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;

