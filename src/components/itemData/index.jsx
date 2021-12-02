import faker from "faker";

export const itemDataa = [...Array(4)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.random.image(),
  inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
}));
