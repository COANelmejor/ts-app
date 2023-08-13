// Usual Array
const prices : (number | string)[] = [10, 20, 30, 'Free'];

// Tuple
let user: [string, number];
user = ['username', 15];
// user = ['username', 15, 20]; // Type '[string, number, number]' is not assignable to type '[string, number]'. Source has 3 element(s) but target allows only 2.
// user = ['username']          // Type '[string]' is not assignable to type '[string, number]'.Source has 1 element(s) but target requires 2.
console.log('user', user);

// Destructuring a Tuple
const [username, age] = user;
console.log('username', username);
console.log('age', age);
