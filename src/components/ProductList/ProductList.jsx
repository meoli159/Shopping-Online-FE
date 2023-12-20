/* eslint-disable react/prop-types */
import './ProductList.css';

import { FaBagShopping } from 'react-icons/fa6';
import { FaEye } from 'react-icons/fa';
import noProduct from '../../assets/no-product-image.jpeg';

export const ProductList = (props) => {
  return (
    <>
      <div className="product_container">
        {props.products.map((product) => {
          return (
            <div className="product_card" key={product.id}>
              <div className="product_card-img">
                <img src={product.image || noProduct} alt="product image" />
                <div className="product_card-actions">
                  <button className="view-detail" onClick={() => props.openProductDetailModal(product.id)}>
                    <FaEye fill="black" />
                  </button>
                  <button className="add-to-cart">
                    <FaBagShopping fill="black" />
                  </button>
                </div>
              </div>
              <div className="product_card-content">
                <p className="product-name">{product.productName}</p>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
