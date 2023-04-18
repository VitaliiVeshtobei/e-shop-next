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
import { useDispatch } from 'react-redux';
import { addCart } from '@/redux/products/slice';
import { useEffect, useState } from 'react';
import { getCartLocal } from '@/localStorage/localStorage';


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
  const [inCart, setInCart] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const cartLocal = getCartLocal();
    if (!cartLocal) return;
    const productInCart = cartLocal.find((product) => product.id === id);
    if (productInCart) {
      setInCart(true);
    }
  }, [id]);

  const cartClick = () => {
    const priceProduct = discount ? price - discount.value : price;
    dispatch(addCart({ image, name, price: priceProduct, id }));
    setInCart((prev) => !prev);
  };

  return (
  <>
    <Wrapper href={{ pathname: `/products/${id}` }}>
      <div>
        

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
    <Cart
        onClick={cartClick}
        inCart={inCart}
      >
        <IoCartOutline />
      </Cart>
     </>

  );
};

export default ProductCard;
