// Nico => [N,i,c,o]
// [N,i,c,o] => Nico

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: unknown): boolean; // Always use the most generic type as the last overload. Is a good practice

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // return string
  } else if (typeof input === 'string') {
    return input.split(''); // return string[]
  } else {
    return false;
  }
}

const resultFromArr = parseStr(['N', 'i', 'c', 'o']); // 'Nico'
const resultFromStr = parseStr('Nico'); // ['N', 'i', 'c', 'o']

console.log('resultArr', resultFromArr);
console.log('resultStr', resultFromStr);

// Because of the overloading, we can access to the methods of the type

console.log(resultFromStr.join('').toLowerCase()); // nico
console.log(resultFromArr.toLowerCase()); // nico

const resultFromNumber = parseStr(123); // undefined
console.log('resultFromNumber', resultFromNumber); // false
