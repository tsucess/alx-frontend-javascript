export default function getStudentsByLocation(arrayList, city) {
  return arrayList.filter((obj) => obj.location === city);
}
