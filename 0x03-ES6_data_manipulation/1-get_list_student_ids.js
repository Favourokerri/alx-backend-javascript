export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const id = students.map((student) => student.id);
  return id;
}
