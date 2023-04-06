import Image from 'next/image';
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
          <Image
            width={200}
            height={200}
            src={img.includes('http') ? img : '/images/pngegg.png'}
            alt={category}
            priority
          />
        </ContainerImg>

        <p>{category}</p>
      </ItemLink>
    </Item>
  );
};
