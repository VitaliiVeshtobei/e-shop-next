import { useSelector } from 'react-redux';
import { selectProductInfo } from '@/redux/products/selectors';
import Image from 'next/image';

import { MainImageWrap } from './ProductImages.styled';

const ProductImages = () => {
  const { main_image, images, name } = useSelector(selectProductInfo);

  return (
    <div>
      <MainImageWrap>
        <Image
          src={main_image}
          width={300}
          height={300}
          alt={name}
        />
      </MainImageWrap>
    </div>
  );
};

export default ProductImages;
