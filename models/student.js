let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 21 },
  { id: 3, name: "Charlie", age: 22 },
  { id: 4, name: "David", age: 23 },
  { id: 5, name: "Emily", age: 24 },
];

module.exports = {
  getAll: () => students,
  getById: (id) => students.find((s) => s.id === parseInt(id)),
  create: (student) => {
    const id = students.length + 1;
    student.id = id;
    students.push(student);
    return student;
  },
  update: (id, student) => {
    const index = students.findIndex((s) => s.id === parseInt(id));
    if (index === -1) return null;
    students[index] = { ...students[index], ...student };
    return students[index];
  },
  delete: (id) => {
    const index = students.findIndex((s) => s.id === parseInt(id));
    if (index === -1) return null;
    let deleted = students.splice(index, 1);
    return deleted[0];
  },
};
