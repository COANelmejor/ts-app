import { Product } from './product.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// Example of Pick
type examplePick = Pick<Product, 'color' | 'description' >;

export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Example of Required
type exampleRequired = Required<CreateProductDto>;
