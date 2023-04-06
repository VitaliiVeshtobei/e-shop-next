import { Img, Item, ItemLink, ContainerImg } from './CategoriesCard.styled';
// import image from '../../../assets/images/pngegg.png';

export const CategoriesCard = ({ id, img, category }) => {
  return (
    <Item
      key={id}
      id={id}
    >
      <ItemLink href={{ pathname: '/products', query: { category: id } }}>
        <ContainerImg>
          <Img
            width={1000}
            height={1000}
            priority={true}
            src={img.includes('http') ? img : '/images/pngegg.png'}
            alt={category}
          />
        </ContainerImg>

        <p>{category}</p>
      </ItemLink>
    </Item>
  );
};
