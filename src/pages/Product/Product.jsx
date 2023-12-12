import { useParams } from 'react-router-dom';

export const Product = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};
