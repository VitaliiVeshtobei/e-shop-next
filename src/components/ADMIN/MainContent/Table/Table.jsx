import React, { useState } from 'react';

import {
  ImageStyled,
  InputCheckStyled,
  TableStyled,
  TdStyled,
  CheckContainer,
  AiOutlineCheckStyled,
} from './Table.styled';

export const Table = ({ data }) => {
  const [checkedData, setCheckedData] = useState([]);

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
    <TableStyled>
      <thead>
        <tr>
          <TdStyled>Вибрати</TdStyled>
          <TdStyled>Назва категорії</TdStyled>
          <TdStyled>Фото</TdStyled>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <TdStyled>
              <CheckContainer checked={isChecked(item._id)}>
                <AiOutlineCheckStyled checked={isChecked(item._id)} />
                <InputCheckStyled
                  onChange={() => handleChange(item._id)}
                  type="checkbox"
                ></InputCheckStyled>
              </CheckContainer>
            </TdStyled>
            <TdStyled>{item.name}</TdStyled>
            <TdStyled>
              <ImageStyled
                src={item.image}
                alt="Image"
                width={100}
                height={50}
              />
            </TdStyled>
          </tr>
        ))}
      </tbody>
    </TableStyled>
  );
};
