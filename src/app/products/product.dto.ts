import { Product } from './product.model';
import { findProducts } from './product.service';

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// Example of Pick
type examplePick = Pick<Product, 'color' | 'description' >;

export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Example of Required
type exampleRequired = Required<CreateProductDto>;

export interface FindProductDto extends Readonly<Partial<Product>> {}

// Example of Readonly
type exampleReadonly = Readonly<Product>;