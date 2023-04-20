import { useSelector } from 'react-redux';
import { selectProductInfo } from '@/redux/products/selectors';
import Image from 'next/image';

import { MainImageWrap, DiscountPercent } from './ProductImages.styled';
import { useEffect, useState } from 'react';

const ProductImages = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const { main_image, images, name, discount, price } = useSelector(selectProductInfo);

  useEffect(() => {
    const newImg = main_image?.replace(/200/gi, '640');
    setImage(newImg);
    setTitle(name);
    setDiscountPrice(discount);
  }, [main_image, name, discount]);

  return (
    <div>
      <MainImageWrap>
        <div>
          {discountPrice && (
            <DiscountPercent>
              <p>-{Math.ceil((discount.value / price) * 100)}%</p>
            </DiscountPercent>
          )}
        </div>
        <Image
          src={image ? image : '/images/placeholder.jpg'}
          width={360}
          height={360}
          alt={title}
        />
      </MainImageWrap>
    </div>
  );
};

export default ProductImages;
