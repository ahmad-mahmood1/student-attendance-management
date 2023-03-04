let attendances = [
  { id: 1, studentId: 1, courseId: 1, date: "2022-02-15", attended: true },
  { id: 2, studentId: 2, courseId: 1, date: "2022-02-15", attended: false },
  { id: 3, studentId: 3, courseId: 2, date: "2022-02-15", attended: true },
  { id: 4, studentId: 4, courseId: 3, date: "2022-02-15", attended: false },
  { id: 5, studentId: 5, courseId: 4, date: "2022-02-15", attended: true },
];

module.exports = {
  getAttendances: () => {
    return attendances;
  },

  getAttendanceById: (id) => {
    return attendances.find((attendance) => attendance.id === id);
  },

  createAttendance: (attendance) => {
    const newAttendance = {
      id: attendances.length + 1,
      studentId: attendance.studentId,
      courseId: attendance.courseId,
      date: attendance.date,
      attended: attendance.attended,
    };
    attendances.push(newAttendance);
    return newAttendance;
  },

  updateAttendance: (id, updatedAttendance) => {
    let attendance = attendances.find((a) => a.id === id);
    if (!attendance) return null;
    attendance = { ...attendance, ...updatedAttendance };
    return attendance;
  },

  deleteAttendance: (id) => {
    const attendance = attendances.find((a) => a.id === id);
    if (!attendance) return null;
    attendances = attendances.filter((a) => a.id !== id);
    return attendance;
  },
};
