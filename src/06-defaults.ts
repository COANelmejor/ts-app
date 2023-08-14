export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock: number = 0, // default value. If not provided, it will be 0
) =>  {
 return {
  id,
  stock,
  isNew,
 }
}

const p1 = createProduct(1, true, 10);
console.log(p1);

const p2 = createProduct(2, false);
console.log(p2);

const p3 = createProduct(3, true, undefined);
console.log(p3);
