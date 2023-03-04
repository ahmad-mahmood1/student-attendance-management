const express = require("express");
const router = express.Router();

const {
  getAllAttendances,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance,
} = require("../../controllers/attendanceController");
const {
  createAttendanceValidation,
  updateAttendanceValidation,
} = require("./validation");

router.get("/", getAllAttendances);
router.get("/:id", getAttendanceById);
router.post("/", createAttendanceValidation, createAttendance);
router.put("/:id", updateAttendanceValidation, updateAttendance);
router.delete("/:id", deleteAttendance);

module.exports = router;
