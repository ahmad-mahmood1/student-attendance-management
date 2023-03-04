let courses = [
  { id: 1, name: 'Maths', description: 'Basic mathematics course' },
  { id: 2, name: 'Science', description: 'Basic science course' },
  { id: 3, name: 'History', description: 'Basic history course' },
  { id: 4, name: 'English', description: 'Basic English course' },
  { id: 5, name: 'Art', description: 'Basic art course' }
];

module.exports = {
  getCourses: () => {
    return courses;
  },

  getCourseById: (id) => {
    return courses.find(course => course.id === id);
  },

  createCourse: (course) => {
    const newCourse = {
      id: courses.length + 1,
      name: course.name,
      description: course.description
    };
    courses.push(newCourse);
    return newCourse;
  },

  updateCourse: (id, updatedCourse) => {
    const course = courses.find(c => c.id === id);
    if (!course) return null;
    course.name = updatedCourse.name;
    course.description = updatedCourse.description;
    return course;
  },

  deleteCourse: (id) => {
    const course = courses.find(c => c.id === id);
    if (!course) return null;
    courses = courses.filter(c => c.id !== id);
    return course;
  }
};
