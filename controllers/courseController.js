const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../models/course");

module.exports = {
  getAllCourses(req, res) {
    const courses = getCourses();
    res.status(200).json(courses);
  },

  getCourseById(req, res) {
    const id = parseInt(req.params.id);
    const course = getCourseById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  },

  createCourse(req, res) {
    const course = req.body;
    const newCourse = createCourse(course);
    res.status(201).json(newCourse);
  },

  updateCourse(req, res) {
    const id = parseInt(req.params.id);
    const updatedCourse = req.body;
    const course = updateCourse(id, updatedCourse);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  },

  deleteCourse(req, res) {
    const id = parseInt(req.params.id);
    const course = deleteCourse(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  },
};
