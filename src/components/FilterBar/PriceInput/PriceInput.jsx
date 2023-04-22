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
import { Message } from '../Message/Message';

export const PriceInput = ({ data, fnFilter, min, max }) => {
  const [sliderValue, setSliderValue] = useState([min, max]);
  const [messageMin, setMessageMin] = useState(false);
  const [messageMax, setMessageMax] = useState(false);

  useEffect(() => {
    setSliderValue([+min, +max]);
  }, [data, max, min, setSliderValue]);

  const handleSliderChange = (event) => {
    const { name, value } = event.target;
    let number = value;
    if (number === '') {
      number = '0';
    }
    let intValue = parseInt(number);

    if (name === 'max' && intValue > max) {
      setMessageMax(true);
    }
    if (name === 'max' && intValue <= max) {
      setMessageMax(false);
    }
    if (name === 'min' && intValue < min) {
      setMessageMin(true);
    }

    if (name === 'min' && intValue >= min) {
      setMessageMin(false);
    }

    if (name === 'max' && intValue.toString().length > max.toString().length + 1) {
      return;
    }
    if (name === 'min' && intValue > sliderValue[1]) {
      return;
    }

    if (name === 'max' && intValue <= sliderValue[0]) {
      return setSliderValue([sliderValue[0], sliderValue[0]]);
    }

    let newPosition;
    if (name === 'min') {
      newPosition = [intValue, sliderValue[1]];
    } else {
      newPosition = [sliderValue[0], intValue];
    }
    return setSliderValue(newPosition);
  };

  useEffect(() => {
    const rangeInputs = document.querySelectorAll('.range-input input');
    const progress = document.querySelector('.progress');
    const calculateProgressPosition = () => {
      const minVal = parseInt(sliderValue[0]);
      const maxVal = parseInt(sliderValue[1]);
      const minValuePercentage = ((minVal - rangeInputs[0].min) / (rangeInputs[0].max - rangeInputs[0].min)) * 100;
      const maxValuePercentage = ((maxVal - rangeInputs[1].min) / (rangeInputs[1].max - rangeInputs[1].min)) * 100;

      progress.style.left = minValuePercentage <= 0 ? '0%' : `${minValuePercentage - 2}%`;
      progress.style.right = maxValuePercentage > 100 ? '100%' : `${100 - maxValuePercentage - 2}%`;
    };

    calculateProgressPosition();

    rangeInputs.forEach((input) => {
      input.addEventListener('input', calculateProgressPosition);
    });

    return () => {
      rangeInputs.forEach((input) => {
        input.removeEventListener('input', calculateProgressPosition);
      });
    };
  }, [sliderValue, messageMin, messageMax]);

  const reconfirm = () => {
    if (sliderValue[1] < sliderValue[0]) {
      setSliderValue([sliderValue[0], sliderValue[0]]);
      return fnFilter([sliderValue[0], sliderValue[0]]);
    }
    fnFilter(sliderValue);
  };

  const resetPrice = () => {
    setSliderValue([min, max]);
    fnFilter([min, max]);

    setMessageMax(false);

    setMessageMin(false);
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
          <Message
            text={`мін. ${min}`}
            status={messageMin}
          />
          <InputMin
            type="text"
            name="min"
            value={sliderValue[0]}
            onChange={handleSliderChange}
            status={messageMin}
          />
        </Field>

        <Field>
          <Message
            text={`мaкс. ${max}`}
            status={messageMax}
          />
          <InputMax
            type="text"
            name="max"
            value={sliderValue[1]}
            onChange={handleSliderChange}
            status={messageMax}
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
          min={min}
          max={max}
          value={sliderValue[0]}
          onChange={handleSliderChange}
        />
        <RangeMax
          type="range"
          name="max"
          min={min}
          max={max}
          value={sliderValue[1]}
          onChange={handleSliderChange}
        />
      </RangeInput>
    </ContainerInput>
  );
};
