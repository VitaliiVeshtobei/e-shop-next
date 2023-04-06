import { v4 as uuidv4 } from 'uuid';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {
  ImageContainer,
  Wrapper,
  ButtonSlide,
  SlideBtnContainer,
  SlideContainer,
  Button,
  ButtonLeft,
  ButtonRight,
} from './Slider.styled';

import { useState } from 'react';
import { useEffect } from 'react';
import image1 from '../../../public/images/slider-1.jpg';
import image2 from '../../../public/images/slider-2.jpg';
import image3 from '../../../public/images/slider-3.jpg';
import image4 from '../../../public/images/slider-4.jpg';
import image5 from '../../../public/images/slider-5.jpg';

const dataSlider = [
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem-1',
    img: image1,
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem-2',
    img: image2,
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem-3',
    img: image3,
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem-4',
    img: image4,
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem-5',
    img: image5,
  },
];

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const newTimeoutId = setTimeout(() => {
        if (slideIndex === dataSlider.length) {
          setSlideIndex(1);
        } else {
          setSlideIndex(slideIndex + 1);
        }
      }, 3000);
      setTimeoutId(newTimeoutId);

      return () => clearTimeout(newTimeoutId);
    }
  }, [isHovered, slideIndex]);

  const nextSlide = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleSliderHover = () => {
    setIsHovered(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleSliderLeave = () => {
    setIsHovered(false);
    const newTimeoutId = setTimeout(() => {
      if (slideIndex === dataSlider.length) {
        setSlideIndex(1);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    }, 3000);
    setTimeoutId(newTimeoutId);
  };

  return (
    <Wrapper
      onMouseEnter={handleSliderHover}
      onMouseLeave={handleSliderLeave}
      style={{ marginTop: 30 }}
    >
      <SlideContainer>
        {dataSlider.map((item, index) => {
          return slideIndex === index + 1 ? (
            <ImageContainer
              anime="true"
              key={item.id}
              src={item.img}
              alt={item.title}
              priority
            />
          ) : (
            <ImageContainer
              anime="false"
              key={item.id}
              src={item.img}
              alt={item.title}
              priority
            />
          );
        })}
      </SlideContainer>
      <SlideBtnContainer>
        {dataSlider.map((item, index) => (
          <ButtonSlide
            key={item.id}
            onClick={() => moveDot(index + 1)}
            dot={slideIndex === index + 1}
          ></ButtonSlide>
        ))}
      </SlideBtnContainer>
      <ButtonLeft
        type="button"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft />
      </ButtonLeft>
      <ButtonRight
        type="button"
        onClick={nextSlide}
      >
        <BsChevronCompactRight />
      </ButtonRight>
    </Wrapper>
  );
};
