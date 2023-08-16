type Sizes = 'S' | 'M' | 'L' | 'XL';

/*
type Product = {
  id: number | string;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
};
*/

interface Product {
  id: number | string;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}


const products: Product[] = []

products.push({
  id: 1,
  title: 'Camiseta',
  createdAt: new Date(),
  stock: 100,
  size: 'S'
})

const addNewProduct = (data: Product) => {
  products.push(data)
}
