import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addOrderDelivery } from '@/redux/products/slice';

import { Container, Label, Input, Btn, RadioLabel, Radio, Wrap, RadioWrap } from './NP.styled';
const NP = () => {
  const [type, setType] = useState('');
  const [city, setCity] = useState('');
  const [office, setOffice] = useState('');
  const [isCorrect, setCorrect] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (type !== '' && city !== '' && office !== '') {
      return setCorrect(true);
    }
    setCorrect(false);
  }, [city, office, type]);

  const onRadioChange = (evt) => {
    setType(evt.target.value);
  };
  const onCityChange = (evt) => {
    setCity(evt.target.value);
  };
  const onOfficeChange = (evt) => {
    setOffice(evt.target.value);
  };

  const onBtnClick = () => {
    dispatch(addOrderDelivery({ delivery: { company: 'Нова Пошта', type: type, city: city, office: office } }));
  };
  return (
    <Container>
      <RadioWrap>
        <RadioLabel>
          <Radio
            type="radio"
            value="Відділення"
            name="NP"
            onChange={onRadioChange}
          />
          У відділення
        </RadioLabel>
        <RadioLabel>
          <Radio
            type="radio"
            value="Поштомат"
            name="NP"
            onChange={onRadioChange}
          />
          У поштомат
        </RadioLabel>
        <RadioLabel>
          <Radio
            type="radio"
            value="Кур'єр"
            name="NP"
            onChange={onRadioChange}
          />
          Кур&apos;єром
        </RadioLabel>
      </RadioWrap>
      <Wrap>
        <Label>
          Місто<span>*</span>
          <Input
            type="text"
            required
            onChange={onCityChange}
          />
        </Label>
        <Label>
          Відділення<span>*</span>
          <Input
            type="text"
            required
            onChange={onOfficeChange}
          />
        </Label>
      </Wrap>
      {isCorrect && (
        <Btn
          type="button"
          onClick={onBtnClick}
        >
          Продовжити
        </Btn>
      )}
    </Container>
  );
};

export default NP;
