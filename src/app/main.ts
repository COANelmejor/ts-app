import { addProduct } from "./products/product.service";

addProduct({
  id: 1,
  title: 'Shirt',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 100,
  size: 'S',
  category: {
    id: 1,
    name: 'Clothes',
    createdAt: new Date(),
    updatedAt: new Date()
  }
})
