import React, { useEffect, useState } from 'react';
import { ItemCategories, ListCategories, ListCategoriesContainer, LinkStyled, Backdrop } from './MenuCategoriesStyled';
import { selectCategories } from '@/redux/products/selectors';
import { useSelector } from 'react-redux';

export const MenuCategories = ({ handleClick }) => {
  const [categories, setCategories] = useState([]);

  const data = useSelector(selectCategories);
  useEffect(() => {
    setCategories(data);
  }, [data]);

  useEffect(() => {
    window.addEventListener('wheel', noScroll, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('touchmove', noScroll, { passive: false });

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('wheel', noScroll);
      document.removeEventListener('touchmove', noScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const noScroll = (e) => {
    e.preventDefault();
  };

  const onKeyDown = (e) => {
    if (e.code === 'Escape') {
      handleClick();
    }
  };
  return (
    <Backdrop onClick={handleClick}>
      <ListCategoriesContainer>
        <ListCategories>
          {categories.map((item) => (
            <ItemCategories key={item.id}>
              <LinkStyled href={{ pathname: '/products', query: { category: item.id } }}>
                {item.name_multilang.uk}
              </LinkStyled>
            </ItemCategories>
          ))}
        </ListCategories>
      </ListCategoriesContainer>
    </Backdrop>
  );
};
