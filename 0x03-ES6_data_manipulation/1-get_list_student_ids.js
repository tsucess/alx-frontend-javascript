export default function getListStudentIds(arrayList) {
  if (Array.isArray(arrayList)) {
    return arrayLits.map((obj) => obj.id);
  }

  return [];
}
