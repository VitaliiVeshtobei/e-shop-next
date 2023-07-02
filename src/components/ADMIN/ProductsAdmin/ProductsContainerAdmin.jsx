import { useRouter } from 'next/router';
import { OptionButtons } from '../OptionButtons/OptionButtons';
import { Button, HeaderContainer, Wrapper } from './ProductsContainerAdmin.styled';
import { ProductsListAdmin } from './ProductsListAdmin/ProductsListAdmin';
import { useState } from 'react';
import { BsGridFill, BsJustify } from 'react-icons/bs';

export const ProductsContainerAdmin = ({ products }) => {
  const router = useRouter();
  const [checkedData, setCheckedData] = useState([]);
  const [viewWindow, setViewWindow] = useState(false);

  const listBtn = [
    { key: 'create', type: 'button', text: ' Створити продукт', onClick: () => router.push('products/create') },
    {
      key: 'update',
      type: 'button',
      text: ' Редагувати',
      disabled: checkedData.length !== 1,
      onClick: () => router.push({ pathname: 'products/edit', query: { id: checkedData[0] } }),
    },
    {
      key: 'delete',
      type: 'button',
      text: ' Видалити',
      disabled: !checkedData.length,
      onClick: () => console.log('Видалення поки не підключене :('),
    },
  ];

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
    <Wrapper>
      <HeaderContainer>
        <Button
          type="button"
          onClick={() => setViewWindow(!viewWindow)}
        >
          {viewWindow ? <BsJustify /> : <BsGridFill />}
        </Button>
        <div>
          <OptionButtons listBtn={listBtn} />
        </div>
      </HeaderContainer>

      <ProductsListAdmin
        products={products}
        isChecked={isChecked}
        handleChange={handleChange}
        viewWindow={viewWindow}
      />
    </Wrapper>
  );
};
