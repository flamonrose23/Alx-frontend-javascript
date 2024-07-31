export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const [key, valour] of map) {
      if (valour === 1) {
        map.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return map;
}
