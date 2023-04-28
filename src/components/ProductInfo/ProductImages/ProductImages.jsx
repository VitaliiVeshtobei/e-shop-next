import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { selectProductInfo } from '@/redux/products/selectors';
import ImageModal from './ImageModal/ImageModal';

import { MainImageWrap, DiscountPercent, Slide, Container, PrevArrow, NextArrow } from './ProductImages.styled';

const ProductImages = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [pictures, setPictures] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { main_image, images, name, discount, price } = useSelector(selectProductInfo);

  useEffect(() => {
    const newImg = main_image?.replace(/w200/gi, 'w640').replace(/h200/gi, 'h640');
    setImage(newImg);
    setTitle(name);
    setDiscountPrice(discount);
    setPictures(images);
  }, [main_image, name, discount, images, pictures]);

  const CustomPrevArrow = ({ onClick }) => (
    <PrevArrow
      type="button"
      onClick={onClick}
    >
      <AiOutlineLeft />
    </PrevArrow>
  );

  const CustomNextArrow = ({ onClick }) => (
    <NextArrow
      type="button"
      onClick={onClick}
    >
      <AiOutlineRight />
    </NextArrow>
  );

  const onSliderImgClick = (img) => {
    setImage(img.replace(/w200/gi, 'w640').replace(/h200/gi, 'h640'));
  };

  const onMainImageClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,

    responsive: [
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <Container>
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
            fill={true}
            alt={title}
            sizes="100%, 100%"
            onClick={onMainImageClick}
          />
        </MainImageWrap>
        <div>
          <Slide {...settings}>
            {pictures.map((img, index) => (
              <div key={index}>
                <Image
                  src={img ? img.url : '/images/placeholder.jpg'}
                  alt={img.id}
                  width={100}
                  height={100}
                  onClick={() => onSliderImgClick(img?.url)}
                />
              </div>
            ))}
          </Slide>
        </div>
      </Container>
      {isModalOpen && (
        <ImageModal
          onClose={onMainImageClick}
          img={image}
        />
      )}
    </>
  );
};

export default ProductImages;
