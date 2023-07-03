import { IoCartOutline } from 'react-icons/io5';
import placeholder from '../../../../../public/images/placeholder.jpg';

import {
  Article,
  Wrapper,
  ProductName,
  ProductStatus,
  Price,
  Cart,
  ProductImage,
  DiscountPrice,
  DiscountWrap,
  DiscountPercent,
} from './ProductCardAdmin.styled';

const ProductCard = ({ product, children }) => {
  return (
    <>
      <Wrapper>
        <div>
          {product.discount && (
            <DiscountPercent>
              <p>-{Math.ceil((product.discount / product.price) * 100)}%</p>
            </DiscountPercent>
          )}

          <ProductImage
            src={product.image ? product.image : placeholder}
            alt={product.name}
            width={200}
            height={200}
          />
          <Article>Код: {product.sku}</Article>
          <ProductName>{product.name}</ProductName>
        </div>
        <div>
          <ProductStatus status={product.in_stock}>
            {product.in_stock.charAt(0).toUpperCase() + product.in_stock.slice(1)}
          </ProductStatus>
          {product.discount ? (
            <DiscountWrap>
              <DiscountPrice>{product.price - product.discount} грн</DiscountPrice>{' '}
              <Price type="old">{product.price} грн </Price>
            </DiscountWrap>
          ) : (
            <Price>{product.price} грн</Price>
          )}
        </div>
        <Cart inStock={product.in_stock}>
          <IoCartOutline />
        </Cart>
        {children}
      </Wrapper>
    </>
  );
};

export default ProductCard;
