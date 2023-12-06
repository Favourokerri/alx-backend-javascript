export default function getStudentsByLocation(students, location) {
  const studentInLocation = students.filter((student) => student.location === location);
  return studentInLocation;
}
