/* eslint-disable react/prop-types */
import './ProductList.css';
import { useNavigate } from 'react-router-dom';
import { FaBagShopping } from 'react-icons/fa6';
import { FaEye } from 'react-icons/fa';
import noProduct from '../../assets/no-product-image.jpeg';
export const ProductList = (props) => {
  const navigate = useNavigate();
  const viewProductHandler = (event) => {
    const id = event.currentTarget.id;
    navigate(`/product/${id}`);
    console.log(id);
  };
  return (
    <div className="product_container">
      {props.products.map((product) => {
        return (
          <div className="product_card" key={product.id}>
            <div className="product_card-img">
              {!product.image ? (
                <img src={noProduct} alt="product image" />
              ) : (
                <img src={product.image} alt="product image" />
              )}
              <div className="product_card-actions">
                <button id={product.id} className="view-detail" onClick={viewProductHandler}>
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
  );
};
