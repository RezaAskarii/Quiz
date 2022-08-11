export default function removerRepetitive(string) {
  let result = null;
  let previous;
  for (let i = 0; i < string.length; i++) {
    previous = string[i] !== string[i + 1];
    if (previous) {
      if (result === null) {
        result = string[i];
      } else {
        result += string[i];
      }
    }
  }

  return result;
}
