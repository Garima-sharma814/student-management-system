const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    regId: Number,
    name: String,
    course: String,
    address: String
});

const studentModel = mongoose.model("student", studentSchema);

export default studentModel;

