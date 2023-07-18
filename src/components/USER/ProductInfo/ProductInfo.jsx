import { useSelector } from 'react-redux';

import { selectProductInfo } from '@/redux/products/selectors';

import ProductAbout from './ProductAbout/ProductAbout';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductImages from './ProductImages/ProductImages';

import { Wrapper } from './ProductInfo.styled';
import { ProductDescriptionWithComments } from './ProductDescriptionWithComments/ProductDescriptionWithComments';

const ProductInfo = () => {
  const { description_multilang } = useSelector(selectProductInfo);
  return (
    <div style={{ maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto' }}>
      <Wrapper>
        <ProductImages />
        <ProductAbout />
      </Wrapper>
      <ProductDescriptionWithComments />
      {/* {description_multilang?.uk && <ProductDescription />} */}
    </div>
  );
};

export default ProductInfo;
