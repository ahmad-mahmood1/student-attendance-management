const {
  getAttendances,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance,
} = require("../models/attendance");

module.exports = {
  getAllAttendances(req, res) {
    const attendances = getAttendances();
    res.status(200).json(attendances);
  },

  getAttendanceById(req, res) {
    const id = parseInt(req.params.id);
    const attendance = getAttendanceById(id);
    if (!attendance) {
      return res.status(404).json({ message: "Attendance not found" });
    }
    res.status(200).json(attendance);
  },

  createAttendance(req, res) {
    const attendance = req.body;
    const newAttendance = createAttendance(attendance);
    res.status(201).json(newAttendance);
  },

  updateAttendance(req, res) {
    const id = parseInt(req.params.id);
    const updatedAttendance = req.body;
    const attendance = updateAttendance(id, updatedAttendance);
    if (!attendance) {
      return res.status(404).json({ message: "Attendance not found" });
    }
    res.status(200).json(attendance);
  },

  deleteAttendance(req, res) {
    const id = parseInt(req.params.id);
    const attendance = deleteAttendance(id);
    if (!attendance) {
      return res.status(404).json({ message: "Attendance not found" });
    }
    res.status(200).json(attendance);
  },
};
