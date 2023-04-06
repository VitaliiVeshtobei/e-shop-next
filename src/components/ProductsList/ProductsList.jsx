import { useSelector } from 'react-redux';

import ProductCard from './ProductCard/ProductCard';
import { selectProductsByCategory } from '@/redux/products/selectors';

import { List, Item } from './ProductsList.styled';

const ProductsList = () => {
  const products = useSelector(selectProductsByCategory);

  return (
    <>
      <List>
        {products?.map((item) => (
          <Item key={item.id}>
            <ProductCard
              id={item.id}
              image={item.main_image}
              article={item.sku}
              name={item.name}
              price={item.price}
              status={item.in_stock}
            />
          </Item>
        ))}
      </List>
    </>
  );
};

export default ProductsList;
