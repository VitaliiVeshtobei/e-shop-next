import { useRouter } from 'next/router';
import { OptionButtons } from '../OptionButtons/OptionButtons';
import { Wrapper } from './ProductsContainerAdmin.styled';
import { ProductsListAdmin } from './ProductsListAdmin/ProductsListAdmin';

export const ProductsContainerAdmin = ({ products }) => {
  const router = useRouter();
  const listBtn = [
    { key: 'create', type: 'button', text: ' Створити продукт', onClick: () => router.push('products/create') },
    { key: 'update', type: 'button', text: ' Редагувати', onClick: () => console.log('Я вже скоро буду працювати :)') },
    { key: 'delete', type: 'button', text: ' Видалити', onClick: () => console.log('Видалення поки не підключене :(') },
  ];

  return (
    <Wrapper>
      <OptionButtons listBtn={listBtn} />
      <ProductsListAdmin products={products} />;
    </Wrapper>
  );
};
