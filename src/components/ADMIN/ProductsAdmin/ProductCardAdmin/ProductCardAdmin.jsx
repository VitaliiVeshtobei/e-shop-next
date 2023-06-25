import { IoCartOutline } from 'react-icons/io5';
import placeholder from '../../../../../public/images/placeholder.jpg';

import {
  Article,
  Wrapper,
  ProductName,
  ProductStatus,
  Price,
  Cart,
  ProductImage,
  DiscountPrice,
  DiscountWrap,
  DiscountPercent,
  CheckContainer,
  AiOutlineCheckStyled,
  InputCheckStyled,
} from './ProductCardAdmin.styled';
import { useState } from 'react';

const ProductCard = ({ product, products }) => {
  // const res = {
  //   available: true,
  //   category: '645df47070d882a852130043',
  //   currency: 'UAH',
  //   description: 'Супер гарне світило',
  //   discount: 10,
  //   images: (2)[('http:image.test.ua', 'http:image.test2.ua')],
  //   in_stock: 'в наявності',
  //   name: 'Ліхтар',
  //   price: 500,
  //   quantity_in_stock: 30,
  //   sku: 'KJH123',
  // };

  const [checkedData, setCheckedData] = useState([]);

  const handleChange = (id) => {
    const checkedIdx = checkedData.findIndex((item) => item === id);
    console.log(checkedIdx);
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
    <>
      <Wrapper>
        <div>
          {product.discount && (
            <DiscountPercent>
              <p>-{Math.ceil((product.discount / product.price) * 100)}%</p>
            </DiscountPercent>
          )}

          <ProductImage
            src={product.image ? product.image : placeholder}
            alt={product.name}
            width={200}
            height={200}
          />
          <Article>Код: {product.sku}</Article>
          <ProductName>{product.name}</ProductName>
        </div>
        <div>
          <ProductStatus status={product.in_stock}>
            {product.in_stock.charAt(0).toUpperCase() + product.in_stock.slice(1)}
          </ProductStatus>
          {product.discount ? (
            <DiscountWrap>
              <DiscountPrice>{product.price - product.discount} грн</DiscountPrice>{' '}
              <Price type="old">{product.price} грн </Price>
            </DiscountWrap>
          ) : (
            <Price>{product.price} грн</Price>
          )}
        </div>
        <Cart inStock={product.in_stock}>
          <IoCartOutline />
        </Cart>

        <CheckContainer checked={isChecked(product._id)}>
          <AiOutlineCheckStyled checked={isChecked(product._id)} />
          <InputCheckStyled
            onChange={() => handleChange(product._id)}
            type="checkbox"
          ></InputCheckStyled>
        </CheckContainer>
      </Wrapper>
    </>
  );
};

export default ProductCard;
