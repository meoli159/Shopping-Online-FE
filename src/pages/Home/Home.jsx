import { ProductList } from '../../components/ProductList/ProductList';

import './Home.css';

const products = [
  {
    id: 1,
    productName: 'test',
    description: 'this is des',
    img: null,
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    productName: 'test',
    description: 'this is des',
    img: null,
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    productName: 'test',
    description: 'this is des',
    img: null,
    price: 100,
    quantity: 1,
  },
  {
    id: 3,
    productName: 'test',
    description: 'this is des',
    img: null,
    price: 100,
    quantity: 1,
  },
  {
    id: 4,
    productName: 'test',
    description: 'this is des',
    img: null,
    price: 100,
    quantity: 1,
  },
  {
    id: 5,
    productName: 'test',
    description: 'this is des',
    img: null,
    price: 100,
    quantity: 1,
  },
  {
    id: 6,
    productName: 'test',
    description: 'this is des',
    img: null,
    price: 100,
    quantity: 1,
  },
];

export const Home = () => {
  return (
    <div className="home_container">
      <div className="product_wrapper">
        <p className="product_title">OUR PRODUCTS</p>

        <ProductList products={products} />
      </div>
    </div>
  );
};
