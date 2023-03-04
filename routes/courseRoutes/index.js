const express = require("express");
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../../controllers/courseController");
const {
  createCourseValidation,
  updateCourseValidaiton,
} = require("./validation");

const router = express.Router();

router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.post("/", createCourseValidation, createCourse);
router.put("/:id", updateCourseValidaiton, updateCourse);
router.delete("/:id", deleteCourse);

module.exports = router;
