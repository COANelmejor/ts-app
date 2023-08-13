// Use of any
let anyVar: any;
anyVar = 1;
anyVar = 'string';
anyVar = true;
anyVar = null;
anyVar = undefined;

anyVar.doSomething(); // It could no exists. Like in javascript

// ----------------------------

// Use of unknown
let unknownVar: unknown;
unknownVar = 1;
unknownVar = 'string';
unknownVar = true;
unknownVar = null;
unknownVar = undefined;

// unknownVar.doSomething(); // Will not work unless we check the type
if (typeof unknownVar === 'function') {
  unknownVar();
}
if (typeof unknownVar === 'string') {
  let newVar = unknownVar.toUpperCase();
}

const parse = (jsonString: string): unknown => {
  return JSON.parse(jsonString);
}

const result = parse('{"name": "John"}');
// console.log(result.name); // Will not work unless we check the type
if (typeof result === 'object') {
  console.log((result as { name: string }).name); // We also need to cast and check the type
}


