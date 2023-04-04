import { Img, Item, ItemLink, ContainerImg } from './CategoriesCard.styled';
import image from '../../../assets/images/pngegg.png';

export const CategoriesCard = ({ id, img, category }) => {
  console.log(category);
  return (
    <Item
      key={id}
      id={id}
    >
      <ItemLink>
        <ContainerImg>
          <Img
            src={img.includes('http') ? img : image}
            alt={category}
          />
        </ContainerImg>

        <p>{category}</p>
      </ItemLink>
    </Item>
  );
};
