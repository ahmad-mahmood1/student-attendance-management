const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../../controllers/studentController");
const {
  validateStudentCreation,
  validateStudentUpdation,
} = require("./validation");

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", validateStudentCreation, createStudent);
router.put("/:id", validateStudentUpdation, updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
