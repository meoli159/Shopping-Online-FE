import { useState } from 'react';
import { ProductList } from '../../components/ProductList/ProductList';
import { ProductDetail } from '../../components/ProductDetail/ProductDetail';
import { Modal } from '../../components/Modal/Modal';
export const Product = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const showModalHandler = (id) => {
    setSelectedProductId(id);
    setModalIsVisible(true);
  };

  const hideModalHandler = () => {
    setSelectedProductId(null);
    setModalIsVisible(false);
  };

  return (
    <>
      <p className="product_title">OUR PRODUCTS</p>
      <ProductList openProductDetailModal={showModalHandler} products={products} />
      {modalIsVisible && selectedProductId && (
        <Modal onClose={hideModalHandler}>
          <ProductDetail productId={selectedProductId} />
        </Modal>
      )}
    </>
  );
};

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
  {
    id: 7,
    productName: 'test',
    description: 'this is des',
    img: null,
    price: 100,
    quantity: 1,
  },
  {
    id: 8,
    productName: 'test',
    description: 'this is des',
    img: null,
    price: 100,
    quantity: 1,
  },
];
