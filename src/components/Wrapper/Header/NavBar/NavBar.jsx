import React, { useState } from "react";
// import { useSelector } from 'react-redux';
// import { selectCategories } from '../../../../redux/porducts/selectors';
import MenuCategories from "./MenuCategories/MenuCategories";
import { useRouter } from "next/router";
import {
  ButtonCategories,
  Container,
  ListContainer,
  ItemContainer,
  NavLinkStyled,
} from "./NavBarStyled";

// const list = [
//   {
//     id: 1,
//     category: 'Підрульові шлейфи',
//   },
//   {
//     id: 2,
//     category: 'Бризговики автомобільні',
//   },
//   {
//     id: 3,
//     category: 'Круїз контроль комплект Toyota',
//   },
//   {
//     id: 4,
//     category: 'Проблискові маячки',
//   },
//   {
//     id: 5,
//     category: 'Ручки перемикання передач',
//   },
//   {
//     id: 6,

//     category: 'Накладки на педалі',
//   },
//   {
//     id: 7,
//     category: 'Кнопки руля',
//   },
//   {
//     id: 8,
//     category: 'Модуль складання дзеркала',
//   },
// ];
const menu = [
  {
    id: 1,
    category: "Головна",
  },
  {
    id: 2,
    category: "Всі товари",
  },
  {
    id: 3,
    category: "Відгуки",
  },
  {
    id: 4,
    category: "Контакти",
  },
  {
    id: 5,
    category: "Про нас",
  },
  {
    id: 6,

    category: "Доставка і оплата",
  },
];

const NavBar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [nameButton, setNameButton] = useState(null);

  // const data = useSelector(selectCategories);
  const router = useRouter();

  const handleClick = (e) => {
    const btn = e.target.name;
    if (showCategories && btn !== nameButton) return;
    setNameButton(btn);
    setShowCategories((prev) => !prev);
  };
  return (
    <>
      <Container>
        <ButtonCategories name="Categories" type="button" onClick={handleClick}>
          Каталог товарів
        </ButtonCategories>
        <ButtonCategories name="Menu" type="button" onClick={handleClick}>
          Меню
        </ButtonCategories>
        <ListContainer>
          {menu.map((item) => (
            <ItemContainer key={item.id}>
              <NavLinkStyled onClick={() => router.push("/products")}>
                {item.category}
              </NavLinkStyled>
            </ItemContainer>
          ))}
        </ListContainer>
      </Container>
      {showCategories && (
        <MenuCategories
          handleClick={handleClick}
          data={nameButton === "Menu" ? menu : data}
          nameButton={nameButton}
        />
      )}
    </>
  );
};

export default NavBar;
