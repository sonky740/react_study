import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 'p1',
    title: 'Product 1',
    description: 'This is a product!',
  },
  {
    id: 'p2',
    title: 'Product 2',
    description: 'This is another product!',
  },
  {
    id: 'p3',
    title: 'Product 3',
    description: 'This is a third product!',
  },
];

export default function Products() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
