import { useEffect, useState } from 'react';
import {
  Button,
  ButtonReset,
  ContainerInput,
  Field,
  InputMax,
  InputMin,
  Progress,
  RangeInput,
  RangeMax,
  RangeMin,
  Slider,
  Text,
  Wrapper,
  WrapperPrice,
} from './PriceInput.styled';

export const PriceInput = ({ data, fnFilter, min, max }) => {
  const [sliderValueMax, setSliderValueMax] = useState(10000);

  const [sliderValue, setSliderValue] = useState([2500, 7500]);

  useEffect(() => {
    setSliderValue([+min, +max]);
    setSliderValueMax(max + (max / 10) * 3);
  }, [data, max, min, setSliderValue]);

  const handleSliderChange = (event) => {
    const { name, value } = event.target;
    let number = value;
    let priceGap = 500;
    if (number === '') {
      number = '0';
    }
    const intValue = parseInt(number);
    if (/^\d*$/.test(number) && intValue >= 0 && intValue <= sliderValueMax) {
      const otherValue = name === 'min' ? sliderValue[1] : sliderValue[0];
      const difference = Math.abs(otherValue - intValue);
      if (difference >= priceGap) {
        let newPosition;
        if (name === 'min') {
          if (intValue <= sliderValue[1] - priceGap) {
            newPosition = [intValue, sliderValue[1]];
          } else {
            newPosition = [sliderValue[1] - priceGap, sliderValue[1]];
          }
        } else {
          if (intValue >= sliderValue[0] + priceGap) {
            newPosition = [sliderValue[0], intValue];
          } else {
            newPosition = [sliderValue[0], sliderValue[0] + priceGap];
          }
        }
        setSliderValue(newPosition);
      } else if (name === 'min' && intValue >= sliderValue[1]) {
        setSliderValue([sliderValue[1] - priceGap, sliderValue[1]]);
      } else if (name === 'max' && intValue <= sliderValue[0]) {
        setSliderValue([sliderValue[0], sliderValue[0] + priceGap]);
      }
    }
  };

  const resetPrice = () => {
    setSliderValue([min, max]);
    fnFilter([min, max]);
  };

  useEffect(() => {
    const rangeInputs = document.querySelectorAll('.range-input input');
    const progress = document.querySelector('.progress');
    progress.style.left = (sliderValue[0] / rangeInputs[0].max) * 100 + '%';
    progress.style.right = 100 - (sliderValue[1] / rangeInputs[1].max) * 100 + '%';
  }, [sliderValue]);

  useEffect(() => {
    const rangeInputs = document.querySelectorAll('.range-input input');
    const progress = document.querySelector('.progress');

    let priceGap = 500;
    rangeInputs.forEach((input) => {
      input.addEventListener('input', (e) => {
        let minVal = parseInt(sliderValue[0]);
        let maxVal = parseInt(sliderValue[1]);

        progress.style.left = (minVal / rangeInputs[0].max) * 100 + '%';
        progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + '%';
      });
    });
  }, [sliderValue]);

  const reconfirm = () => {
    fnFilter(sliderValue);
  };

  return (
    <ContainerInput>
      <WrapperPrice>
        <Text>Ціна</Text>
        <ButtonReset
          type="button"
          onClick={resetPrice}
        >
          Скасувати
        </ButtonReset>
      </WrapperPrice>
      <Wrapper>
        <Field>
          <InputMin
            type="text"
            name="min"
            value={sliderValue[0]}
            onChange={handleSliderChange}
          />
        </Field>

        <Field>
          <InputMax
            type="text"
            name="max"
            value={sliderValue[1]}
            onChange={handleSliderChange}
          />
        </Field>

        <Button
          type="button"
          onClick={reconfirm}
        >
          OK
        </Button>
      </Wrapper>
      <Slider>
        <Progress className="progress" />
      </Slider>
      <RangeInput className="range-input">
        <RangeMin
          className="range-min"
          type="range"
          name="min"
          min="0"
          max={sliderValueMax}
          value={sliderValue[0]}
          onChange={handleSliderChange}
        />
        <RangeMax
          type="range"
          name="max"
          min="0"
          max={sliderValueMax}
          value={sliderValue[1]}
          onChange={handleSliderChange}
        />
      </RangeInput>
    </ContainerInput>
  );
};
