// Nico => [N,i,c,o]
// [N,i,c,o] => Nico

export function parseStr(input: string | string[]) : string | string[] {
  if (Array.isArray(input)) {
    return input.join('') // return string
  } else {
    return input.split('') // return string[]
  }
}

const resultArr = parseStr(['N', 'i', 'c', 'o']); // 'Nico'
const resultStr = parseStr('Nico'); // ['N', 'i', 'c', 'o']

console.log('resultArr', resultArr);
console.log('resultStr', resultStr);

// Some methods are not available on both types so it needs to be checked before using it

// console.log(resultArr.join('').toLowerCase()); // Property 'join' does not exist on type 'string | string[]'. | Property 'join' does not exist on type 'string'.
if (Array.isArray(resultArr)) {
  console.log(resultArr.join('').toLowerCase()); // nico
}

// console.log(resultStr.toLowerCase()); // Property 'toLowerCase' does not exist on type 'string | string[]'. | Property 'toLowerCase' does not exist on type 'string[]'
if (typeof resultStr === 'string') {
  console.log(resultStr.toLowerCase()); // nico
}
