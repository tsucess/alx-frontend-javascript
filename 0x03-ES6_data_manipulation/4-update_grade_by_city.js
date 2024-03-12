export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((item) => item.location === city).map((item) => ({ ...item, grade: newGrades.filter((g) => g.studentId === item.id).map((g) => g.grade)[0] || 'N/A' }));
}
