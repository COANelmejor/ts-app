import { addProduct } from "./products/product.service";

addProduct({
  id: 1,
  title: 'Camiseta',
  createdAt: new Date(),
  stock: 100,
  size: 'S'
})
