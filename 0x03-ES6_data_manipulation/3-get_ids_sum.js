export default function getStudentsIdsSum(arrayList) {
  return arrayList.reduce((counter, currentObj) => counter + currentObj.id, 0);
}
