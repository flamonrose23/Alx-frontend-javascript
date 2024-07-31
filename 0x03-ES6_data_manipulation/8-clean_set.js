export default function cleanSet(set, startString) {
  let txt = '';
  const array = [];

  if (startString && typeof startString === 'string') {
    for (const elment of set) {
      if (elment && elment.startsWith(startString)) {
        array.push(elment.slice(startString.length));
      }
    }
    txt = array.join('-');
  }
  return txt;
}
