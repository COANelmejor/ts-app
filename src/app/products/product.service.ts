import { faker } from '@faker-js/faker'

import { Product } from './product.model'
import { CreateProductDto } from './product.dto'

export const products: Product[] = []

export const addProduct = (data: CreateProductDto) : Product => {
  const newProduct: Product = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct)
  return newProduct;
}

export const updatedProduct = (id: string, data: Product) => {
  // code
}

export const getProduct = (id: string) => {
  // code
}

export const deleteProduct = (id: string) => {
  // code
}
