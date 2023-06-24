import ProductCard from '../ProductCardAdmin/ProductCardAdmin';
import { Item, List } from './ProductsListAdmin.styled';

export const ProductsListAdmin = ({ products }) => {
  return (
    <div>
      <List>
        {products.map((product) => (
          <Item key={product._id}>
            <ProductCard
              product={product}
              products={products}
            />
          </Item>
        ))}
      </List>
    </div>
  );
};
