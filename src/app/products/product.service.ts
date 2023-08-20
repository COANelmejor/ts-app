import { Product } from './product.model'

export const products: Product[] = []

export const addProduct = (data: Product) => {
  products.push(data)
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
