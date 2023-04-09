import React, { useState } from "react";
import { BtnStyled, Container, ListBtn } from "./FilterByPrice.styled";

export const FilterByPrice = () => {
  const [activeBtn, setActiveBtn] = useState(false);

  const handleClick = (e) => {
    const buttonText = e.target.innerText;
    setActiveBtn(buttonText);
  };
  return (
    <Container>
      <ListBtn>
        <li>
          <BtnStyled onClick={handleClick}>Дешевше</BtnStyled>
        </li>
        <li>
          <BtnStyled onClick={handleClick}>Дорожче</BtnStyled>
        </li>
      </ListBtn>
    </Container>
  );
};
