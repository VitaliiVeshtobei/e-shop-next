import ProductCard from '../ProductCardAdmin/ProductCardAdmin';
import { AiOutlineCheckStyled, CheckContainer, InputCheckStyled, Item, List } from './ProductsListAdmin.styled';
import { TableAdmin } from '../../TableAdmin/TableAdmin';

const listThead = [
  'Select',
  'Name',
  'Available',
  'Category',
  'Description',
  'Discount',
  'In stock',
  'Price',
  'Quantity in stock',
  'sku',
];

export const ProductsListAdmin = ({ products, isChecked, handleChange, viewWindow }) => {
  return (
    <div>
      {viewWindow && (
        <List>
          {products.map((product) => (
            <Item key={product._id}>
              <ProductCard
                product={product}
                products={products}
              >
                <CheckContainer checked={isChecked(product._id)}>
                  <AiOutlineCheckStyled checked={isChecked(product._id)} />
                  <InputCheckStyled
                    onChange={() => handleChange(product._id)}
                    type="checkbox"
                  />
                </CheckContainer>
              </ProductCard>
            </Item>
          ))}
        </List>
      )}
      {!viewWindow && (
        <TableAdmin listThead={listThead}>
          {products &&
            products.map((item) => (
              <tr
                key={item._id + 'table'}
                onClick={() => handleChange(item._id)}
              >
                <td style={{ position: 'relative' }}>
                  <CheckContainer checked={isChecked(item._id)}>
                    <AiOutlineCheckStyled checked={isChecked(item._id)} />
                    <InputCheckStyled type="checkbox" />
                  </CheckContainer>
                </td>
                <td>{item.name}</td>
                <td>{item.available}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.discount}</td>
                <td>{item.in_stock}</td>
                <td>{item.price}</td>
                <td>{item.quantity_in_stock}</td>
                <td>{item.sku}</td>
              </tr>
            ))}
        </TableAdmin>
      )}
    </div>
  );
};
