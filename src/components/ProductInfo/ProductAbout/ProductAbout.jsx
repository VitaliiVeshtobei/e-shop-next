import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { AiOutlineCheck, AiOutlineClose, AiOutlineRedo } from 'react-icons/ai';

import { addCart } from '@/redux/products/slice';
import { selectProductInfo } from '@/redux/products/selectors';
import { getCartLocal } from '@/localStorage/localStorage';

import { Title, Btn, Text, Article, DiscountWrap, DiscountPrice, Price, Status, Wrapper } from './ProductAbout.styled';

const ProductAbout = () => {
  const [name, setName] = useState('');
  const [inCart, setInCart] = useState(false);
  const [inStock, setInStock] = useState('available');

  const dispatch = useDispatch();
  const router = useRouter();
  const { name_multilang, sku, price, presence, discount, id, main_image } = useSelector(selectProductInfo);

  useEffect(() => {
    setName(name_multilang);
    setInStock(presence);
  }, [name_multilang, presence]);

  useEffect(() => {
    const cartLocal = getCartLocal();
    if (!cartLocal) return;
    const productInCart = cartLocal.find((product) => product.id === id);
    if (productInCart) {
      return setInCart(true);
    }
    setInCart(false);
  }, [id]);

  const onInCartBtnClick = () => {
    const priceProduct = discount ? price - discount.value : price;
    dispatch(addCart({ image: main_image, name: name.uk, price: priceProduct, id }));
    setInCart((prev) => !prev);
  };

  const onBuyBtnClick = () => {
    const priceProduct = discount ? price - discount.value : price;
    if (inCart) {
      router.push('/cart');
      return;
    }
    dispatch(addCart({ image: main_image, name: name.uk, price: priceProduct, id }));
    setInCart((prev) => !prev);
    router.push('/cart');
  };

  const renderSwitch = (param) => {
    switch (param) {
      case 'available':
        return (
          <>
            <AiOutlineCheck />В наявності
          </>
        );

      case 'not_available':
        return (
          <>
            <AiOutlineClose /> Немає в наявності
          </>
        );
      case 'waiting':
        return (
          <>
            <AiOutlineRedo /> Очікується
          </>
        );
      default:
        return '';
    }
  };

  return (
    <Wrapper>
      <Title>{name.uk}</Title>
      <Article>
        <span> Код: </span>
        {sku}
      </Article>
      {discount ? (
        <DiscountWrap>
          <DiscountPrice>{price - discount.value} грн</DiscountPrice> <Price type="old">{price} грн </Price>
        </DiscountWrap>
      ) : (
        <Price>{price} грн</Price>
      )}
      <Status status={presence}>
        <span>Статус товару: </span>
        {renderSwitch(presence)}
      </Status>
      <Text>
        Умови повернення: <br />
        Повернення товару протягом 14 днів за домовленністю
      </Text>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Btn
          type="button"
          disabled={inStock === 'available' ? false : true}
          onClick={onInCartBtnClick}
          inCart={inCart}
          inStock={inStock}
        >
          {inCart ? 'В кошику' : 'В кошик'}
        </Btn>
        <Btn
          type="button"
          onClick={onBuyBtnClick}
          inStock={inStock}
          disabled={inStock === 'available' ? false : true}
        >
          Купити
        </Btn>
      </div>
    </Wrapper>
  );
};

export default ProductAbout;
