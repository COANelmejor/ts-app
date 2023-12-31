import { faker } from '@faker-js/faker'

import { Product } from './product.model'
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto'

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

export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex((product) => product.id === id)
  if (index === -1) {
    throw new Error('Product not found')
  }
  const product = products[index]
  products[index] = {
    ...product,
    ...changes,
    updatedAt: new Date(),
  }
  return products[index]
}

export const getProduct = (id: string) => {
  // code
}

export const findProducts = (query: FindProductDto): Product[] => {
  // code
  return []
}

export const deleteProduct = (id: string) => {
  // code
}
