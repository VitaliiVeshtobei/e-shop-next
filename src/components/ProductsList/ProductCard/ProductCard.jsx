import Image from 'next/image';

import { IoCartOutline } from 'react-icons/io5';

import { Article, Wrapper, ProductName, ProductStatus, Price, Cart, ProductImage } from './ProductCard.styled';

const ProductCard = ({ image, article, name, status, price, id }) => {
  return (
    <Wrapper href={{ pathname: '/product' }}>
      <>
        <Cart>
          <IoCartOutline />
        </Cart>

        <ProductImage
          src={image}
          alt={name}
          width={200}
          height={200}
        />
        <Article>Код: {article}</Article>
        <ProductName>{name}</ProductName>
      </>
      <>
        <ProductStatus status={status}>{status ? 'В наявності' : 'Немає в наявності'}</ProductStatus>
        <Price>{price} грн</Price>
      </>
    </Wrapper>
  );
};

export default ProductCard;
