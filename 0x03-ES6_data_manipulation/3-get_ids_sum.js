export default function getStudentIdsSum(list) {
  return list.reduce((count, currentObj) => count + currentObj.id, 0);
}
