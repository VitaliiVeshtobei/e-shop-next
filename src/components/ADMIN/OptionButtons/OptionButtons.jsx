import React from 'react';

import { ListButtonsStyled, OptionBtnStyled } from './OptionButtons.styled';

export const OptionButtons = ({ listBtn }) => {
  return (
    <ListButtonsStyled>
      {listBtn &&
        listBtn.map(({ key, type, onClick, text, disabled }) => (
          <li key={key}>
            <OptionBtnStyled
              disabled={disabled}
              type={type}
              onClick={onClick}
            >
              {text}
            </OptionBtnStyled>
          </li>
        ))}
    </ListButtonsStyled>
  );
};
