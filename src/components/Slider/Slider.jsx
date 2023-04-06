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

const dataSlider = [
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem-1',
    img: '/images/slider-1.jpg',
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem-2',
    img: '/images/slider-2.jpg',
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem-3',
    img: '/images/slider-3.jpg',
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem-4',
    img: '/images/slider-4.jpg',
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
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          ) : (
            <ImageContainer
              anime="false"
              key={item.id}
              src={item.img}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              quality={100}
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
