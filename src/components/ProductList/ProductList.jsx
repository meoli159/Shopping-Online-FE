/* eslint-disable react/prop-types */
import './ProductList.css';
import noProduct from '../../assets/no-product-image.jpeg';
export const ProductList = (props) => {
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
