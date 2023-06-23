import {
  Img,
  Item,
  ContainerImg,
  CardContainer,
  AiOutlineCheckStyled,
  InputCheckStyled,
  CheckContainer,
} from './CategoriesCardAdmin.styled';

export const CategoriesCardAdmin = ({ id, img, category, checkedData, setCheckedData }) => {
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
    <Item key={id}>
      <CardContainer>
        <ContainerImg>
          <Img
            width={200}
            height={200}
            src={img.includes('http') ? img : '/images/pngegg.png'}
            alt={category}
          />
        </ContainerImg>

        <p>{category}</p>
      </CardContainer>
      <CheckContainer checked={isChecked(id)}>
        <AiOutlineCheckStyled checked={isChecked(id)} />
        <InputCheckStyled
          onChange={() => handleChange(id)}
          type="checkbox"
        ></InputCheckStyled>
      </CheckContainer>
    </Item>
  );
};
