const studentModel = require("../models/student");

const { getAll, getById, create, update, delete: deleteStudent } = studentModel;

module.exports = {
  getAllStudents(req, res) {
    const students = getAll();
    res.json(students);
  },

  getStudentById(req, res) {
    const student = getById(req.params.id);
    if (!student) return res.status(404).send("Student not found");
    res.json(student);
  },

  createStudent(req, res) {
    const student = create(req.body);
    res.status(201).json(student);
  },

  updateStudent(req, res) {
    const student = update(req.params.id, req.body);
    if (!student) return res.status(404).send("Student not found");
    res.status(200).json(student);
  },

  deleteStudent(req, res) {
    const deleted = deleteStudent(req.params.id);
    if (!deleted) return res.status(404).send("Student not found");
    res.status(200).json(deleted);
  },
};
