import React from 'react';
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
} from './FooterStyled';
import navigation from '../../../../public/bd/navigation.json';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <LogoContainer>
          <Image
            src="/images/logo-footer.png"
            alt="logo-footer"
            width={140}
            height={39}
          />
          <LogoText>Privat-auto — Інтернет магазин автозапчастин та аксессуарів</LogoText>
        </LogoContainer>

        <CategoriesContainer>
          <TitleCategories>Карта сайту</TitleCategories>
          <ListCategories>
            {navigation.map((item) => (
              <CategoriesItem key={item.id}>
                <CategoriesLink href={item.path}>{item.category}</CategoriesLink>
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

export default Footer;
