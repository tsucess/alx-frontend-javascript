export default function getListStudentIds(arrayList) {
  if (Array.isArray(arrayList)) {
    return arrayList.map((obj) => obj.id);
  }

  return [];
}
