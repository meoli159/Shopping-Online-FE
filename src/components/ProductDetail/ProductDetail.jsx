/* eslint-disable react/prop-types */
import './ProductDetail.css';
export const ProductDetail = ({ productId }) => {
  console.log('product detail id :', productId);
  return (
    <div className="view-product">
      <div className="product-img"></div>
      <div className="product-info">ProductDetail Modal {productId}</div>
    </div>
  );
};
