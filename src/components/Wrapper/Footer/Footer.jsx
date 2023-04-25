import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaWhatsapp, FaTelegramPlane, FaViber } from 'react-icons/fa';
import { CiPhone, CiLocationOn } from 'react-icons/ci';
import {
  FooterContainer,
  Container,
  LogoContainer,
  ListIconsStyled,
  CategoriesContainer,
  TitleCategories,
  ListCategories,
  ContactsContainer,
  ContactsList,
  ContactsItem,
  ListIconsLink,
  CategoriesLink,
  LogoText,
  CategoriesItem,
  Logo,
} from './FooterStyled';
import navigation from '../../../../public/bd/navigation.json';

const Footer = () => {
  const router = useRouter();
  const path = router.asPath;
  return (
    <FooterContainer>
      <Container>
        <LogoContainer>
          <Logo>
            <Image
              src="/images/logo/logo-victar.svg"
              alt="logo-footer"
              width={70}
              height={70}
            />
            <p>VicTar</p>
          </Logo>
          <LogoText>Victar — Інтернет магазин автозапчастин та аксессуарів</LogoText>
        </LogoContainer>

        <CategoriesContainer>
          <TitleCategories>Карта сайту</TitleCategories>
          <ListCategories>
            {navigation.map((item) => (
              <CategoriesItem key={item.id}>
                <CategoriesLink
                  href={item.path}
                  path={path}
                >
                  {item.category}
                </CategoriesLink>
              </CategoriesItem>
            ))}
          </ListCategories>
        </CategoriesContainer>

        <ContactsContainer>
          <ContactsList>
            <ContactsItem>
              <a href="tel:+380666125324">
                <CiPhone />
                +380 (66) 612-53-24
              </a>
            </ContactsItem>
            <ContactsItem>
              <a
                href="https://goo.gl/maps/1n5zNR8YozQptYxr8"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                <CiLocationOn />
                Київ, Україна
              </a>
            </ContactsItem>
          </ContactsList>
          <ListIconsStyled>
            <li>
              <ListIconsLink
                href="https://t.me/<имя пользователя>"
                color="tg"
              >
                <FaTelegramPlane />
              </ListIconsLink>
            </li>
            <li>
              <ListIconsLink
                href="viber://add?number=380666125324"
                color="vb"
              >
                <FaViber />
              </ListIconsLink>
            </li>
            <li>
              <ListIconsLink
                href="https://wa.me/<номер телефона>"
                color="wt"
              >
                <FaWhatsapp />
              </ListIconsLink>
            </li>
          </ListIconsStyled>
        </ContactsContainer>
      </Container>
    </FooterContainer>
  );
};

export default React.memo(Footer);
