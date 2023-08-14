const withoutEnd = (str: string) : never => {
  while (true) {
    console.log(str);
  }
}

const fail = (msg: string) => { // return type is inferred as 'never'
  throw new Error(msg);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    // input is string
    return true;
  } else if (Array.isArray(input)) {
    // input is number
    return 'Is an Array';
  } else {
    // input is never
    return fail('Unknown input');
  }
}

console.log(example('hello'));
console.log(example([1, 2, 3]));
console.log(example(5)); // throws error
console.log(example('hello after error')); // never gets called
