import { useEffect, useState } from 'react';
import { getRecentlyViewed } from '@/localStorage/localStorage';
import {
  Article,
  Img,
  ImgContainer,
  Item,
  List,
  Title,
  Wrapper,
  ProductStatus,
  Price,
  LinkCard,
  DiscountPrice,
  DiscountWrap,
  DiscountPercent,
} from './RecentlyReviewed.styled';

export const RecentlyReviewed = () => {
  const [recentlyReviewed, setRecentlyReviewed] = useState([]);

  useEffect(() => {
    setRecentlyReviewed(getRecentlyViewed());
  }, []);

  const presence = 'available';

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
    <Wrapper>
      <Title>Недавно переглянуті</Title>
      <List>
        {recentlyReviewed &&
          recentlyReviewed.map(({ id, main_image, name, presence, price, discount }) => (
            <Item key={id + name}>
              {discount && (
                <DiscountPercent>
                  <p>-{Math.ceil((discount.value / price) * 100)}%</p>
                </DiscountPercent>
              )}
              <LinkCard href={{ pathname: `/products/${id}` }}>
                <ImgContainer>
                  <Img
                    src={main_image.includes('http') ? main_image : '/images/pngegg.png'}
                    alt={name}
                    layout="fill"
                  />
                </ImgContainer>
                <Article>{name}</Article>
                <ProductStatus status={presence}>{renderSwitch(presence)}</ProductStatus>
                {discount ? (
                  <DiscountWrap>
                    <DiscountPrice>{price - discount.value} грн</DiscountPrice> <Price type="old">{price} грн </Price>
                  </DiscountWrap>
                ) : (
                  <Price>{price} грн</Price>
                )}
              </LinkCard>
            </Item>
          ))}
      </List>
    </Wrapper>
  );
};
