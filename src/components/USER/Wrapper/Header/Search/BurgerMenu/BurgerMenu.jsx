import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Backdrop,
  Container,
  ContainerSvg,
  MainList,
  MainListItem,
  ContainerText,
  InfoList,
  InfoListItem,
  LinkStyled,
} from './BurgerMenu.styled';
import { IoPersonOutline, IoCartOutline, IoAppsOutline, IoHomeOutline } from 'react-icons/io5';

import { TbCategory } from 'react-icons/tb';
import navigation from '../../../../../../../public/bd/navigation.json';

export const BurgerMenu = ({ handleClickBurger, handleClickCatalog, onUserClick }) => {
  const router = useRouter();
  const path = router.asPath;

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
      handleClickBurger();
    }
  };

  const handleClick = () => {
    handleClickBurger();
    handleClickCatalog();
  };
  return (
    <Backdrop onClick={handleClickBurger}>
      <Container>
        <MainList>
          <MainListItem>
            <button
              type="button"
              onClick={onUserClick}
            >
              <ContainerSvg>
                <IoPersonOutline />
              </ContainerSvg>
              Авторизація
            </button>
          </MainListItem>
          <MainListItem>
            <button
              type="button"
              onClick={() => router.push('/')}
            >
              <ContainerSvg>
                <IoHomeOutline />
              </ContainerSvg>
              Головна сторінка
            </button>
          </MainListItem>
          <MainListItem>
            <button
              type="button"
              onClick={handleClick}
            >
              <ContainerSvg>
                <TbCategory />
              </ContainerSvg>
              Каталог товарів
            </button>
          </MainListItem>
          <MainListItem>
            <button
              type="button"
              onClick={() => router.push('/products?category=all')}
            >
              <ContainerSvg>
                <IoAppsOutline />
              </ContainerSvg>
              Всі товари
            </button>
          </MainListItem>
          <MainListItem>
            <button
              type="button"
              onClick={() => router.push('/cart')}
            >
              <ContainerSvg>
                <IoCartOutline />
              </ContainerSvg>
              Корзина
            </button>
          </MainListItem>
        </MainList>
        <ContainerText>
          <h3>Інформація о компанії</h3>
        </ContainerText>
        <InfoList>
          {navigation.map((item, idx) => {
            if (idx < 2) return;
            return (
              <InfoListItem key={item.id}>
                <LinkStyled
                  href={item.path}
                  path={path}
                >
                  {item.category}
                </LinkStyled>
              </InfoListItem>
            );
          })}
        </InfoList>
      </Container>
    </Backdrop>
  );
};
