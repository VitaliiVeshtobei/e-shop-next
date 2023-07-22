import React from 'react';
import {
  CheckContainer,
  AiOutlineCheckStyled,
  InputCheckStyled,
  TrStyled,
  ContainerImg,
  Img,
} from './CategoriesTableBodyAdmin.styled';

export const CategoriesTableBodyAdmin = ({ id, img, category, checkedData, setCheckedData }) => {
  const handleChange = (id) => {
    const checkedIdx = checkedData.findIndex((item) => item === id);

    if (checkedIdx === -1) {
      setCheckedData((prev) => [...prev, id]);
    } else {
      setCheckedData((prev) => prev.filter((item) => item !== id));
    }
  };

  const isChecked = (id) => {
    return checkedData.includes(id);
  };
  return (
    <TrStyled onClick={() => handleChange(id)}>
      <td>
        <CheckContainer checked={isChecked(id)}>
          <AiOutlineCheckStyled checked={isChecked(id)} />
          <InputCheckStyled type="checkbox" />
        </CheckContainer>
      </td>
      <td>{category}</td>
      <td>
        <ContainerImg>
          <Img
            width={100}
            height={100}
            src={img.includes('http') ? img : '/images/pngegg.png'}
            alt={category}
          />
        </ContainerImg>
      </td>
    </TrStyled>
  );
};
