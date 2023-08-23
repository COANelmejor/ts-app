import { Product } from './product.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// example of Pick
// type example = Pick<Product, 'color' | 'description' >;
