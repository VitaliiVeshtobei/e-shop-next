import ProductAbout from './ProductAbout/ProductAbout';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductImages from './ProductImages/ProductImages';

const ProductInfo = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <ProductImages />
        <ProductAbout />
      </div>
      <ProductDescription />
    </div>
  );
};

export default ProductInfo;
