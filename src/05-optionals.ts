export const createProduct = (
  id: string | number,
  // stock?: number, // A required parameter cannot follow an optional parameter. Not allowed to have optional parameter in the middle if there is a required parameter after it
  isNew: boolean,
  stock?: number,
) =>  {
 return {
  id,
  // stock: stock || 0, // 0 is falsy, so it will be replaced by the default value if stock is not provided.
  stock: stock ?? 0, // this syntax is better than the above one, because it will set 0 as the default value only if stock is undefined or null
  isNew,
 }
}

const p1 = createProduct(1, true, 10);
console.log(p1);

const p2 = createProduct(2, false);
console.log(p2);

const p3 = createProduct(3, true, undefined);
console.log(p3);

