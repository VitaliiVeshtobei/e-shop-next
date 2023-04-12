import Image from 'next/image';

import { IoCartOutline } from 'react-icons/io5';

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
} from './ProductCard.styled';

const ProductCard = ({ image, article, name, price, id, discount, presence }) => {
  const renderSwitch = (param) => {
    switch (param) {
      case 'available':
        return 'В наявності';
      case 'not_available':
        return 'Немає в наявності';
      case 'waiting':
        return 'Очікується';
      default:
        return '';
    }
  };

  return (
    <Wrapper href={{ pathname: `/products/${id}` }}>
      <div>
        <Cart>
          <IoCartOutline />
        </Cart>

        {discount && (
          <DiscountPercent>
            <p>-{Math.ceil((discount.value / price) * 100)}%</p>
          </DiscountPercent>
        )}

        <ProductImage
          src={image}
          alt={name}
          width={200}
          height={200}
        />
        <Article>Код: {article}</Article>
        <ProductName>{name}</ProductName>
      </div>
      <div>
        <ProductStatus status={presence}>{renderSwitch(presence)}</ProductStatus>
        {discount ? (
          <DiscountWrap>
            <DiscountPrice>{price - discount.value} грн</DiscountPrice> <Price type="old">{price} грн </Price>
          </DiscountWrap>
        ) : (
          <Price>{price} грн</Price>
        )}
      </div>
    </Wrapper>
  );
};

export default ProductCard;
