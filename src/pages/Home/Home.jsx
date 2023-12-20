import { Product } from '../Product/Product';
import './Home.css';

export const Home = () => {
  return (
    <div className="home_container">
      <div className="carousel_wrapper"></div>
      <div className="product_wrapper">
        <Product />
      </div>
    </div>
  );
};
