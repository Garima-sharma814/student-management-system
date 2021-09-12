const express = require("express");
const {
  getStudents,
  createStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
