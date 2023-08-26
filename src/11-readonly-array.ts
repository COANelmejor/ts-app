// const numbers: number[] = [1, 2, 3, 4, 5];
// numbers.push(6);
// numbers.pop();
// numbers.unshift(1);

const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// numbers.push(6);     // Property 'push' does not exist on type 'readonly number[]'.
// numbers.pop();       // Property 'pop' does not exist on type 'readonly number[]'.
// numbers.unshift(1);  // Property 'unshift' does not exist on type 'readonly number[]'.