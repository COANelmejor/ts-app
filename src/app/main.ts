import { faker } from '@faker-js/faker'; // importamos el faker en español

import { addProduct, products } from './products/product.service';

for (let i = 0; i < 50; i++) {
  faker.seed(i); // semilla para obtener datos consistentes

  addProduct({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.multiple(faker.commerce.productAdjective, {
      count: { min: 1, max: 5 },
    }),
    price: parseInt(faker.commerce.price({ min: 0, max: 150 }), 10),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    stock: faker.number.int({ min: 0, max: 100 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    category: {
      id: 1,
      name: faker.commerce.department(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    },
  });
}

console.log(products);
