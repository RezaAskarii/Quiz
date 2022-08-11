export default function getRepeatedInfo(number) {
  let result = null;
  let obj = {};
  let objKey = null;

  for (let i = 0; i < number.toString().length; i++) {
    objKey = number.toString()[i];
    let counter = 0;

    for (let j = 0; j < Number(number.toString()[i]); j++) {
      if (j === 0) {
        counter = number.toString()[i];
      } else {
        counter += number.toString()[i];
      }
    }
    obj[objKey] = counter;
  }
  result = obj;
  return result;
}
