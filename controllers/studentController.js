const StudentData = require("../models/studentModel");

const getStudents = async (req, res) => {
  // res.send(`<h1>hey this is student page</h1>`);
  try {
    const allStudents = await StudentData.find();
    res.status(200).json(allStudents);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createStudent = async (req, res) => {
  const student = req.body;
  const newStudent = new StudentData (student)
  try { 
    await newStudent.save();
    res.status(201).json(newStudent);
  }
  catch (err) {
    res.status(409).json({ message: err.message })
  }
};

const deleteStudent = async (req, res) => {
  const id = req.params.id;

  try { 
    await StudentData.findByIdAndRemove(id).exec();
    res.send("Succesfully deleted");
  }
  catch (err) {
    console.log(err);
  }
};

module.exports = { getStudents, createStudent, deleteStudent };
