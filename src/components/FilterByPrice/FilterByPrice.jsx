import React, { useState } from 'react';
import { BtnStyled, Container, ListBtn } from './FilterByPrice.styled';

export const FilterByPrice = () => {
  const [activeCheapBtn, setActiveCheapBtn] = useState(false);
  const [activeExpensiveBtn, setActiveExpensiveBtn] = useState(false);

  const handleClick = (e) => {
    const buttonName = e.target.name;
    if (buttonName === 'cheap') {
      setActiveCheapBtn(true);
      setActiveExpensiveBtn(false);
      return;
    }
    setActiveExpensiveBtn(true);
    setActiveCheapBtn(false);
  };
  return (
    <Container>
      <ListBtn>
        <li>
          <BtnStyled
            onClick={handleClick}
            name="cheap"
            activeBtn={activeCheapBtn}
          >
            Дешевше
          </BtnStyled>
        </li>
        <li>
          <BtnStyled
            onClick={handleClick}
            name="expensive"
            activeBtn={activeExpensiveBtn}
          >
            Дорожче
          </BtnStyled>
        </li>
      </ListBtn>
    </Container>
  );
};
