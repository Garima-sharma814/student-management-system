const Student= require("../models/studentModel");

const getStudents = async (req, res) => {
  // res.send(`<h1>hey this is student page</h1>`);
  try {
    const allStudents = await Student.find();
    res.status(200).json(allStudents);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createStudent = async (req, res) => {
  const student = req.body;
  const newStudent = new Student (student)
  try { 
    await newStudent.save();
    res.status(201).json(newStudent);
  }
  catch (err) {
    res.status(409).json({ message: err.message })
  }
};

module.exports = { getStudents, createStudent };
