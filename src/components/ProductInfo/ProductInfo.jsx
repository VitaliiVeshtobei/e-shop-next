import ProductAbout from './ProductAbout/ProductAbout';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductImages from './ProductImages/ProductImages';

import { Wrapper } from './ProductInfo.styled';

const ProductInfo = () => {
  return (
    <div style={{ maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto' }}>
      <Wrapper>
        <ProductImages />
        <ProductAbout />
      </Wrapper>
      <ProductDescription />
    </div>
  );
};

export default ProductInfo;
