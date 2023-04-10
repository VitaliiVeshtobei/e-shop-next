import ProductCard from './ProductCard/ProductCard';

import { List, Item } from './ProductsList.styled';

const ProductsList = ({ currentItems }) => {
  return (
    <>
      <List>
        {currentItems?.map((item) => (
          <Item key={item.id}>
            <ProductCard
              id={item.id}
              image={item.main_image}
              article={item.sku}
              name={item.name_multilang.uk}
              price={item.price}
              status={item.in_stock}
              discount={item.discount}
            />
          </Item>
        ))}
      </List>
    </>
  );
};

export default ProductsList;
