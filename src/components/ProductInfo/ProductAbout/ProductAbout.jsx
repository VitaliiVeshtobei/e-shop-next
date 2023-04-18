import { useSelector } from 'react-redux';
import { selectProductInfo } from '@/redux/products/selectors';

import { AiOutlineCheck, AiOutlineClose, AiOutlineRedo } from 'react-icons/ai';

import { Title, Btn, Text, Article, DiscountWrap, DiscountPrice, Price, Status, Wrapper } from './ProductAbout.styled';

const ProductAbout = () => {
  const { name_multilang, sku, price, presence, discount } = useSelector(selectProductInfo);

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
      <Title>{name_multilang.uk}</Title>
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
      <Btn>В кошик</Btn>
      <Btn>Купити</Btn>
    </Wrapper>
  );
};

export default ProductAbout;
